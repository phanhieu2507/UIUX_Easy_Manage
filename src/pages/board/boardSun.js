import { useState } from "react";
import { Layout, Card, Modal, Input, Space, Rate, Tag, Divider } from "antd";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import ReviewModal from "../../components/ReviewModal";
import SupportModal from "../../components/SupportModal";
import NormalModal from "../../components/NormalTaskModal";
const { Content } = Layout;

const BoardSun = () => {
  var reviewTasks = [
    {
    Review: "Phan Công Hiếu",
    Task: "Tạo mô phỏng cho ứng dụng",
    Assignee: "Vũ Thị Hương Giang",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
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
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-15",
    Comment: "Báo cáo thiếu mục 2",
    Rating: 4.8,
    },
    // Thêm 5 task liên quan đến SunAsterisk
    {
    Review: "Phan Công Hiếu",
    Task: "Kiểm tra và sửa lỗi trang web",
    Assignee: "Nguyễn Thị Minh Châu",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-07-05",
    Comment: "Tìm kiếm và khắc phục các lỗi trên trang web",
    Rating: null,
    },
    {
    Review: "Phan Công Hiếu",
    Task: "Phân tích yêu cầu khách hàng",
    Assignee: "Phạm Văn Thành",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-10",
    Comment: "Thu thập yêu cầu và tạo tài liệu phân tích",
    Rating: null,
    },
    {
    Review: "Phan Công Hiếu",
    Task: "Xây dựng chức năng đăng nhập",
    Assignee: "Nguyễn Thị Hương",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-15",
    Comment: "Phát triển chức năng đăng nhập cho ứng dụng",
    Rating: null,
    },
    {
    Review: "Phan Công Hiếu",
    Task: "Thử nghiệm và kiểm tra ứng dụng",
    Assignee: "Trần Quốc Tuấn",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-20",
    Comment: "Tiến hành thử nghiệm và kiểm tra ứng dụng",
    Rating: null,
    },
    {
    Review: "Phan Công Hiếu",
    Task: "Tối ưu hóa hiệu suất ứng dụng",
    Assignee: "Lê Thị Lan",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-25",
    Comment: "Tối ưu hóa hiệu suất và tốc độ hoạt động của ứng dụng",
    Rating: null,
    },
    ];
    
    var supportTasks = [
    {
    Support: "Phan Công Hiếu",
    Assignee: "Phạm Bích Phương",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-06-30",
    Problem: "Phần component cha không liên kết",
    solveThisProblem: "Đọc trong docs",
    },
    {
    Support: "Phan Công Hiếu",
    Assignee: "Tạ Hải Tùng",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-06-30",
    Problem: "Khó khăn trong làm việc nhóm",
    solveThisProblem:
    "Sử dụng các công cụ và phần mềm quản lý dự án để theo dõi tiến độ công việc, phân công nhiệm vụ và quản lý tài liệu chung",
    },
    // Thêm 5 task liên quan đến SunAsterisk
    {
    Support: "Phan Công Hiếu",
    Assignee: "Nguyễn Văn Bình",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-07-05",
    Problem: "Lỗi kết nối cơ sở dữ liệu",
    solveThisProblem: "Kiểm tra và sửa lỗi kết nối cơ sở dữ liệu",
    },
    {
    Support: "Phan Công Hiếu",
    Assignee: "Lê Văn Dũng",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-10",
    Problem: "Thiếu thông tin tài liệu",
    solveThisProblem: "Bổ sung thông tin vào tài liệu",
    },
    {
    Support: "Phan Công Hiếu",
    Assignee: "Đỗ Thị Mai",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-15",
    Problem: "Không thể truy cập mạng nội bộ",
    solveThisProblem: "Kiểm tra cấu hình mạng và khắc phục lỗi",
    },
    {
    Support: "Phan Công Hiếu",
    Assignee: "Nguyễn Thanh Tùng",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-20",
    Problem: "Lỗi hiển thị dữ liệu",
    solveThisProblem: "Xem xét và sửa lỗi hiển thị dữ liệu",
    },
    {
    Support: "Phan Công Hiếu",
    Assignee: "Trần Minh Thông",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-25",
    Problem: "Không thể cài đặt ứng dụng",
    solveThisProblem: "Kiểm tra và khắc phục lỗi cài đặt",
    },
    ];
    
    var recentlyAssignedTasks = [
    {
    id: 1,
    Task: "Tạo giao diện cho App",
    Assignee: "Phạm Vân Anh",
    User: "Phan Công Hiếu",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Xử lí lỗi ở màn Home",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Xử lí lỗi ở màn Home details",
    Assignee: "Ngô Lan Anh",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    // Thêm 5 task liên quan đến SunAsterisk
    {
    id: 4,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Lê Văn Bình",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-05",
    },
    {
    id: 5,
    Task: "Lập kế hoạch dự án",
    Assignee: "Trần Thị Mỹ",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    {
    id: 6,
    Task: "Tạo bảng điều khiển quản lý",
    Assignee: "Nguyễn Đình Tùng",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-15",
    },
    {
    id: 7,
    Task: "Phát triển chức năng thanh toán",
    Assignee: "Trần Thị Thảo",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-07-20",
    },
    {
    id: 8,
    Task: "Xây dựng giao diện chính",
    Assignee: "Nguyễn Văn A",
    User: "Hoàng Việt Đức",
    Project: "Sun*Asterisk",
    Priority: "Medium",
    dueDate: "2023-07-25",
    },
    ];
    
    var doTodayTasks = [
    {
    id: 1,
    Task: "Tạo giao diện người dùng",
    Assignee: "Vũ Thị Hương Giang",
    User: "Phan Công Hiếu",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-06-30",
    },
    {
    id: 2,
    Task: "Phân tích yêu cầu người dùng",
    Assignee: "Trịnh Tuấn Đạt",
    User: "Phan Công Hiếu",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-06-30",
    },
    {
    id: 3,
    Task: "Làm 1 đề JLPT",
    Assignee: "Ngô Lan Anh",
    User: "Phan Công Hiếu",
    Project: "SunAsterisk",
    Priority: "Low",
    dueDate: "2023-07-10",
    },
    // Thêm 5 task liên quan đến SunAsterisk
    {
    id: 4,
    Task: "Tạo mô hình cơ sở dữ liệu",
    Assignee: "Nguyễn Đình An",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-07-05",
    },
    {
    id: 5,
    Task: "Phát triển chức năng tìm kiếm",
    Assignee: "Trần Thị Mai",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-10",
    },
    {
    id: 6,
    Task: "Xây dựng giao diện hồ sơ người dùng",
    Assignee: "Lê Văn B",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "Medium",
    dueDate: "2023-07-15",
    },
    {
    id: 7,
    Task: "Kiểm thử và sửa lỗi",
    Assignee: "Trần Đức Cường",
    User: "Hoàng Việt Đức",
    Project: "SunAsterisk",
    Priority: "High",
    dueDate: "2023-07-20",
    },
    {
    id: 8,
    Task: "Tối ưu hóa hiệu suất",
    Assignee: "Nguyễn Thị Hương",
    User: "Hoàng Việt Đức",
    Project: "Sun*Asterisk",
    Priority: "Medium",
    dueDate: "2023-07-25",
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


export default BoardSun;
