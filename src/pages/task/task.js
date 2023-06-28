import {
  Col,
  Divider,
  Row,
  Modal,
  Button,
  Tag,
  Input,
  Select,
  DatePicker,
  Checkbox,
  notification,
  Space,
  Layout,
} from "antd";

import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi"; // Import Vietnamese locale for moment (or any other locale you prefer)
import "./Task.css"; // Import CSS file

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Content } from "antd/es/layout/layout";

const { Option } = Select;

var dataReview = [
  {
    Review: "Review 1",
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Review: "Review 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  {
    Review: "Review 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
  },
];

var dataSupport = [
  {
    Support: "Support 1",
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Support: "Support 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  {
    Support: "Support 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
  },
  {
    Support: "Support 4",
    Assignee: "Assignee 4",
    User: "User 4",
    Project: "Project 4",
    Priority: "Low",
    dueDate: "2023-08-11",
  },
];

const Task = () => {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [supportModalVisible, setSupportModalVisible] = useState(false);
  const [selectedReviewCell, setSelectedReviewCell] = useState(null);
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [taskCounter, setTaskCounter] = useState(16);
  const [reviewInfo, setReviewInfo] = useState({
    Review: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
  });
  const [selectedReviewTask, setSelectedReviewTask] = useState(null);

  const handleReviewCellClick = (cell) => {
    setSelectedReviewCell(cell);

    // Tìm task tương ứng dựa trên giá trị cell
    const task = dataReview.find((task) => task.Review === cell);

    // Lưu trữ task được chọn
    setSelectedReviewTask(task);

    // Khởi tạo thông tin trong reviewInfo từ task được chọn
    setReviewInfo({
      Review: task.Review,
      Assignee: task.Assignee,
      User: task.User,
      Project: task.Project,
      Priority: task.Priority,
      dueDate: task.dueDate,
    });

    setReviewModalVisible(true);
  };

  const handleSupportCellClick = (cell) => {
    setSelectedSupportCell(cell);
    setSupportModalVisible(true);
  };

  const handleReviewModalClose = () => {
    setSelectedReviewCell(null); // Reset selected cell when closing modal
    setReviewModalVisible(false);
  };

  const handleSupportModalClose = () => {
    setSelectedSupportCell(null); // Reset selected cell when closing modal
    setSupportModalVisible(false);
  };

  const handleAddTask = (column) => {
    setTaskCounter(taskCounter + 1);
    const newTask = {
      Review: `Reviewer`,
      Assignee: "Assignee",
      User: "User",
      Project: "Project Name",
      Priority: "",
      dueDate: "",
    };
    if (column === "Review") {
      dataReview.push(newTask);
      handleReviewCellClick(newTask.Review);
    } else if (column === "Support") {
      dataSupport.push(newTask);
      handleSupportCellClick(newTask.Support);
    }
  };

  // Function to handle input changes in the Review Modal
  const handleReviewInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : ""; // Format the date value
    }

    setReviewInfo({ ...reviewInfo, [field]: value });
  };

  // Function to handle the Update button click in the Review Modal
  const handleReviewUpdate = () => {
    // Kiểm tra xem task đã được chọn chưa
    if (!selectedReviewTask) {
      return;
    }

    // Tìm index của task trong mảng dataReview
    const taskIndex = dataReview.findIndex(
      (task) => task.Review === selectedReviewCell
    );

    // Kiểm tra xem task có tồn tại trong mảng không
    if (taskIndex !== -1) {
      // Cập nhật thông tin trong task
      dataReview[taskIndex] = {
        ...dataReview[taskIndex],
        ...reviewInfo,
      };

      // Đóng Modal
      handleReviewModalClose();
    }
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ padding: "50px" }}>
            <Row gutter={[16, 24]}>
              <Col span={4}>
                <Divider orientation="left">Review</Divider>
                {dataReview.map((task) => (
                  <div
                    key={task.Review}
                    className="task-cell"
                    onClick={() => handleReviewCellClick(task.Review)}
                  >
                    <div>{task.Review}</div>
                    <div>{task.Assignee}</div>
                    <div>{task.User}</div>
                    <div>{task.Project}</div>
                    <div>{task.Priority}</div>
                    <div>{task.dueDate}</div>
                  </div>
                ))}
                <Button
                  className="add-task-button"
                  type="primary"
                  onClick={() => handleAddTask("Review")}
                >
                  Add Task
                </Button>
              </Col>
              <Col span={4}>
                <Divider orientation="left">Support</Divider>
                {dataSupport.map((task) => (
                  <div
                    key={task.Support}
                    className="task-cell"
                    onClick={() => handleSupportCellClick(task.Support)}
                  >
                    <div>{task.Support}</div>
                    <div>{task.Assignee}</div>
                    <div>{task.User}</div>
                    <div>{task.Project}</div>
                    <div>{task.Priority}</div>
                    <div>{task.dueDate}</div>
                  </div>
                ))}
                <Button
                  className="add-task-button"
                  type="primary"
                  onClick={() => handleAddTask("Support")}
                >
                  Add Task
                </Button>
              </Col>
              {/* ... */}
            </Row>
            {/* Review Modal */}
            <Modal
              title="Review Task Information"
              visible={reviewModalVisible}
              onCancel={handleReviewModalClose}
              footer={[
                <Button
                  key="update"
                  type="primary"
                  onClick={handleReviewUpdate}
                >
                  Update
                </Button>,
              ]}
            >
              <div>
                <label>Review:</label>
                <Input
                  value={reviewInfo.Review}
                  onChange={(e) =>
                    handleReviewInputChange("Review", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  value={reviewInfo.Assignee}
                  onChange={(e) =>
                    handleReviewInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  value={reviewInfo.User}
                  onChange={(e) =>
                    handleReviewInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  value={reviewInfo.Project}
                  onChange={(e) =>
                    handleReviewInputChange("Project", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Priority: </label>
                <Select
                  value={reviewInfo.Priority}
                  onChange={(value) =>
                    handleReviewInputChange("Priority", value)
                  }
                  style={{ width: "25%" }}
                  dropdownStyle={{ minWidth: "120px" }}
                >
                  <Option value="High">High</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Low">Low</Option>
                </Select>
              </div>
              <div>
                <label>Due Date: </label>
                <DatePicker
                  value={
                    reviewInfo.dueDate
                      ? moment(reviewInfo.dueDate, "YYYY-MM-DD")
                      : null
                  }
                  onChange={(date) => handleReviewInputChange("dueDate", date)}
                  format="YYYY-MM-DD"
                />
              </div>
            </Modal>
            {/* Support Modal */}
            <Modal
              title="Support Task Information"
              visible={supportModalVisible}
              onCancel={handleSupportModalClose}
              footer={null}
            >
              <p>Information for Support Task: {selectedSupportCell}</p>
              {/* Add your table content or other information here */}
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
