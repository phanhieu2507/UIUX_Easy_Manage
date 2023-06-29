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

import React, { useState } from "react";
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
    Review: "Kiểm tra mã giao diện người dùng",
    Assignee: "John",
    User: "Alex",
    Project: "Project A",
    Priority: "High",
  },
  {
    Review: "Kiểm tra mã phân tích yêu cầu",
    Assignee: "Sarah",
    User: "Mark",
    Project: "Project B",
    Priority: "Medium",
  },
  {
    Review: "Kiểm tra mã kiểm tra và sửa lỗi",
    Assignee: "Emily",
    User: "John",
    Project: "Project C",
    Priority: "Low",
  },
];
var dataSupport = [
  {
    Support: "Phan Công Hiếu",
    Assignee: "Cô Giang",
    User: "Lê Đình Hải Sơn",
    Project: "UI/UX",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    Support: "Hoàng Việt Đức",
    Assignee: "Tạ Hải Tùng",
    User: "Nguyễn Huyền Trang",
    Project: "Hust LAB",
    Priority: "Medium",
    dueDate: "2023-07-30",
  },
  // {
  //   Support: "Phạm Vân Anh",
  //   Assignee: "Phạm Bích Phương",
  //   User: "Vũ Đình Hoài",
  //   Project: "Sun*Asterisk",
  //   Priority: "Low",
  //   dueDate: "2023-08-10",
  // },
];

var dataDoToday = [
  {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "John",
    User: "Alex",
    Project: "UI/UX",
    Priority: "High",
    dueDate: "2023-07-15",
  },
  {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Sarah",
    User: "Mark",
    Project: "HUST LAB",
    Priority: "Medium",
    dueDate: "2023-06-30",
  },
  {
    id: 3,
    Task: "Kiểm tra và sửa lỗi người dùng",
    Assignee: "Emily",
    User: "John",
    Project: "Sun*Asterisk",
    Priority: "Low",
    dueDate: "2023-07-10",
  },
];
const Task = () => {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [selectedReviewCell, setSelectedReviewCell] = useState(null);
  const [selectedReviewTask, setSelectedReviewTask] = useState(null);
  const [supportModalVisible, setSupportModalVisible] = useState(false);
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [doTodayModalVisible, setDoTodayModalVisible] = useState(false);
  const [selectedSupportTask, setSelectedSupportTask] = useState(null);
  const [selectedDoTodayCell, setSelectedDoTodayCell] = useState(null);
  const [taskCounter, setTaskCounter] = useState(16);
  const [doTodayCounter, setDoTodayCounter] = useState(dataDoToday.length);
  const [selectedDoTodayTask, setSelectedDoTodayTask] = useState(null);
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
    Problem: "",
    Comment: "",
  });
  const [doTodayInfo, setDoTodayInfo] = useState({
    Task: "",
    Assignee: "",
    User: "",
    Project: "",
    Priority: "",
    dueDate: "",
    Problem: "",
    Support: "",
  });
  const [addProblemVisible, setAddProblemVisible] = useState(false);
  const [doTodayProblem, setDoTodayProblem] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description: "Bạn đã hoàn thành Task",
    });
  };

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
      Problem: task.Problem,
      Comment: task.Comment,
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

  const handleReviewModalClose = () => {
    setSelectedReviewCell(null); // Reset selected cell when closing modal
    setReviewModalVisible(false);
  };

  const handleSupportModalClose = () => {
    setSelectedSupportCell(null); // Reset selected cell when closing modal
    setSupportModalVisible(false);
  };

  const handleDoTodayModalClose = () => {
    setSelectedDoTodayCell(null); // Reset selected cell when closing modal
    setDoTodayModalVisible(false);
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

    // Update the selectedSupportCell state variable with the newly added task's Support value
    setSelectedSupportCell(newTask.Support);
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

  const handleDoTodayInputChange = (field, value) => {
    if (field === "dueDate") {
      value = value ? value.format("YYYY-MM-DD") : "";
    }

    if (field === "Problem") {
      setDoTodayProblem(value); // Cập nhật giá trị của doTodayProblem
    }

    setDoTodayInfo({ ...doTodayInfo, [field]: value });
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
      const updatedTask = {
        ...dataSupport[taskIndex],
        ...supportInfo,
        Problem: supportInfo.Problem, // Thêm dữ liệu từ ô input Problem
        Comment: supportInfo.Comment, // Thêm dữ liệu từ ô input Comment
      };

      // Cập nhật dữ liệu trong mảng dataSupport
      dataSupport[taskIndex] = updatedTask;

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
        Support: doTodayInfo.Support, // Giả sử sử dụng giá trị của taskCounter để đặt tên task mới
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

  const handleTaskClose = (e, taskId, taskType) => {
    e.stopPropagation();

    if (taskType === "support") {
      const taskIndex = dataSupport.findIndex(
        (task) => task.Support === taskId
      );

      if (taskIndex !== -1) {
        dataSupport.splice(taskIndex, 1);
        setTaskCounter(taskCounter - 1);
      }
    } else if (taskType === "doToday") {
      const taskIndex = dataDoToday.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        dataDoToday.splice(taskIndex, 1);
        setDoTodayCounter(doTodayCounter - 1);
      }
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
                    className={`task-cell ${
                      selectedReviewCell === task.Review ? "selected" : ""
                    }`}
                    onClick={() => handleReviewCellClick(task.Review)}
                  >
                    <div className="task-cell-left">
                      <div>
                        <label className="task-cell-label">Reviewer:</label>
                        {task.Review}
                      </div>
                      <div>
                        <label className="task-cell-label">Assignee:</label>
                        {task.Assignee}
                      </div>
                      <div>
                        <label className="task-cell-label">User:</label>
                        {task.User}
                      </div>
                      <div>
                        <label className="task-cell-label">Project Name:</label>
                        {task.Project}
                      </div>
                      <div>
                        <label className="task-cell-label">Priority: </label>
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
                      <div>
                        <label className="task-cell-label">Due Date:</label>
                        {task.dueDate}
                      </div>
                      <Rate
                        onClick={(e) => e.stopPropagation()}
                        value={task.Rating}
                      />
                    </div>
                    <div className="task-cell-right">
                      <div
                        className="task-close"
                        onClick={(e) => handleTaskClose(e, task.id, "doToday")}
                      >
                        <CloseOutlined />
                      </div>
                      {contextHolder}
                      <Space
                        className="task-checkbox"
                        onClick={(e) =>
                          e.stopPropagation(setDoTodayModalVisible === false)
                        }
                      >
                        <Checkbox
                          className="task-checkbox-in"
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
                    </div>
                  </div>
                ))}
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
                    <div className="task-cell-left">
                      <div>
                        <label className="task-cell-label">Support:</label>
                        {task.Support}
                      </div>
                      <div>
                        <label className="task-cell-label">Assignee:</label>
                        {task.Assignee}
                      </div>
                      <div>
                        <label className="task-cell-label">User:</label>
                        {task.User}
                      </div>
                      <div>
                        <label className="task-cell-label">Project:</label>
                        {task.Project}
                      </div>
                      <div>
                        <label className="task-cell-label">Priority: </label>
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
                      <div>
                        <label className="task-cell-label">Due Date:</label>
                        {task.dueDate}
                      </div>
                      <div>
                        <label className="task-cell-label">Problem:</label>
                        {task.Problem}
                      </div>
                      <div>
                        <label className="task-cell-label">Comment:</label>
                        {task.Comment}
                      </div>
                    </div>
                    <div className="task-cell-right">
                      <div
                        className="task-close"
                        onClick={(e) => handleTaskClose(e, task.id, "doToday")}
                      >
                        <CloseOutlined />
                      </div>
                      {contextHolder}
                      <Space
                        className="task-checkbox"
                        onClick={(e) =>
                          e.stopPropagation(setDoTodayModalVisible === false)
                        }
                      >
                        <Checkbox
                          className="task-checkbox-in"
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
                    </div>
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
                    <div className="task-cell-left">
                      <div>
                        <label className="task-cell-label">Task:</label>
                        {task.Task}
                      </div>
                      <div>
                        <label className="task-cell-label">Assignee:</label>
                        {task.Assignee}
                      </div>
                      <div>
                        <label className="task-cell-label">User:</label>
                        {task.User}
                      </div>
                      <div>
                        <label className="task-cell-label">Project:</label>
                        {task.Project}
                      </div>
                      <div>
                        <label className="task-cell-label">Priority: </label>

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
                      <div>
                        <label className="task-cell-label">Due Date:</label>
                        {task.dueDate}
                      </div>
                    </div>
                    <div className="task-cell-right">
                      <div
                        className="task-close"
                        onClick={(e) => handleTaskClose(e, task.id, "doToday")}
                      >
                        <CloseOutlined />
                      </div>
                      {contextHolder}
                      <Space
                        className="task-checkbox"
                        onClick={(e) =>
                          e.stopPropagation(setDoTodayModalVisible === false)
                        }
                      >
                        <Checkbox
                          className="task-checkbox-in"
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
                    </div>
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
                  className="update-button"
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
                  className="update-button"
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
              <div>
                <label>Problem:</label>
                <Input
                  value={supportInfo.Problem}
                  onChange={(e) =>
                    handleSupportInputChange("Problem", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Solve this Problem:</label>
                <Input.TextArea
                  value={supportInfo.Comment}
                  onChange={(e) =>
                    handleSupportInputChange("Comment", e.target.value)
                  }
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
                  className="update-button"
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
                  <label>Support:</label>
                  <Input
                    value={doTodayInfo.Support}
                    onChange={(e) =>
                      handleDoTodayInputChange("Support", e.target.value)
                    }
                  />
                </div>
              ) : (
                <Button
                  style={{ borderColor: "rgb(161, 161, 161)" }}
                  type="text"
                  onClick={handleAddProblem}
                >
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
