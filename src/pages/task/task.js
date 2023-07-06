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

var dataSupport = [
  {
    Support: "Phan Công Hiếu",
    Assignee: "Phạm Bích Phương",
    User: "Hoàng Việt Đức",
    Project: "Sun*Asterisk",
    Priority: "High",
    dueDate: "2023-06-30",
    Problem: "Khó học thuộc Kanji",
    solveThisProblem: "Viết ra giấy từ đấy 20 lần",
  },
  {
    Support: "Hoàng Việt Đức",
    Assignee: "Tạ Hải Tùng",
    User: "Hoàng Việt Đức",
    Project: "Hust LAB",
    Priority: "Medium",
    dueDate: "2023-06-30",
    Problem: "Khó khăn trong làm việc nhóm",
    solveThisProblem:
      "Sử dụng các công cụ và phần mềm quản lý dự án để theo dõi tiến độ công việc, phân công nhiệm vụ và quản lý tài liệu chung",
  },
];

var dataDoToday = [
  {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Vũ Thị Hương Giang",
    User: "Hoàng Việt Đức",
    Project: "UI/UX",
    Description:
      "Thực hiện quá trình thiết kế giao diện, bao gồm việc xác định cấu trúc, bố cục, màu sắc, hình ảnh và các yếu tố tương tác.",
    Priority: "High",
    dueDate: "2023-06-30",
  },
  {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Hoàng Việt Đức",
    Project: "HUST LAB",
    Description:
      "Thực hiện các hoạt động như phỏng vấn người dùng, khảo sát, thu thập thông tin và phân tích dữ liệu liên quan đến nhu cầu, mong muốn và mục tiêu của người dùng.",
    Priority: "Medium",
    dueDate: "2023-06-30",
  },
  {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Ngô Lan Anh",
    User: "Hoàng Việt Đức",
    Project: "Sun*Asterisk",
    Description:
      "Rèn luyện kỹ năng nghe, đọc và viết để hoàn thành đề thi và đạt kết quả tốt",
    Priority: "Low",
    dueDate: "2023-07-10",
  },
];

const Task = () => {
  const [selectedSupportCell, setSelectedSupportCell] = useState(null);
  const [doTodayModalVisible, setDoTodayModalVisible] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description: "Bạn đã hoàn thành Task",
    });
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ padding: "80px" }}>
            <Row gutter={[16, 24]}>
              <Col span={4}>
                <Divider orientation="left">Support</Divider>
                {dataSupport.map((task) => (
                  <div
                    key={task.Support}
                    className={`task-cell ${
                      selectedSupportCell === task.Support ? "selected" : ""
                    }`}
                  >
                    <div className="task-cell-left">
                      <div>
                        <label className="task-cell-label">Support:</label>
                        {task.Support}
                      </div>
                      <div>
                        <label className="task-cell-label">Assignee:</label>
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
                        <label className="task-cell-label">
                          Solve this Problem:
                        </label>
                        {task.solveThisProblem}
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
              <Col span={4}>
                <Divider orientation="left">Do Today</Divider>
                {dataDoToday.map((task) => {
                  const isTaskCompleted = completedTasks.includes(task.id);
                  if (
                    (!isTaskCompleted && showCompleted) ||
                    (isTaskCompleted && !showCompleted)
                  ) {
                    return null; // Skip rendering tasks based on showCompleted and checkbox state
                  }
                  return (
                    <div key={task.Task} className="task-cell">
                      <div className="task-cell-left">
                        <div>
                          <label className="task-cell-label">Task:</label>
                          {task.Task}
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
                        {contextHolder}
                        <Space
                          className="task-checkbox"
                          onClick={(e) =>
                            e.stopPropagation(setDoTodayModalVisible === false)
                          }
                        >
                          <Checkbox
                            className="task-checkbox-in"
                            checked={completedTasks.includes(task.id)}
                            onClick={(e) => {
                              if (e.target.checked) {
                                openNotificationWithIcon("success");
                                setCompletedTasks([...completedTasks, task.id]);
                              } else {
                                setCompletedTasks(
                                  completedTasks.filter(
                                    (taskId) => taskId !== task.id
                                  )
                                );
                              }
                            }}
                          ></Checkbox>
                        </Space>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Col span={4}>
                <Button
                  className="task-completed"
                  onClick={() => setShowCompleted(!showCompleted)}
                  type="primary"
                  style={{ marginBottom: 16 }}
                >
                  {showCompleted ? "Incomplete Task" : "Complete Task"}
                </Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
