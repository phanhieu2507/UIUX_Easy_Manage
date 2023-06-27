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
} from "antd";

import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./Task.css"; // Import CSS file

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const { Option } = Select;

const Task = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [reviewTasks, setReviewTasks] = useState([]); // New state for Review column
  const [supportTasks, setSupportTasks] = useState([]); // New state for Support column

  const handleTaskClose = (task, columnTasks) => {
    const updatedTasks = columnTasks.filter((t) => t.id !== task.id);

    if (task.column === "Review") {
      setReviewTasks(updatedTasks);
    } else if (task.column === "Support") {
      setSupportTasks(updatedTasks);
    }
  };

  const handleCellClick = (task) => {
    setSelectedCell(task);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedCell(null);
    setModalVisible(false);
  };

  const handleTaskUserChange = (e) => {
    setSelectedCell({ ...selectedCell, user: e.target.value });
  };

  const handleTaskNameChange = (e) => {
    setSelectedCell({ ...selectedCell, name: e.target.value });
  };

  const handleProjectChange = (e) => {
    setSelectedCell({ ...selectedCell, project: e.target.value });
  };

  const handlePriorityChange = (value) => {
    setSelectedCell({ ...selectedCell, priority: value });
  };

  const handleTaskUpdate = () => {
    const updatedTask = {
      ...selectedCell,
    };

    if (selectedCell && selectedCell.column === "Review") {
      const updatedTasks = reviewTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setReviewTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Support") {
      const updatedTasks = supportTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setSupportTasks(updatedTasks);
    }

    setModalVisible(false);
  };

  const handleAddTask = (column) => {
    const newTask = {
      id: Math.random(),
      user: "Assignee",
      name: "New Task",
      project: "New Project",
      priority: "Low",
      column: column,
    };

    if (column === "Review") {
      setReviewTasks([...reviewTasks, newTask]);
    } else if (column === "Support") {
      setSupportTasks([...supportTasks, newTask]);
    }
  };

  const handleDueDateChange = (date) => {
    setSelectedCell({ ...selectedCell, dueDate: date });
  };

  return (
    <>
      <Row gutter={[16, 24]}>
        <div className="task-columns-container">
          <Col span={8} className="task-column">
            <Divider orientation="left">Review</Divider>
            {reviewTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
                <div className="task-cell-left">
                  <div className="task-user">{task.user}</div>
                  <div className="task-label">{task.name}</div>
                  <div className="task-project">{task.project}</div>
                  <Tag
                    className="task-priority"
                    color={
                      task.priority === "High"
                        ? "red"
                        : task.priority === "Medium"
                        ? "orange"
                        : "green"
                    }
                  >
                    {task.priority}
                  </Tag>
                  {task.dueDate && (
                    <div className="task-due-date">
                      Due Date: {task.dueDate.format("YYYY-MM-DD")}
                    </div>
                  )}
                </div>
                <div className="task-cell-right">
                  <Checkbox
                    className="task-checkbox"
                    onChange={onChange}
                    onClick={(e) => e.stopPropagation()}
                  ></Checkbox>
                  <Button
                    type="text"
                    className="task-close-button"
                    icon={<CloseOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTaskClose(task, reviewTasks);
                    }}
                  />
                </div>
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
          <Col span={8} className="task-column">
            <Divider orientation="left">Support</Divider>
            {supportTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
                <div className="task-cell-left">
                  <div className="task-user">{task.user}</div>
                  <div className="task-label">{task.name}</div>
                  <div className="task-project">{task.project}</div>
                  <Tag
                    className="task-priority"
                    color={
                      task.priority === "High"
                        ? "red"
                        : task.priority === "Medium"
                        ? "orange"
                        : "green"
                    }
                  >
                    {task.priority}
                  </Tag>
                  {task.dueDate && (
                    <div className="task-due-date">
                      Due Date: {task.dueDate.format("YYYY-MM-DD")}
                    </div>
                  )}
                </div>
                <div className="task-cell-right">
                  <Checkbox
                    className="task-checkbox"
                    onChange={onChange}
                    onClick={(e) => e.stopPropagation()}
                  ></Checkbox>
                  <Button
                    type="text"
                    className="task-close-button"
                    icon={<CloseOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTaskClose(task, reviewTasks);
                    }}
                  />
                </div>
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
        </div>
      </Row>

      <Modal
        title="Task Details"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Cancel
          </Button>,
          <Button
            key="submit"
            className="btn-update"
            type="primary"
            onClick={handleTaskUpdate}
          >
            Update
          </Button>,
        ]}
      >
        {selectedCell && (
          <>
            <Row
              gutter={[16, 16]}
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <Col span={12}>
                <label>User Name:</label>
                <Input
                  value={selectedCell.user}
                  onChange={handleTaskUserChange}
                  style={{ marginBottom: "10px" }}
                />
              </Col>
              <Col span={12}>
                <label>Task Name:</label>
                <Input
                  value={selectedCell.name}
                  onChange={handleTaskNameChange}
                  style={{ marginBottom: "10px" }}
                />
              </Col>
              <Col span={12}>
                <label>Project:</label>
                <Input
                  value={selectedCell.project}
                  onChange={handleProjectChange}
                  style={{ marginBottom: "10px" }}
                />
              </Col>

              <Col span={12}>
                <label style={{ marginRight: "5px" }}>Priority:</label>
                <Select
                  value={selectedCell.priority}
                  onChange={handlePriorityChange}
                  style={{ marginBottom: "10px" }}
                >
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="High">High</Option>
                </Select>
              </Col>
              <Col span={12}>
                <label style={{ marginRight: "5px" }}>Due Date:</label>
                <DatePicker
                  value={selectedCell.dueDate}
                  onChange={handleDueDateChange}
                  style={{ marginBottom: "10px" }}
                />
              </Col>
            </Row>
          </>
        )}
      </Modal>
    </>
  );
};

export default Task;
