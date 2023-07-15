import { useState } from "react";
import { Layout, Card, Modal, Input, Space, Rate, Tag, Divider } from "antd";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import ReviewModal from "../../components/ReviewModal";
import SupportModal from "../../components/SupportModal";
import NormalModal from "../../components/NormalTaskModal";
const { Content } = Layout;

const Board = () => {
  var reviewTasks = [
    {
      Review: "Phan Công Hiếu",
      Task: "Kiểm thử thí nghiệm",
      Assignee: "Đặng Quang Tuấn",
      User: "Nguyễn Văn A",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-07-01",
      Comment: "Hoàn thành kiểm thử",
      Rating: 5,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Tạo tài liệu cho thí nghiệm",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Nguyễn Văn B",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-07-15",
      Comment: "Công việc có những điểm cần cải thiện, nhưng tổng thể là tốt!",
      Rating: 4.8,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Xây dựng giao diện người dùng",
      Assignee: "Nguyễn Thị Mai",
      User: "Nguyễn Văn C",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-07-10",
      Comment: "Giao diện đẹp và dễ sử dụng",
      Rating: 4.6,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Phân tích yêu cầu khách hàng",
      Assignee: "Lê Anh Tuấn",
      User: "Nguyễn Văn D",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-07-20",
      Comment: "Phân tích chi tiết và đáp ứng đúng yêu cầu",
      Rating: 4.9,
    },
    {
      Review: "Phan Công Hiếu",
      Task: "Lập kế hoạch dự án",
      Assignee: "Nguyễn Văn An",
      User: "Nguyễn Văn E",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-07-05",
      Comment: "Kế hoạch dự án chi tiết và thực hiện theo đúng tiến độ",
      Rating: 4.7,
    },
  ];
  

  var supportTasks = [
    {
      Support: "Phan Công Hiếu",
      Assignee: "Phạm Bích Phương",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Khớp nối bị lệch",
      solveThisProblem: "Dùng búa nắn",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Nguyễn Thị Trang",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Lỗi kết nối mạng",
      solveThisProblem: "Kiểm tra lại đường truyền mạng và đặt lại thiết bị",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Trần Văn Mạnh",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Gặp khó khăn trong cài đặt",
      solveThisProblem:
        "Hướng dẫn chi tiết các bước cài đặt và hỗ trợ từ xa khi gặp khó khăn",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Vũ Thị Hương Giang",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "High",
      dueDate: "2023-06-30",
      Problem: "Lỗi giao diện",
      solveThisProblem: "Kiểm tra và cập nhật lại giao diện",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Tạ Hải Tùng",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-06-30",
      Problem: "Khó khăn trong làm việc nhóm",
      solveThisProblem:
        "Sử dụng các công cụ và phần mềm quản lý dự án để theo dõi tiến độ công việc, phân công nhiệm vụ và quản lý tài liệu chung",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Tạ Hải Tùng",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-06-30",
      Problem: "Lỗi kết nối email",
      solveThisProblem: "Kiểm tra cấu hình email và khắc phục lỗi kết nối",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Nguyễn Thị Hạnh",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-06-30",
      Problem: "Lỗi hiển thị dữ liệu",
      solveThisProblem: "Kiểm tra lại dữ liệu và cập nhật hệ thống",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Lê Huy Hoàng",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Low",
      dueDate: "2023-06-30",
      Problem: "Thiếu thông tin đăng nhập",
      solveThisProblem:
        "Gửi lại thông tin đăng nhập cho người dùng và hướng dẫn cách đăng nhập",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Nguyễn Văn Thành",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Medium",
      dueDate: "2023-06-30",
      Problem: "Lỗi kết nối cơ sở dữ liệu",
      solveThisProblem: "Kiểm tra và khắc phục lỗi kết nối cơ sở dữ liệu",
    },
    {
      Support: "Phan Công Hiếu",
      Assignee: "Trịnh Tuấn Đạt",
      User: "Phạm Vân Anh",
      Project: "Hust Lab",
      Priority: "Low",
      dueDate: "2023-06-30",
      Problem: "Không thể tải lên tệp tin",
      solveThisProblem:
        "Kiểm tra cấu hình máy chủ và hướng dẫn cách tải lên tệp tin",
    },
  ];
  
  var recentlyAssignedTasks = [
    {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Nguyễn Đình Hiệp",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 5,
    Task: "Tối ưu hóa hiệu suất ứng dụng",
    Assignee: "Vũ Thị Hương Giang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 4,
    Task: "Xây dựng cơ sở dữ liệu",
    Assignee: "Trần Văn Mạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 6,
    Task: "Phân tích dữ liệu thống kê",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 7,
    Task: "Kiểm tra tính bảo mật của ứng dụng",
    Assignee: "Nguyễn Thị Trang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Ngô Lan Anh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    {
    id: 8,
    Task: "Tạo báo cáo tổng kết dự án",
    Assignee: "Trần Văn Mạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    ];
    
    var doTodayTasks = [
    {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Nguyễn Đình Hiệp",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 5,
    Task: "Xây dựng hệ thống quản lý người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 4,
    Task: "Kiểm thử chức năng",
    Assignee: "Nguyễn Thị Hạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 6,
    Task: "Thiết kế giao diện trang quản lý dự án",
    Assignee: "Lê Huy Hoàng",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 7,
    Task: "Triển khai hệ thống lưu trữ tệp tin",
    Assignee: "Vũ Thị Hương Giang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Tạ Hải Tùng",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    {
    id: 8,
    Task: "Phân tích yêu cầu hệ thống",
    Assignee: "Nguyễn Văn Thành",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    ];
    
    var doThisWeekTasks = [
    {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Nguyễn Đình Hiệp",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 5,
    Task: "Tối ưu hóa cấu trúc cơ sở dữ liệu",
    Assignee: "Vũ Thị Hương Giang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 4,
    Task: "Phát triển tính năng đăng ký thành viên",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 6,
    Task: "Kiểm tra tính bảo mật của ứng dụng",
    Assignee: "Nguyễn Thị Trang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 7,
    Task: "Tạo báo cáo tổng kết tuần",
    Assignee: "Trần Văn Mạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Ngô Lan Anh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-07-10",
    },
    {
    id: 8,
    Task: "Cải thiện giao diện đăng nhập",
    Assignee: "Nguyễn Thị Hạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    ];
    
    var doThisMonthTasks = [
    {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Nguyễn Đình Hiệp",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 5,
    Task: "Tối ưu hóa hiệu suất ứng dụng",
    Assignee: "Vũ Thị Hương Giang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 4,
    Task: "Xây dựng cơ sở dữ liệu",
    Assignee: "Trần Văn Mạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 6,
    Task: "Phân tích dữ liệu thống kê",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 7,
    Task: "Kiểm tra tính bảo mật của ứng dụng",
    Assignee: "Nguyễn Thị Trang",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Ngô Lan Anh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
    Priority: "High",
    dueDate: "2023-07-10",
    },
    {
    id: 8,
    Task: "Tạo báo cáo tổng kết dự án",
    Assignee: "Trần Văn Mạnh",
    User: "Phan Công Hiếu",
    Project: "Hust Lab",
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
                  <p>Problem: {task?.Problem}</p>
                  <p>Solve this Problem: {task?.solveThisProblem}</p>
                </Card>
              ))}
             
            </div>
            <SupportModal
                    visible={isSupportModalVisible}
                    onCancel={handleCancelSupportModal}
                    onOk={handleSaveSupportModal}
                    task={selectedSupportTask}
                  />
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

export default Board;
