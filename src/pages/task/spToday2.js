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

var dataSupport = [
  {
    Support: "Support 1",
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
    Problem: "Problem 1",
  },
  {
    Support: "Support 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
    Problem: "Problem 2",
  },
  {
    Support: "Support 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
    Problem: "Problem 3",
  },
  {
    Support: "Support 4",
    Assignee: "Assignee 4",
    User: "User 4",
    Project: "Project 4",
    Priority: "Low",
    dueDate: "2023-08-11",
    Problem: "Problem 4",
  },
];

var dataDoToday = [
  {
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  {
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
  },
];

const Task = () => {
  const [supportModalVisible, setSupportModalVisible] = useState(false);
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [doTodayModalVisible, setDoTodayModalVisible] = useState(false);
  const [selectedSupportTask, setSelectedSupportTask] = useState(null);
  const [selectedDoTodayCell, setSelectedDoTodayCell] = useState(null);
  const [taskCounter, setTaskCounter] = useState(16);
  const [doTodayCounter, setDoTodayCounter] = useState(0);
  const [selectedDoTodayTask, setSelectedDoTodayTask] = useState(null);
  const [supportInfo, setSupportInfo] = useState({
    Support: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
    Problem: "",
  });
  const [doTodayInfo, setDoTodayInfo] = useState({
    Task: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
    Problem: "",
  });
  const [addProblemVisible, setAddProblemVisible] = useState(false);
  const [doTodayProblem, setDoTodayProblem] = useState("");

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
      Problem: task.Problem,
    });

    setSupportModalVisible(true);
  };

  const handleDoTodayCellClick = (cell) => {
    setSelectedDoTodayCell(cell);

    // Tìm task tương ứng dựa trên giá trị cell
    const task = dataDoToday.find((task) => task.Task === cell);

    // Lưu trữ task được chọn
    setSelectedDoTodayTask(task);

    // Khởi tạo thông tin trong doTodayInfo từ task được chọn
    setDoTodayInfo({
      Task: task.Task,
      Assignee: task.Assignee,
      User: task.User,
      Project: task.Project,
      Priority: task.Priority,
      dueDate: task.dueDate,
      Problem: task.Problem,
    });

    setDoTodayModalVisible(true);
  };

  const handleSupportModalClose = () => {
    setSelectedSupportCell(null); // Reset selected cell when closing modal
    setSupportModalVisible(false);
  };

  const handleDoTodayModalClose = () => {
    setSelectedDoTodayCell(null); // Reset selected cell when closing modal
    setDoTodayModalVisible(false);
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
      // dataReview.push(newTask);
    } else if (column === "Support") {
      dataSupport.push(newTask);
    }
  };

  const handleAddDoTodayTask = () => {
    setDoTodayCounter(doTodayCounter + 1);
    const newTask = {
      Task: `Do Today Task ${doTodayCounter + 1}`,
      Assignee: "Assignee",
      User: "User",
      Project: "Project Name",
      Priority: "",
      dueDate: "",
    };
    dataDoToday.push(newTask);
  };

  // Function to handle input changes in the Support Modal
  const handleSupportInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : ""; // Format the date value
    }

    setSupportInfo({ ...supportInfo, [field]: value });
  };

  const handleDoTodayInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : "";
    }

    if (field === "Problem") {
      setDoTodayProblem(value); // Cập nhật giá trị của doTodayProblem
    }

    setDoTodayInfo({ ...doTodayInfo, [field]: value });
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

  const handleDoTodayUpdate = () => {
    if (!selectedDoTodayTask) {
      return;
    }

    const taskIndex = dataDoToday.findIndex(
      (task) => task.Task === selectedDoTodayCell
    );

    if (taskIndex !== -1) {
      dataDoToday[taskIndex] = {
        ...dataDoToday[taskIndex],
        ...doTodayInfo,
      };

      handleDoTodayModalClose();

      // Tạo một task mới cho cột "Support"
      const newSupportTask = {
        Support: `Support`, // Giả sử sử dụng giá trị của taskCounter để đặt tên task mới
        Assignee: doTodayInfo.Assignee,
        User: doTodayInfo.User,
        Project: doTodayInfo.Project,
        Priority: doTodayInfo.Priority,
        dueDate: doTodayInfo.dueDate,
        Problem: doTodayProblem, // Sử dụng giá trị của doTodayProblem đã nhập
      };

      dataSupport.push(newSupportTask);

      setTaskCounter(taskCounter + 1);
    }
  };

  const handleAddProblem = () => {
    setAddProblemVisible(true);
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
                <Divider orientation="left">Support</Divider>
                {dataSupport.map((task) => (
                  <div
                    key={task.Support}
                    className={`task-cell ${
                      selectedSupportCell === task.Support ? "selected" : ""
                    }`}
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
              </Col>
              <Col span={4}>
                <Divider orientation="left">Do Today</Divider>
                {dataDoToday.map((task) => (
                  <div
                    key={task.Task}
                    className="task-cell"
                    onClick={() => handleDoTodayCellClick(task.Task)}
                  >
                    <div>{task.Task}</div>
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
                  onClick={handleAddDoTodayTask}
                >
                  Add Task
                </Button>
              </Col>
            </Row>

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
                  value={supportInfo.Support}
                  onChange={(e) =>
                    handleSupportInputChange("Support", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  value={supportInfo.Assignee}
                  onChange={(e) =>
                    handleSupportInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  value={supportInfo.User}
                  onChange={(e) =>
                    handleSupportInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  value={supportInfo.Project}
                  onChange={(e) =>
                    handleSupportInputChange("Project", e.target.value)
                  }
                />
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
            <Modal
              title="Do Today Task Information"
              visible={doTodayModalVisible}
              onCancel={handleDoTodayModalClose}
              footer={[
                <Button
                  key="update"
                  type="primary"
                  onClick={handleDoTodayUpdate}
                >
                  Update
                </Button>,
              ]}
            >
              <div>
                <label>Task:</label>
                <Input
                  value={doTodayInfo.Task}
                  onChange={(e) =>
                    handleDoTodayInputChange("Task", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  value={doTodayInfo.Assignee}
                  onChange={(e) =>
                    handleDoTodayInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  value={doTodayInfo.User}
                  onChange={(e) =>
                    handleDoTodayInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  value={doTodayInfo.Project}
                  onChange={(e) =>
                    handleDoTodayInputChange("Project", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Priority:</label>
                <Select
                  value={doTodayInfo.Priority}
                  onChange={(value) =>
                    handleDoTodayInputChange("Priority", value)
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
                    doTodayInfo.dueDate ? moment(doTodayInfo.dueDate) : null
                  }
                  onChange={(date) => handleDoTodayInputChange("dueDate", date)}
                />
              </div>
              {addProblemVisible ? (
                <div>
                  <label>Problem:</label>
                  <Input
                    value={doTodayInfo.Problem}
                    onChange={(e) =>
                      handleDoTodayInputChange("Problem", e.target.value)
                    }
                  />
                </div>
              ) : (
                <Button type="text" onClick={handleAddProblem}>
                  Add Problem
                </Button>
              )}
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
