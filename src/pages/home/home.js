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

const tasksData = [
  // Các task tương tự như trong ví dụ trước
];

const projects = [
  { id: "0", name: "Individual" },
  { id: "1", name: "Hust Lab" },
  { id: "2", name: "UIUX" },
  { id: "3", name: "Sun*Asterisk" },
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

  const [selectedMenuKey, setSelectedMenuKey] = useState("1");
  const [selectedProject, setSelectedProject] = useState("0");

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  const handleProjectSelect = (value) => {
    setSelectedProject(value);
  };

  const getFilteredTasks = (key) => {
    if (key === "1") {
      return tasksData.filter((task) => !task.completed);
    } else if (key === "2") {
      return tasksData.filter(
        (task) => task.dueDate < new Date().toISOString()
      );
    } else if (key === "3") {
      return tasksData.filter((task) => task.completed);
    }
    return tasksData;
  };

  const filteredTasks = getFilteredTasks(selectedMenuKey);

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
                  selectedKeys={[selectedMenuKey]}
                  onClick={handleMenuClick}
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
                  dataSource={filteredTasks}
                  renderItem={(task) => (
                    <List.Item>
                      <Checkbox checked={task.completed}>{task.title}</Checkbox>
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
                    <span style={{ marginRight: "10px" }}>Project  </span>
                    <Select
                      defaultValue={selectedProject}
                      style={{ width: 200 }}
                      onChange={handleProjectSelect}
                    >
                      {projects.map((project) => (
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
                  onClick={() => {}}
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
                  dataSource={filteredTasks}
                  renderItem={(task) => (
                    <List.Item>
                      <Checkbox checked={task.completed}>{task.title}</Checkbox>
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
                <div style={{ marginTop: "20px" }}>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={lineChartOptions}
                  />
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  Total:{" "}
                  {lineChartData.data.reduce((total, value) => total + value, 0)}
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Rating from others">
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
                <div style={{ marginTop: "20px" }}>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={ratingChartOptions}
                  />
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
  Average: 8.67
</div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
