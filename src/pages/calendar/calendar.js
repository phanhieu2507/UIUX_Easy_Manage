import { useState } from "react";
import { Layout, Typography, Menu } from "antd";
import { CalendarOutlined, AppstoreOutlined } from "@ant-design/icons";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Task from "../task/task";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const { Content } = Layout;
const { Title } = Typography;

const TaskCalendar = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("calendar");

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  // Danh sách các sự kiện
  const events = [
    {
      start: new Date(2023, 5, 26, 10, 0), // Thời gian bắt đầu
      end: new Date(2023, 5, 26, 11, 30), // Thời gian kết thúc
      title: "Meeting", // Tiêu đề sự kiện
      description: "Discuss project updates", // Mô tả sự kiện
    },
    {
      start: new Date(2023, 5, 28, 14, 0),
      end: new Date(2023, 5, 28, 15, 30),
      title: "Presentation",
      description: "Present new product features",
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ padding: "60px", paddingLeft: "80px" }}>
          <div className="mb-4">
            <div className="flex justify-between items-center pt-8 ">
              <Title level={4} style={{ margin: 0 }}>
                Tasks
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
                <div>
                  <Task />
                </div>
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default TaskCalendar;
