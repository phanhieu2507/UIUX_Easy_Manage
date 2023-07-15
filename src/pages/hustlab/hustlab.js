import { useState } from "react";
import { Layout, Typography, Menu } from "antd";
import {
  CalendarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Board from "../board/board";
const localizer = momentLocalizer(moment);

const { Content } = Layout;
const { Title } = Typography;

const HustLab = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("board");

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  // Danh sách các sự kiện
  
const events = [
  {
  start: new Date(2023, 5, 26, 10, 0),
  end: new Date(2023, 5, 30, 11, 30),
  title: "Design figma for home screen",
  description: "Discuss project updates",
  },
  {
  start: new Date(2023, 5, 28, 14, 0),
  end: new Date(2023, 5, 29, 15, 30),
  title: "Design figma for setting screen",
  description: "Present new product features",
  },
  {
  start: new Date(2023, 5, 24, 10, 0),
  end: new Date(2023, 5, 27, 11, 30),
  title: "Design figma for home screen",
  description: "Discuss project updates",
  },
  {
  start: new Date(2023, 5, 23, 14, 0),
  end: new Date(2023, 5, 26, 15, 30),
  title: "Design figma for setting screen",
  description: "Present new product features",
  },
  // 20 additional events related to Hust Lab
  {
  start: new Date(2023, 6, 1, 9, 0),
  end: new Date(2023, 6, 1, 10, 0),
  title: "Sprint Planning Meeting",
  description: "Plan tasks for the upcoming sprint",
  },
  {
  start: new Date(2023, 6, 3, 14, 30),
  end: new Date(2023, 6, 3, 16, 0),
  title: "Code Review Session",
  description: "Review code and provide feedback",
  },
  {
  start: new Date(2023, 6, 5, 11, 0),
  end: new Date(2023, 6, 5, 12, 30),
  title: "Client Meeting",
  description: "Discuss project requirements with the client",
  },
  {
  start: new Date(2023, 6, 7, 10, 0),
  end: new Date(2023, 6, 7, 11, 30),
  title: "UI Design Workshop",
  description: "Collaborate on designing the user interface",
  },
  {
  start: new Date(2023, 6, 10, 13, 0),
  end: new Date(2023, 6, 10, 14, 30),
  title: "Testing Session",
  description: "Conduct functional and usability testing",
  },
  {
  start: new Date(2023, 6, 12, 15, 0),
  end: new Date(2023, 6, 12, 16, 30),
  title: "Project Status Meeting",
  description: "Provide updates on the project progress",
  },
  {
  start: new Date(2023, 6, 15, 9, 30),
  end: new Date(2023, 6, 15, 11, 0),
  title: "Demo Presentation",
  description: "Present project demo to stakeholders",
  },
  {
  start: new Date(2023, 6, 18, 14, 0),
  end: new Date(2023, 6, 18, 15, 30),
  title: "Bug Fixing Session",
  description: "Address and fix reported bugs",
  },
  {
  start: new Date(2023, 6, 20, 10, 0),
  end: new Date(2023, 6, 20, 11, 30),
  title: "Documentation Review",
  description: "Review and update project documentation",
  },
  {
  start: new Date(2023, 6, 23, 13, 30),
  end: new Date(2023, 6, 23, 15, 0),
  title: "Deployment Meeting",
  description: "Plan and coordinate the deployment process",
  },
  {
  start: new Date(2023, 6, 26, 9, 0),
  end: new Date(2023, 6, 26, 10, 30),
  title: "User Training Session",
  description: "Provide training to end users on using the system",
  },
  {
  start: new Date(2023, 6, 29, 14, 0),
  end: new Date(2023, 6, 29, 15, 30),
  title: "Project Review Meeting",
  description: "Evaluate project outcomes and lessons learned",
  },
  {
  start: new Date(2023, 7, 1, 10, 0),
  end: new Date(2023, 7, 1, 11, 30),
  title: "Task Planning Session",
  description: "Plan tasks for the next project phase",
  },
  {
  start: new Date(2023, 7, 4, 15, 0),
  end: new Date(2023, 7, 4, 16, 30),
  title: "Code Refactoring Session",
  description: "Refactor code for better maintainability",
  },
  {
  start: new Date(2023, 7, 7, 9, 30),
  end: new Date(2023, 7, 7, 11, 0),
  title: "Client Demo",
  description: "Present project progress to the client",
  },
  {
  start: new Date(2023, 7, 10, 14, 0),
  end: new Date(2023, 7, 10, 15, 30),
  title: "Usability Testing Session",
  description: "Conduct usability testing with target users",
  },
  {
  start: new Date(2023, 7, 13, 11, 0),
  end: new Date(2023, 7, 13, 12, 30),
  title: "Project Review Meeting",
  description: "Evaluate project outcomes and lessons learned",
  },
  {
  start: new Date(2023, 7, 16, 13, 0),
  end: new Date(2023, 7, 16, 14, 30),
  title: "Code Review Session",
  description: "Review code and provide feedback",
  },
  {
  start: new Date(2023, 7, 19, 10, 0),
  end: new Date(2023, 7, 19, 11, 30),
  title: "Project Status Meeting",
  description: "Provide updates on the project progress",
  },
  {
  start: new Date(2023, 7, 22, 14, 30),
  end: new Date(2023, 7, 22, 16, 0),
  title: "Documentation Review",
  description: "Review and update project documentation",
  },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ padding: "60px", paddingLeft:"80px" }} >
          <div className="mb-4">
            <div className="flex justify-between items-center pt-8 ">
              <Title level={4} style={{ margin: 0 }}>
               Hust Lab
              </Title>
            </div>
            <Menu
              mode="horizontal"
              selectedKeys={[selectedMenuKey]}
              onClick={handleMenuClick}
              style={{ borderBottom: "" }}
              className="bg-gray-100"
            >
              <Menu.Item key="board" icon={<AppstoreOutlined />}>
                Board
              </Menu.Item>
              <Menu.Item key="calendar" icon={<CalendarOutlined />}>
                Calendar
              </Menu.Item>
            </Menu>
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className="w-full h-full">
              {selectedMenuKey === "calendar" ? (
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  views={["month", "week", "day"]}
                  defaultView="month"
                  defaultDate={new Date()}
                  onSelectEvent={(event) => console.log(event)}
                  onSelectSlot={(slotInfo) => console.log(slotInfo)}
                />
              ) : (
                <Board />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HustLab;
