import { useState } from 'react';
import { Layout, Card, Modal, Input, Space, Rate, Tag } from 'antd';
import { PlusOutlined,StarFilled } from '@ant-design/icons';

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sectionName, setSectionName] = useState('');

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
      setSectionName('');
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSectionName('');
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
  }
  return (
    <Layout>
      <Content className="p-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Review</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
            {reviewTasks.map((task) => (
  <Card key={task.id} className="mb-4">
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
      Rating: <Rate disabled value={task.Rating} character={<StarFilled />} />
    </p>
  </Card>
))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {supportTasks.map((task) => (
                <Card key={task.id} className="mb-4"> 
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
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Recently Assigned</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {recentlyAssignedTasks.map((task) => (
                <Card key={task.id} className="mb-4"><h3>{task.title}</h3>
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
            <h2 className="text-lg font-bold mb-4">Do Today</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doTodayTasks.map((task) => (
                <Card key={task.id} className="mb-4"><h3>{task.title}</h3>
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
                <p>Due Date: {task.dueDate}</p></Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Do This Week</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doThisWeekTasks.map((task) => (
                <Card key={task.id} className="mb-4"><h3>{task.title}</h3>
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
                <p>Due Date: {task.dueDate}</p></Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Do This Month</h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
              {doThisMonthTasks.map((task) => (
                <Card key={task.id} className="mb-4"><h3>{task.title}</h3>
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
                <p>Due Date: {task.dueDate}</p></Card>
              ))}
              
            </div>
          </div>
          
              {sections.map((section) => (
                    <div className="col-span-1">
                    <h2 className="text-lg font-bold mb-4">
                <div key={section.id} className="flex justify-center items-center">
                  {section.name}
                </div>
                </h2>
            <div className="h-screen overflow-y-auto hover:overflow-y-scroll">
             
                <Card className="mb-4">{}</Card>
             
              
            </div></div>
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
