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

var dataDoToday = [
  {
    Task: "Task 1",
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Task: "Task 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  {
    Task: "Task 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
  },
];

const Task = () => {
  const [supportModalVisible, setSupportModalVisible] = useState(false);
  const [doTodayModalVisible, setDoTodayModalVisible] = useState(false);
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [selectedSupportTask, setSelectedSupportTask] = useState(null);
  const [selectedDoTodayCell, setSelectedDoTodayCell] = useState(null);
  const [selectedDoTodayTask, setSelectedDoTodayTask] = useState(null);
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [problemText, setProblemText] = useState("");
  const [taskCounter, setTaskCounter] = useState(16);
  const [supportInfo, setSupportInfo] = useState({
    Support: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
  });
  const [dataSupport, setDataSupport] = useState([
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
  ]);
  const [doTodayInfo, setDoTodayInfo] = useState({
    Task: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
  });

  const handleSupportCellClick = (cell) => {
    setSelectedSupportCell(cell);

    const task = dataSupport.find((task) => task.Support === cell);
    setSelectedSupportTask(task);

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

  const handleDoTodayCellClick = (cell) => {
    setSelectedDoTodayCell(cell);

    const task = dataDoToday.find((task) => task.Task === cell);
    setSelectedDoTodayTask(task);

    setDoTodayModalVisible(true);
  };

  const handleSupportModalClose = () => {
    setSelectedSupportCell(null);
    setSupportModalVisible(false);
  };

  const handleDoTodayModalClose = () => {
    setSelectedDoTodayCell(null);
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
    } else if (column === "Do Today") {
      dataDoToday.push(newTask);
    }
  };

  const handleAddProblem = () => {
    setShowAddProblem(true);
  };

  const handleProblemTextChange = (e) => {
    setProblemText(e.target.value);
  };

  const handleProblemSubmit = () => {
    setShowAddProblem(false);
    setProblemText("");
  };

  const handleSupportInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : "";
    }

    setSupportInfo({ ...supportInfo, [field]: value });
  };

  const handleDoTodayInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : "";
    }

    setDoTodayInfo({ ...doTodayInfo, [field]: value });
  };

  const handleSupportUpdate = () => {
    if (!selectedSupportTask) {
      return;
    }

    const taskIndex = dataSupport.findIndex(
      (task) => task.Support === selectedSupportCell
    );

    if (taskIndex !== -1) {
      dataSupport[taskIndex] = {
        ...dataSupport[taskIndex],
        ...supportInfo,
      };

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

      // Cập nhật thông tin Problem vào cột Support
      const supportTask = {
        Support: selectedDoTodayTask.Task,
        Assignee: selectedDoTodayTask.Assignee,
        User: selectedDoTodayTask.User,
        Project: selectedDoTodayTask.Project,
        Priority: selectedDoTodayTask.Priority,
        dueDate: selectedDoTodayTask.dueDate,
        Problem: problemText,
      };

      setDataSupport([...dataSupport, supportTask]);
      setProblemText("");
      handleDoTodayModalClose();
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
              </Col>
              <Col span={4}>
                <Divider orientation="left">Do Today</Divider>
                {dataDoToday.map((task) => (
                  <div
                    key={task.Task}
                    className={`task-cell ${
                      selectedDoTodayCell === task.Task ? "selected" : ""
                    }`}
                    onClick={() => handleDoTodayCellClick(task.Task)}
                  >
                    <div>Task: {task.Task}</div>
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
                  onClick={() => handleAddTask("Do Today")}
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
            {/* Do Today Modal */}
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
                  placeholder={doTodayInfo.Task}
                  onChange={(e) =>
                    handleDoTodayInputChange("Task", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Assignee:</label>
                <Input
                  placeholder={doTodayInfo.Assignee}
                  onChange={(e) =>
                    handleDoTodayInputChange("Assignee", e.target.value)
                  }
                />
              </div>
              <div>
                <label>User:</label>
                <Input
                  placeholder={doTodayInfo.User}
                  onChange={(e) =>
                    handleDoTodayInputChange("User", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Project:</label>
                <Input
                  placeholder={doTodayInfo.Project}
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
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
