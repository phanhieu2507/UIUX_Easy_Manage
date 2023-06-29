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
  Rate,
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
    Rating: "",
  },
  {
    Review: "Review 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
    Rating: "",
  },
  {
    Review: "Review 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
    Rating: "",
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
];

const Task = () => {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [selectedReviewCell, setSelectedReviewCell] = useState(null);
  const [selectedReviewTask, setSelectedReviewTask] = useState(null);
  const [supportModalVisible, setSupportModalVisible] = useState(false);
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [selectedSupportTask, setSelectedSupportTask] = useState(null);
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [problemText, setProblemText] = useState("");
  const [taskCounter, setTaskCounter] = useState(16);
  const [reviewInfo, setReviewInfo] = useState({
    Review: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
    Rating: null, // Thêm trường Rating vào cấu trúc dữ liệu
  });
  const [supportInfo, setSupportInfo] = useState({
    Support: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
  });

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

    // Tìm task tương ứng dựa trên giá trị cell
    const task = dataSupport.find((task) => task.Support === cell);

    // Lưu trữ task được chọn
    setSelectedSupportTask(task);

    // Khởi tạo thông tin trong supportInfo từ task được chọn
    setSupportInfo({
      Support: task.Support,
      Assignee: task.Assignee,
      User: task.User,
      Project: task.Project,
      Priority: task.Priority,
      dueDate: task.dueDate,
    });

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
    } else if (column === "Support") {
      dataSupport.push(newTask);
    }
  };

  const handleAddProblem = () => {
    setShowAddProblem(true);
  };

  const handleProblemTextChange = (e) => {
    setProblemText(e.target.value);
  };

  const handleProblemSubmit = () => {
    // Xử lý việc lưu vấn đề (problemText) vào cơ sở dữ liệu hoặc thực hiện các tác vụ khác tùy ý
    // Sau khi hoàn thành, bạn có thể đặt lại giá trị của trạng thái showAddProblem và problemText
    setShowAddProblem(false);
    setProblemText("");
  };

  // Function to handle input changes in the Review Modal
  const handleReviewInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : "";
    }

    setReviewInfo({ ...reviewInfo, [field]: value });
  };

  // Function to handle input changes in the Support Modal
  const handleSupportInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : ""; // Format the date value
    }

    setSupportInfo({ ...supportInfo, [field]: value });
  };

  // Function to handle the Update button click in the Review Modal
  const handleReviewUpdate = () => {
    if (!selectedReviewTask) {
      return;
    }

    const taskIndex = dataReview.findIndex(
      (task) => task.Review === selectedReviewCell
    );

    if (taskIndex !== -1) {
      dataReview[taskIndex] = {
        ...dataReview[taskIndex],
        ...reviewInfo,
      };

      handleReviewModalClose();
    }
  };

  // Function to handle the Update button click in the Support Modal
  const handleSupportUpdate = () => {
    // Kiểm tra xem task đã được chọn chưa
    if (!selectedSupportTask) {
      return;
    }

    // Tìm index của task trong mảng dataSupport
    const taskIndex = dataSupport.findIndex(
      (task) => task.Support === selectedSupportCell
    );

    // Kiểm tra xem task có tồn tại trong mảng không
    if (taskIndex !== -1) {
      // Cập nhật thông tin trong task
      dataSupport[taskIndex] = {
        ...dataSupport[taskIndex],
        ...supportInfo,
      };

      // Đóng Modal
      handleSupportModalClose();
    }
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ padding: "70px" }}>
            <Row gutter={[16, 24]}>
              <Col span={4}>
                <Divider orientation="left">Review</Divider>
                {dataReview.map((task) => (
                  <div
                    key={task.Review}
                    className={`task-cell ${
                      selectedReviewCell === task.Review ? "selected" : ""
                    }`}
                    onClick={() => handleReviewCellClick(task.Review)}
                  >
                    <div>Reviewer: {task.Review}</div>
                    <div>Assignee: {task.Assignee}</div>
                    <div>User: {task.User}</div>
                    <div>Project Name: {task.Project}</div>
                    <div>
                      Priority:{" "}
                      <Tag
                        color={
                          task.Priority === "High"
                            ? "red"
                            : task.Priority === "Medium"
                            ? "orange"
                            : "green"
                        }
                      >
                        {task.Priority}
                      </Tag>
                    </div>
                    <div>Due Date: {task.dueDate}</div>
                    <Rate
                      onClick={(e) => e.stopPropagation()}
                      value={task.Rating}
                    />
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
                    className={`task-cell ${
                      selectedSupportCell === task.Support ? "selected" : ""
                    }`}
                    onClick={() => handleSupportCellClick(task.Support)}
                  >
                    <div>Support: {task.Support}</div>
                    <div>Assignee: {task.Assignee}</div>
                    <div>User: {task.User}</div>
                    <div>Project Name: {task.Project}</div>
                    <div>
                      Priority:{" "}
                      <Tag
                        color={
                          task.Priority === "High"
                            ? "red"
                            : task.Priority === "Medium"
                            ? "orange"
                            : "green"
                        }
                      >
                        {task.Priority}
                      </Tag>
                    </div>
                    <div>Due Date: {task.dueDate}</div>
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
                  placeholder={reviewInfo.Review}
                  onChange={(e) =>
                    handleReviewInputChange("Review", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  placeholder={reviewInfo.Assignee}
                  onChange={(e) =>
                    handleReviewInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  placeholder={reviewInfo.User}
                  onChange={(e) =>
                    handleReviewInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  placeholder={reviewInfo.Project}
                  onChange={(e) =>
                    handleReviewInputChange("Project", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Priority:</label>
                <Select
                  value={reviewInfo.Priority}
                  onChange={(value) =>
                    handleReviewInputChange("Priority", value)
                  }
                >
                  <Option value="High">High</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Low">Low</Option>
                </Select>
              </div>
              <div>
                <label>Due Date:</label>
                <DatePicker
                  value={reviewInfo.dueDate ? moment(reviewInfo.dueDate) : null}
                  onChange={(date) => handleReviewInputChange("dueDate", date)}
                />
              </div>
              <div>
                <label>Rating:</label>
                <Rate
                  value={reviewInfo.Rating}
                  onChange={(value) => handleReviewInputChange("Rating", value)}
                />
              </div>
            </Modal>
            {/* Support Modal */}
            <Modal
              title="Support Task Information"
              visible={supportModalVisible}
              onCancel={handleSupportModalClose}
              footer={[
                <Button
                  key="update"
                  type="primary"
                  onClick={handleSupportUpdate}
                >
                  Update
                </Button>,
              ]}
            >
              <div>
                <label>Support:</label>
                <Input
                  placeholder={supportInfo.Support}
                  onChange={(e) =>
                    handleSupportInputChange("Support", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  placeholder={supportInfo.Assignee}
                  onChange={(e) =>
                    handleSupportInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  placeholder={supportInfo.User}
                  onChange={(e) =>
                    handleSupportInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  placeholder={supportInfo.Project}
                  onChange={(e) =>
                    handleSupportInputChange("Project", e.target.value)
                  }
                />
              </div>
              <div>
                {/* Hiển thị nút "Add Problem" khi showAddProblem là false */}
                {!showAddProblem && (
                  <Button type="primary" onClick={handleAddProblem}>
                    Add Problem
                  </Button>
                )}

                {/* Hiển thị ô input khi showAddProblem là true */}
                {showAddProblem && (
                  <Input
                    placeholder="Enter problem"
                    value={problemText}
                    onChange={handleProblemTextChange}
                    onPressEnter={handleProblemSubmit}
                  />
                )}
              </div>
              <div>
                <label>Priority:</label>
                <Select
                  value={supportInfo.Priority}
                  onChange={(value) =>
                    handleSupportInputChange("Priority", value)
                  }
                >
                  <Option value="High">High</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Low">Low</Option>
                </Select>
              </div>
              <div>
                <label>Due Date:</label>
                <DatePicker
                  value={
                    supportInfo.dueDate ? moment(supportInfo.dueDate) : null
                  }
                  onChange={(date) => handleSupportInputChange("dueDate", date)}
                />
              </div>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
