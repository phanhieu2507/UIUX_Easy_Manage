import { useState } from "react";
import { Layout, Card, Modal, Input, Space, Rate, Tag, Divider } from "antd";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import ReviewModal from "../../components/ReviewModal";
import SupportModal from "../../components/SupportModal";
import NormalModal from "../../components/NormalTaskModal";
const { Content } = Layout;

const BoardUIUX = () => {
  var reviewTasks = [
    {
      Review: "Phan Công Hiếu",
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Hoàng Việt Đức",
      Project: "UIUX",
      Priority: "High",
      dueDate: "2023-07-01",
      Comment: "Công việc hoàn thành đúng tiến độ và chất lượng tốt!",
      Rating: 5,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Hoàng Việt Đức",
      Project: "UI UX",
      Priority: "Medium",
      dueDate: "2023-07-15",
      Comment: "Công việc có những điểm cần cải thiện, nhưng tổng thể là tốt!",
      Rating: 4.8,
    },
  ];

  var supportTasks = [
    {
      Support: "Phan Công Hiếu",
      Assignee: "Phạm Bích Phương",
      User: "Hoàng Việt Đức",
      Project: "UI UX",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Figma khó dùng",
      solveThisProblem: "Dùng docs",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Tạ Hải Tùng",
      User: "Hoàng Việt Đức",
      Project: "UI UX",
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
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Phan Công Hiếu",
      Project: "UI/UX",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm màn home",
      Assignee: "Ngô Lan Anh",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doTodayTasks = [
    {
      id: 1,
      Task: "Tạo wire fame",
      Assignee: "Vũ Thị Hương Giang",
      User: "Phan Công Hiếu",
      Project: "UI/UX",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Tạo mẫu thử",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Tạo form yêu cầu người dùng",
      Assignee: "Ngô Lan Anh",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doThisWeekTasks = [
    {
      id: 1,
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Phan Công Hiếu",
      Project: "UI/UX",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm 1 đề JLPT",
      Assignee: "Ngô Lan Anh",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  var doThisMonthTasks = [
    {
      id: 1,
      Task: "Tạo giao diện người dùng",
      Assignee: "Vũ Thị Hương Giang",
      User: "Phan Công Hiếu",
      Project: "UI/UX",
      Priority: "High",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      Task: "Phân tích yêu cầu người dùng",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Medium",
      dueDate: "2023-06-30",
    },
    {
      id: 3,
      Task: "Làm 1 đề JLPT",
      Assignee: "Ngô Lan Anh",
      User: "Phan Công Hiếu",
      Project: "UI UX",
      Priority: "Low",
      dueDate: "2023-07-10",
    },
  ];

  const [sections, setSections] = useState([]);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isSupportModalVisible, setIsSupportModalVisible] = useState(false);
  const [isNormalModalVisible, setIsNormalModalVisible] = useState(false);

  const [selectedReviewTask, setSelectedReviewTask] = useState(null);
  const [selectedSupportTask, setSelectedSupportTask] = useState(null);
  const [selectedNormalTask, setSelectedNormalTask] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [modalTask, setModalTask] = useState(null);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showReviewModal = (task) => {
    setSelectedReviewTask(task);
    setIsReviewModalVisible(true);
  };
  const showNormalModal = (task) => {
    setModalTask(task);
    setIsNormalModalVisible(true);
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
  const handleSaveReviewModal = (values) => {
    // Thực hiện xử lý lưu review ở đây
    console.log(values);
    setIsReviewModalVisible(false);
  };

  // Hàm đóng modal
  const handleCancelReviewModal = () => {
    setIsReviewModalVisible(false);
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
  const handleSaveNormalModal = (values) => {
    // Thực hiện xử lý lưu review ở đây
    console.log(values);
    setIsNormalModalVisible(false);
    setSelectedNormalTask(null);
  };

  // Hàm đóng modal
  const handleCancelNormalModal = () => {
    setIsNormalModalVisible(false);
    setSelectedNormalTask(null);
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
                  key={task?.id}
                  className="mb-4"
                  onClick={() => showReviewModal(task)}
                >
                  <h3>{task?.title}</h3>
                  <p>Review: {task?.Review}</p>
                  <p>Task: {task?.Task}</p>
                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                  <p>Comment: {task?.Comment}</p>
                  <p>
                    Rating:{" "}
                    <Rate
                      disabled
                      value={task?.Rating}
                      character={<StarFilled />}
                    />
                  </p>
                  <ReviewModal
                    visible={isReviewModalVisible}
                    onCancel={handleCancelReviewModal}
                    onOk={handleSaveReviewModal}
                    task={selectedReviewTask}
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
                <Card
                  key={task?.id}
                  className="mb-4"
                  onClick={() => {
                    setSelectedSupportTask(task);
                    setIsSupportModalVisible(true);
                  }}
                >
                  <h3>{task?.title}</h3>
                  <p>Support: {task?.Support}</p>

                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                  <p>Problem: {task?.problem}</p>
                  <p>Solve this Problem: {task?.solveThisProblem}</p>
                  <SupportModal
                    visible={isSupportModalVisible}
                    onCancel={handleCancelSupportModal}
                    onOk={handleSaveSupportModal}
                    task={selectedSupportTask}
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
                <Card
                  key={task?.id}
                  className="mb-4"
                onClick={() => showNormalModal(task)}

                >
                  <h3>{task?.title}</h3>
                  <p>Task: {task?.Task}</p>
                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                 
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
                <Card
                  key={task?.id}
                  className="mb-4"
                onClick={() => showNormalModal(task)}

                >
                  <h3>{task?.title}</h3>
                  <p>Task: {task?.Task}</p>
                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                 
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
                <Card
                  key={task?.id}
                  className="mb-4"
                onClick={() => showNormalModal(task)}

                >
                  <h3>{task?.title}</h3>
                  <p>Task: {task?.Task}</p>
                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                 
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
                <Card
                  key={task?.id}
                  className="mb-4"
                onClick={() => showNormalModal(task)}

                >
                  <h3>{task?.title}</h3>
                  <p>Task: {task?.Task}</p>
                  <p>Assignee: {task?.Assignee}</p>
                  <p>User: {task?.User}</p>
                  <p>Project: {task?.Project}</p>
                  <p>
                    Priority:{" "}
                    <Tag
                      color={getPriorityColor(task?.Priority.toLowerCase())}
                      className="capitalize"
                    >
                      {task?.Priority}
                    </Tag>
                  </p>
                  <p>Due Date: {task?.dueDate}</p>
                 
                </Card>
              ))}
            </div>
          </div>
          {modalTask && isNormalModalVisible && (
            <NormalModal
              visible={isNormalModalVisible}
              onCancel={() => setIsNormalModalVisible(false)}
              onOk={handleSaveNormalModal}
              task={modalTask}
            />
          )}
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


export default BoardUIUX;
