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
} from "antd";
import { useState } from "react";
import "./Task.css"; // Import CSS file

const { Option } = Select;

const Task = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [recentlyAssignedTasks, setRecentlyAssignedTasks] = useState([]);
  const [doTodayTasks, setDoTodayTasks] = useState([]);
  const [doThisWeekTasks, setDoThisWeekTasks] = useState([]);
  const [doThisMonthTasks, setDoThisMonthTasks] = useState([]);
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCellClick = (task) => {
    setSelectedCell(task);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedCell(null);
    setModalVisible(false);
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

    if (selectedCell && selectedCell.column === "Recently Assigned") {
      const updatedTasks = recentlyAssignedTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setRecentlyAssignedTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Do Today") {
      const updatedTasks = doTodayTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setDoTodayTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Do This Week") {
      const updatedTasks = doThisWeekTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setDoThisWeekTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Do This Month") {
      const updatedTasks = doThisMonthTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setDoThisMonthTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Backlog") {
      const updatedTasks = backlogTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setBacklogTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "In Progress") {
      const updatedTasks = inProgressTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setInProgressTasks(updatedTasks);
    } else if (selectedCell && selectedCell.column === "Completed") {
      const updatedTasks = completedTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setCompletedTasks(updatedTasks);
    }

    setModalVisible(false);
  };

  const handleAddTask = (column) => {
    const newTask = {
      id: Math.random(),
      name: "New Task",
      project: "New Project",
      priority: "Low",
      column: column,
    };

    if (column === "Recently Assigned") {
      setRecentlyAssignedTasks([...recentlyAssignedTasks, newTask]);
    } else if (column === "Do Today") {
      setDoTodayTasks([...doTodayTasks, newTask]);
    } else if (column === "Do This Week") {
      setDoThisWeekTasks([...doThisWeekTasks, newTask]);
    } else if (column === "Do This Month") {
      setDoThisMonthTasks([...doThisMonthTasks, newTask]);
    } else if (column === "Backlog") {
      setBacklogTasks([...backlogTasks, newTask]);
    } else if (column === "In Progress") {
      setInProgressTasks([...inProgressTasks, newTask]);
    } else if (column === "Completed") {
      setCompletedTasks([...completedTasks, newTask]);
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
            <Divider orientation="left">Recently Assigned</Divider>
            {recentlyAssignedTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
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
              </div>
            ))}
            <Button
              className="add-task-button"
              type="primary"
              onClick={() => handleAddTask("Recently Assigned")}
            >
              Add Task
            </Button>
          </Col>
          <Col span={8} className="task-column">
            <Divider orientation="left">Do Today</Divider>
            {doTodayTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
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
          <Col span={8} className="task-column">
            <Divider orientation="left">Do This Week</Divider>
            {doThisWeekTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
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
              </div>
            ))}
            <Button
              className="add-task-button"
              type="primary"
              onClick={() => handleAddTask("Do This Week")}
            >
              Add Task
            </Button>
          </Col>
          <Col span={8} className="task-column">
            <Divider orientation="left">Do This Month</Divider>
            {doThisMonthTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
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
              </div>
            ))}
            <Button
              className="add-task-button"
              type="primary"
              onClick={() => handleAddTask("Do This Month")}
            >
              Add Task
            </Button>
          </Col>
          <Col span={8} className="task-column">
            <Divider orientation="left">Completed</Divider>
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="task-cell"
                onClick={() => handleCellClick(task)}
              >
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
              </div>
            ))}
            <Button
              className="add-task-button"
              type="primary"
              onClick={() => handleAddTask("Completed")}
            >
              Add Task
            </Button>
          </Col>
        </div>
      </Row>

      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Cancel
          </Button>,
          <Button
            key="update"
            type="primary"
            className="update-button"
            onClick={handleTaskUpdate}
          >
            Update
          </Button>,
        ]}
      >
        <div className="info-1">
          <label className="info-2">Assignee: Hoang Viet Duc</label>
          {/* <Input
              value={selectedCell ? selectedCell.assignee : "Hoang Viet Duc"}
              disabled
            /> */}
        </div>
        <div className="info-1">
          <label className="info-2">Task Name:</label>
          <Input
            value={selectedCell ? selectedCell.name : ""}
            onChange={handleTaskNameChange}
          />
        </div>
        <div className="info-1">
          <label className="info-2">Project:</label>
          <Input
            value={selectedCell ? selectedCell.project : ""}
            onChange={handleProjectChange}
          />
        </div>
        <div className="info-1">
          <label className="info-2">Priority:</label>
          <Select
            value={selectedCell ? selectedCell.priority : "Low"}
            onChange={handlePriorityChange}
          >
            <Option value="High">High</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Low">Low</Option>
          </Select>
        </div>
        <div className="info-1">
          <label className="info-2">Due Date:</label>
          <DatePicker
            value={selectedCell ? selectedCell.dueDate : null}
            onChange={handleDueDateChange}
          />
        </div>
      </Modal>
    </>
  );
};

export default Task;
