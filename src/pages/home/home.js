import { useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Menu,
  List,
  Checkbox,
  Select,
  Tag,
} from "antd";
import {
  CalendarOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  UserOutlined,
  ToolOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const myTasksData = [
  {
    groupName: "dotoday",
    tasks: [
      {
        id: "1",
        title: "Học 20 từ mới",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        title: "Viết mail cho công ty Sun",
        priority: "high",
        completed: false,
      },
      {
        id: "3",
        title: "Sắp sếp ngăn kéo tủ",
        priority: "medium",
        completed: false,
      },
      {
        id: "4",
        title: "Dắt chó đi dạo",
        priority: "medium",
        completed: false,
      },
      {
        id: "5",
        title: "Mua rau muống cho bữa tối",
        priority: "low",
        completed: false,
      },
    ],
  },
  {
    groupName: "pastdue",
    tasks: [
      {
        id: "6",
        title: "Nghe hội thảo trên trường",
        priority: "medium",
        completed: false,
      },
    ],
  },
  {
    groupName: "complete",
    tasks: [
      {
        id: "7",
        title: "Học 4 ngữ pháp shinkanzen",
        priority: "medium",
        completed: true,
        completionRate: 50,
      },
      {
        id: "8",
        title: "Học 10 từ mới",
        priority: "medium",
        completed: true,
        completionRate: 80,
      },
      {
        id: "9",
        title: "Đi chợ mua cá chép",
        priority: "low",
        completed: true,
        completionRate: 100,
      },
    ],
  },
];

const projectTaskData = [
  {
    groupName: "assigned",
    tasks: [
      {
        id: "1",
        title: "Login logout bug",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        title: "Security attacked",
        priority: "high",
        completed: false,
      },
    ],
  },
  {
    groupName: "review",
    tasks: [
      {
        id: "3",
        title: "Can’t click to Ok button",
        status: "Done",
      },
      {
        id: "4",
        title: "Design home screen",
        status: "Done",
      },
      {
        id: "5",
        title: "Detail modal not working",
        status: "Has Problem",
      },
    ],
  },
  {
    groupName: "support",
    tasks: [
      {
        id: "6",
        title: "Design member screen",
        status: "Has Problem",
      },
      {
        id: "7",
        title: "Backend for Member entity",
        status: "Has Problem",
      },
      {
        id: "8",
        title: "Backend for User entity",
        status: "Doing",
      },
    ],
  },
];


const projects = [
  { id: "0", name: "Individual" },
  { id: "1", name: "Hust Lab" },
  { id: "2", name: "UIUX" },
  { id: "3", name: "Sun*Asterisk" },
];
const joinedProject = [
  { id: "0", name: "Hust Lab" },
  { id: "1", name: "UIUX" },
  { id: "2", name: "Sun*Asterisk" },
];

const Home = () => {
  const lineChartData = {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [17, 19, 12, 20],
  };

  const lineChartOptions = {
    title: {
      text: "Tasks completed this month",
    },
    xAxis: {
      categories: lineChartData.categories,
    },
    yAxis: {
      title: {
        text: "Tasks",
      },
    },
    series: [
      {
        name: "Tasks completed",
        data: lineChartData.data,
      },
    ],
  };

  const ratingChartData = {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [7.6, 8.7, 9.6, 8.8],
  };

  const ratingChartOptions = {
    title: {
      text: "Rating from others",
    },
    xAxis: {
      categories: ratingChartData.categories,
    },
    yAxis: {
      title: {
        text: "Rating",
      },
    },
    series: [
      {
        name: "Rating",
        data: ratingChartData.data,
      },
    ],
  };

  const [selectedTaskMenuKey, setSelectedTaskMenuKey] = useState("1");
  const [selectedProjectTaskMenuKey, setSelectedProjectTaskMenuKey] = useState("1");
  const [selectedProject, setSelectedProject] = useState("0");

  const handleTaskMenuClick = ({ key }) => {
    setSelectedTaskMenuKey(key);
  };
  const handleProjectTaskMenuClick = ({ key }) => {
    setSelectedProjectTaskMenuKey(key);
  };

  const handleProjectSelect = (value) => {
    setSelectedProject(value);
  };
  const getPriorityColor = (priority) => {
    if (priority === "high") {
      return "red";
    } else if (priority === "medium"&&priority === "hasProblem") {
      return "yellow";
    } else if (priority === "low"&& priority === "done") {
      return "green";
    }
  };
  const getFilteredMyTasks = (key) => {
    if (key === "1") {
      return myTasksData.find((group) => group.groupName === "dotoday").tasks;
    } else if (key === "2") {
      return myTasksData.find((group) => group.groupName === "pastdue").tasks;
    } else if (key === "3") {
      return myTasksData.find((group) => group.groupName === "complete").tasks;
    }
    return [];
  };
  const getFilteredProjectTasks = (key) => {
    if (key === "1") {
      return projectTaskData.find((group) => group.groupName === "assigned").tasks;
    } else if (key === "2") {
      return projectTaskData.find((group) => group.groupName === "review").tasks;
    } else if (key === "3") {
      return projectTaskData.find((group) => group.groupName === "support").tasks;
    }
    return [];
  };

  const filteredMyTasks = getFilteredMyTasks(selectedTaskMenuKey);
  const filteredProjectTasks = getFilteredProjectTasks(selectedProjectTaskMenuKey);

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ padding: "50px" }}>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="pt-24 pb-8"
          >
            <Title level={2} style={{ fontFamily: "Roboto", fontSize: "32px" }}>
              Good morning, Hieu
            </Title>
          </div>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="My Tasks" style={{ minHeight: "300px" }}>
                <Menu
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  selectedKeys={[selectedTaskMenuKey]}
                  onClick={handleTaskMenuClick}
                >
                  <Menu.Item key="1" icon={<CalendarOutlined />}>
                    Do Today
                  </Menu.Item>
                  <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
                    Pass Due
                  </Menu.Item>
                  <Menu.Item key="3" icon={<CheckCircleOutlined />}>
                    Completed
                  </Menu.Item>
                </Menu>
                <List
  dataSource={filteredMyTasks}
  renderItem={(task) => (
    <List.Item>
      <Checkbox checked={task?.completed}>{task?.title}</Checkbox>
      <Tag color={getPriorityColor(task?.priority)}>{task?.priority}</Tag>
    </List.Item>
  )}
  pagination={{
    pageSize: 10,
  }}
/>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "10px" }}>Project </span>
                    <Select
                      defaultValue={selectedProject}
                      style={{ width: 200 }}
                      onChange={handleProjectSelect}
                    >
                      {joinedProject.map((project) => (
                        <Option key={project.id} value={project.id}>
                          {project.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                }
              >
                <Menu
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  selectedKeys={[selectedProjectTaskMenuKey]}
                  onClick={handleProjectTaskMenuClick}
                >
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    Assigned
                  </Menu.Item>
                  <Menu.Item key="2" icon={<ToolOutlined />}>
                    Support
                  </Menu.Item>
                  <Menu.Item key="3" icon={<FileDoneOutlined />}>
                    Review
                  </Menu.Item>
                </Menu>
                {/* Các task tương ứng */}
                <List
                  dataSource={filteredProjectTasks}
                  renderItem={(task) => (
                    <List.Item>
                      <Checkbox checked={task?.completed}>{task?.title}</Checkbox>
                    </List.Item>
                  )}
                  pagination={{
                    pageSize: 10,
                  }}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="pt-8">
            <Col span={12}>
              <Card title="Task completed this month">
                <Select
                  defaultValue={selectedProject}
                  style={{ width: 200, marginBottom: "16px" }}
                  onChange={handleProjectSelect}
                >
                  {projects.map((project) => (
                    <Option key={project.id} value={project.id}>
                      {project.name}
                    </Option>
                  ))}
                </Select>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={lineChartOptions}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Rating from others">
                <Select
                  defaultValue={selectedProject}
                  style={{ width: 200, marginBottom: "16px" }}
                  onChange={handleProjectSelect}
                >
                  {joinedProject.map((project) => (
                    <Option key={project.id} value={project.id}>
                      {project.name}
                    </Option>
                  ))}
                </Select>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={ratingChartOptions}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
