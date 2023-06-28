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
import "./Task.css"; // Import CSS file

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Content } from "antd/es/layout/layout";

var dataReview = [
  {
    Review: "Support 1",
    Assignee: "Assignee 1",
    User: "User 1",
    Project: "Project 1",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Review: "Support 2",
    Assignee: "Assignee 2",
    User: "User 2",
    Project: "Project 2",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  {
    Review: "Support 3",
    Assignee: "Assignee 3",
    User: "User 3",
    Project: "Project 3",
    Priority: "Low",
    dueDate: "2023-08-10",
  },
  {
    Review: "Support 4",
    Assignee: "Assignee 4",
    User: "User 4",
    Project: "Project 4",
    Priority: "Low",
    dueDate: "2023-08-11",
  },
  {
    Review: "Support 5",
    Assignee: "Assignee 5",
    User: "User 5",
    Project: "Support",
    Priority: "High",
    dueDate: "2023-07-20",
  },
  {
    Review: "Support 6",
    Assignee: "Assignee 6",
    User: "User 6",
    Project: "Support",
    Priority: "Medium",
    dueDate: "2023-07-25",
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
  {
    Support: "Support 5",
    Assignee: "Assignee 5",
    User: "User 5",
    Project: "Support",
    Priority: "High",
    dueDate: "2023-07-20",
  },
  {
    Support: "Support 6",
    Assignee: "Assignee 6",
    User: "User 6",
    Project: "Support",
    Priority: "Medium",
    dueDate: "2023-07-25",
  },
];

const Task = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [taskCounter, setTaskCounter] = useState(16);

  const handleCellClick = (cell) => {
    setSelectedCell(cell);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedCell(null); // Reset selected cell when closing modal
    setModalVisible(false);
  };

  const handleAddTask = (column) => {
    setTaskCounter(taskCounter + 1);
    const newTask = {
      Review: `New Review`,
      Support: `New Support`,
      Assignee: "",
      User: "",
      Project: column,
      Priority: "",
      "Due Date": "",
    };
    dataSupport.push(newTask);
    dataReview.push(newTask);
    handleCellClick(newTask.Support);
  };

  const getTasksForReviewColumn = (columnName) => {
    return dataReview.filter((task) => task.Project === columnName);
  };

  const getTasksForSupportColumn = (columnName) => {
    return dataSupport.filter((task) => task.Project === columnName);
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
                    onClick={() => handleCellClick(task.Review)}
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
                    onClick={() => handleCellClick(task.Support)}
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
              <Col span={4}>
                <Divider orientation="left">Do Today</Divider>
                {[5, 6, 7, 8].map((cell) => (
                  <div
                    key={cell}
                    className="task-cell"
                    onClick={() => handleCellClick(cell)}
                  >
                    col-{cell}
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
            <Modal
              title="Thông tin"
              visible={modalVisible}
              onCancel={handleModalClose}
              footer={null}
            >
              <p>Thông tin cho ô {selectedCell}</p>
              {/* Add your table content or other information here */}
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
