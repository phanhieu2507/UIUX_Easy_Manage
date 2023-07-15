import { useState } from "react";
import { Layout, Card, Modal, Input, Space, Rate, Tag, Divider } from "antd";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import ReviewModal from "../../components/ReviewModal";
import SupportModal from "../../components/SupportModal";
const { Content } = Layout;

const BoardSun = () => {
  var reviewTasks = [
    {
      Review: "Phan Công Hiếu",
      Task: "Tạo mô phỏng cho ứng dụng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-07-01",
      Comment: "Mô phỏng hoạt động được",
      Rating: 5,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Phân tích mô phỏng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-07-15",
      Comment: "Báo cáo thiếu mục 2",
      Rating: 4.8,
    },
  ];

  var supportTasks = [
    {
      Support: "Phan Công Hiếu",
      Assignee: "Phạm Bích Phương",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Phần component cha không liên kết",
      solveThisProblem: "Đọc trong docs",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Tạ Hải Tùng",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-06-30",
      Problem: "Khó khăn trong làm việc nhóm",
      solveThisProblem:
        "Sử dụng các công cụ và phần mềm quản lý dự án để theo dõi tiến độ công việc, phân công nhiệm vụ và quản lý tài liệu chung",
    },
  ];

  var recentlyAssignedTasks = [
    {
      id: 1,
      Task: "Tạo giao diện cho App",
      Assignee: "Phạm Vân Anh",
      User: "Phan Công Hiếu",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Xử lí lỗi ở màn Home",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Xử lí lỗi ở màn Home details",
      Assignee: "Ngô Lan Anh",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doTodayTasks = [
    {
      id: 1,
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm 1 đề JLPT",
      Assignee: "Ngô Lan Anh",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doThisWeekTasks = [
    {
      id: 1,
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm 1 đề JLPT",
      Assignee: "Ngô Lan Anh",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doThisMonthTasks = [
    {
      id: 1,
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm 1 đề JLPT",
      Assignee: "Ngô Lan Anh",
      User: "Hoàng Việt Đức",
      Project: "Sun*Asterisk",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  const [sections, setSections] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isSupportModalVisible, setIsSupportModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const showReviewModal = (task) => {
    setSelectedTask(task);
    setIsReviewModalVisible(true);
  };
  const handleSaveReviewModal = (values) => {
    // Thực hiện xử lý lưu review ở đây
    console.log(values);
    setIsReviewModalVisible(false);
  };

  // Hàm đóng modal
  const handleCancelReviewModal = () => {
    setIsReviewModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (sectionName) {
      const newSection = {
        id: sections.length + 1,
        name: sectionName,
      };

      setSections([...sections, newSection]);
      setSectionName("");
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSectionName("");
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "green";
      default:
        return "gray";
    }
  };
  const handleSaveSupportModal = (values) => {
    // Thực hiện xử lý lưu review ở đây
    console.log(values);
    setIsSupportModalVisible(false);
  };

  // Hàm đóng modal
  const handleCancelSupportModal = () => {
    setIsSupportModalVisible(false);
  };
  return (
    <Layout>
      <Content className="p-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Review</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {reviewTasks.map((task) => (
                <Card
                  key={task.id}
                  className="mb-4"
                  onClick={() => showReviewModal(task)}
                >
                  <h3>{task.title}</h3>
                  <p>Review: {task.Review}</p>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Comment: {task.Comment}</p>
                  <p>
                    Rating:{" "}
                    <Rate
                      disabled
                      value={task.Rating}
                      character={<StarFilled />}
                    />
                  </p>
                  <ReviewModal
                    visible={isReviewModalVisible}
                    onCancel={handleCancelReviewModal}
                    onOk={handleSaveReviewModal}
                    task={task}
                  />
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Support</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {supportTasks.map((task) => (
                <Card key={task.id} className="mb-4" onClick={() => setIsSupportModalVisible(true)}>
                  <h3>{task.title}</h3>
                  <p>Support: {task.Review}</p>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Problem: {task.problem}</p>
                  <p>Solve this Problem: {task.solveThisProblem}</p>
                  <SupportModal
                    visible={isSupportModalVisible}
                    onCancel={handleCancelSupportModal}
                    onOk={handleSaveSupportModal}
                    task={task}
                  />
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Recently Assigned</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {recentlyAssignedTasks.map((task) => (
                <Card key={task.id} className="mb-4">
                  <h3>{task.title}</h3>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Do Today</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doTodayTasks.map((task) => (
                <Card key={task.id} className="mb-4">
                  <h3>{task.title}</h3>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Do This Week</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doThisWeekTasks.map((task) => (
                <Card key={task.id} className="mb-4">
                  <h3>{task.title}</h3>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <Divider orientation="left">Do This Month</Divider>
            </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doThisMonthTasks.map((task) => (
                <Card key={task.id} className="mb-4">
                  <h3>{task.title}</h3>
                  <p>Task: {task.Task}</p>
                  <p>Assignee: {task.Assignee}</p>
                  <p>User: {task.User}</p>
                  <p>Project: {task.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task.dueDate}</p>
                </Card>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div className="col-span-1">
              <h2 className="text-lg font-bold mb-4">
                <div
                  key={section.id}
                  className="flex justify-center items-center"
                >
                  {section.name}
                </div>
              </h2>
              <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
                <Card className="mb-4">{}</Card>
              </div>
            </div>
          ))}

          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
              <div className="flex justify-center items-center">
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={showModal}
                >
                  <PlusOutlined /> Add Section
                </span>
              </div>
            </h2>
          </div>
        </div>
        <Modal
          okButtonProps={{ style: { backgroundColor: "blue" } }}
          title="Add Section"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
        >
          <Space direction="vertical" size="large">
            <Input
              placeholder="Section Name"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
          </Space>
        </Modal>
      </Content>
    </Layout>
  );
};

export default BoardSun;
