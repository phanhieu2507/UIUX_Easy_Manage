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

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
  return !e.target.checked;
};

const { Option } = Select;

const Task = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification",
      description: "Bạn đã hoàn thành công việc!",
    });
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [recentlyAssignedTasks, setRecentlyAssignedTasks] = useState([]);
  const [doTodayTasks, setDoTodayTasks] = useState([]);
  const [doThisWeekTasks, setDoThisWeekTasks] = useState([]);
  const [doThisMonthTasks, setDoThisMonthTasks] = useState([]);
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [reviewTasks, setReviewTasks] = useState([]); // New state for Review column
  const [supportTasks, setSupportTasks] = useState([]); // New state for Support column

  const handleTaskClose = (task, columnTasks) => {
    const updatedTasks = columnTasks.filter((t) => t.id !== task.id);

    if (task.column === "Recently Assigned") {
      setRecentlyAssignedTasks(updatedTasks);
    } else if (task.column === "Do Today") {
      setDoTodayTasks(updatedTasks);
    } else if (task.column === "Do This Week") {
      setDoThisWeekTasks(updatedTasks);
    } else if (task.column === "Do This Month") {
      setDoThisMonthTasks(updatedTasks);
    } else if (task.column === "Backlog") {
      setBacklogTasks(updatedTasks);
    } else if (task.column === "In Progress") {
      setInProgressTasks(updatedTasks);
    } else if (task.column === "Completed") {
      setCompletedTasks(updatedTasks);
    } else if (task.column === "Review") {
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

  const handleTaskReviewChange = (e) => {
    setSelectedCell({ ...selectedCell, user: e.target.value });
  };

  const handleTaskSupportChange = (e) => {
    setSelectedCell({ ...selectedCell, user: e.target.value });
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
    } else if (selectedCell && selectedCell.column === "Review") {
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
      reviewer: "Reviewer",
      support: "Support",
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
    } else if (column === "Review") {
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
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ padding: "50px" }}>
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(modalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            onChange={onChange}
                            onClick={(e) =>
                              // e.stopPropagation() &&
                              {
                                if (e.target.checked) {
                                  openNotificationWithIcon("success");
                                }
                              }
                            }
                          ></Checkbox>
                        </Space>
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(modalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            onChange={onChange}
                            onClick={(e) =>
                              // e.stopPropagation() &&
                              {
                                if (e.target.checked) {
                                  openNotificationWithIcon("success");
                                }
                              }
                            }
                          ></Checkbox>
                        </Space>
                        <Button
                          type="text"
                          className="task-close-button"
                          icon={<CloseOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTaskClose(task, supportTasks);
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
                <Col span={8} className="task-column">
                  <Divider orientation="left">Do Today</Divider>
                  {doTodayTasks.map((task) => (
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(modalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            onChange={onChange}
                            onClick={(e) =>
                              // e.stopPropagation() &&
                              {
                                if (e.target.checked) {
                                  openNotificationWithIcon("success");
                                }
                              }
                            }
                          ></Checkbox>
                        </Space>
                        <Button
                          type="text"
                          className="task-close-button"
                          icon={<CloseOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTaskClose(task, doTodayTasks);
                          }}
                        />
                      </div>
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(modalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            onChange={onChange}
                            onClick={(e) =>
                              // e.stopPropagation() &&
                              {
                                if (e.target.checked) {
                                  openNotificationWithIcon("success");
                                }
                              }
                            }
                          ></Checkbox>
                        </Space>
                        <Button
                          type="text"
                          className="task-close-button"
                          icon={<CloseOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTaskClose(task, doThisWeekTasks);
                          }}
                        />
                      </div>
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(modalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            onChange={onChange}
                            onClick={(e) =>
                              // e.stopPropagation() &&
                              {
                                if (e.target.checked) {
                                  openNotificationWithIcon("success");
                                }
                              }
                            }
                          ></Checkbox>
                        </Space>
                        <Button
                          type="text"
                          className="task-close-button"
                          icon={<CloseOutlined />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTaskClose(task, doThisMonthTasks);
                          }}
                        />
                      </div>
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
                  <Row gutter={[16, 16]} style={{ flexDirection: "column" }}>
                    <Col span={12}>
                      <label>User Name:</label>
                      <Input
                        placeholder={selectedCell.user}
                        onChange={handleTaskUserChange}
                        style={{ marginBottom: "10px", width: "470px" }}
                      />
                    </Col>
                    <Col span={12}>
                      <label>Task Name:</label>
                      <Input
                        placeholder={selectedCell.name}
                        onChange={handleTaskNameChange}
                        style={{ marginBottom: "10px", width: "470px" }}
                      />
                    </Col>
                    <Col span={12}>
                      <label>Project:</label>
                      <Input
                        placeholder={selectedCell.project}
                        onChange={handleProjectChange}
                        style={{ marginBottom: "10px", width: "470px" }}
                      />
                    </Col>
                    <Col span={12}>
                      <label>Reviewer:</label>
                      <Input
                        placeholder={selectedCell.reviewer}
                        onChange={handleTaskReviewChange}
                        style={{ marginBottom: "10px", width: "470px" }}
                      />
                    </Col>
                    <Col span={12}>
                      <label>Support:</label>
                      <Input
                        placeholder={selectedCell.support}
                        onChange={handleTaskSupportChange}
                        style={{ marginBottom: "10px", width: "470px" }}
                      />
                    </Col>

                    <Col span={12}>
                      <label style={{ marginRight: "5px" }}>Priority:</label>
                      <Select
                        value={selectedCell.priority}
                        onChange={handlePriorityChange}
                        style={{
                          marginBottom: "10px",
                        }}
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
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
