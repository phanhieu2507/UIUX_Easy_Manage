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
import BoardSun from "../board/boardSun";
const localizer = momentLocalizer(moment);

const { Content } = Layout;
const { Title } = Typography;

const Sun = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("board");

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  // Danh sách các sự kiện
  var events = [
    {
    start: new Date(2023, 5, 26, 10, 0), // Thời gian bắt đầu
    end: new Date(2023, 5, 26, 11, 30), // Thời gian kết thúc
    title: "Cuộc họp", // Tiêu đề sự kiện
    description: "Thảo luận cập nhật dự án", // Mô tả sự kiện
    },
    {
    start: new Date(2023, 5, 28, 14, 0),
    end: new Date(2023, 5, 28, 15, 30),
    title: "Thuyết trình",
    description: "Trình bày tính năng mới của sản phẩm",
    },
    // Thêm 20 sự kiện liên quan đến công ty
    {
    start: new Date(2023, 6, 1, 9, 0),
    end: new Date(2023, 6, 1, 10, 0),
    title: "Buổi đào tạo",
    description: "Đào tạo nhân viên về quy trình làm việc",
    },
    {
    start: new Date(2023, 6, 3, 13, 30),
    end: new Date(2023, 6, 3, 15, 0),
    title: "Họp nhóm",
    description: "Bàn về kế hoạch thực hiện dự án",
    },
    {
    start: new Date(2023, 6, 5, 11, 0),
    end: new Date(2023, 6, 5, 12, 30),
    title: "Họp khách hàng",
    description: "Tiếp xúc khách hàng và lắng nghe ý kiến",
    },
    {
    start: new Date(2023, 6, 7, 14, 0),
    end: new Date(2023, 6, 7, 16, 0),
    title: "Buổi workshop",
    description: "Workshop về công nghệ mới",
    },
    {
    start: new Date(2023, 6, 10, 9, 0),
    end: new Date(2023, 6, 10, 10, 30),
    title: "Họp ban lãnh đạo",
    description: "Họp định kỳ của ban lãnh đạo công ty",
    },
    {
    start: new Date(2023, 6, 12, 15, 0),
    end: new Date(2023, 6, 12, 16, 30),
    title: "Hội thảo",
    description: "Hội thảo về xu hướng công nghệ mới",
    },
    {
    start: new Date(2023, 6, 15, 10, 0),
    end: new Date(2023, 6, 15, 11, 30),
    title: "Buổi đào tạo",
    description: "Đào tạo nhân viên về quy trình làm việc",
    },
    {
    start: new Date(2023, 6, 18, 13, 30),
    end: new Date(2023, 6, 18, 15, 0),
    title: "Họp nhóm",
    description: "Bàn về kế hoạch thực hiện dự án",
    },
    {
    start: new Date(2023, 6, 20, 11, 0),
    end: new Date(2023, 6, 20, 12, 30),
    title: "Họp khách hàng",
    description: "Tiếp xúc khách hàng và lắng nghe ý kiến",
    },
    {
    start: new Date(2023, 6, 23, 14, 0),
    end: new Date(2023, 6, 23, 16, 0),
    title: "Buổi workshop",
    description: "Workshop về công nghệ mới",
    },
    {
    start: new Date(2023, 6, 25, 9, 0),
    end: new Date(2023, 6, 25, 10, 30),
    title: "Họp ban lãnh đạo",
    description: "Họp định kỳ của ban lãnh đạo công ty",
    },
    {
    start: new Date(2023, 6, 28, 15, 0),
    end: new Date(2023, 6, 28, 16, 30),
    title: "Hội thảo",
    description: "Hội thảo về xu hướng công nghệ mới",
    },
    {
    start: new Date(2023, 7, 1, 9, 0),
    end: new Date(2023, 7, 1, 10, 30),
    title: "Buổi đào tạo",
    description: "Đào tạo nhân viên về quy trình làm việc",
    },
    {
    start: new Date(2023, 7, 4, 13, 30),
    end: new Date(2023, 7, 4, 15, 0),
    title: "Họp nhóm",
    description: "Bàn về kế hoạch thực hiện dự án",
    },
    {
    start: new Date(2023, 7, 7, 11, 0),
    end: new Date(2023, 7, 7, 12, 30),
    title: "Họp khách hàng",
    description: "Tiếp xúc khách hàng và lắng nghe ý kiến",
    },
    {
    start: new Date(2023, 7, 10, 14, 0),
    end: new Date(2023, 7, 10, 16, 0),
    title: "Buổi workshop",
    description: "Workshop về công nghệ mới",
    },
    {
    start: new Date(2023, 7, 13, 9, 0),
    end: new Date(2023, 7, 13, 10, 30),
    title: "Họp ban lãnh đạo",
    description: "Họp định kỳ của ban lãnh đạo công ty",
    },
    {
    start: new Date(2023, 7, 16, 15, 0),
    end: new Date(2023, 7, 16, 16, 30),
    title: "Hội thảo",
    description: "Hội thảo về xu hướng công nghệ mới",
    },
    {
    start: new Date(2023, 7, 19, 10, 0),
    end: new Date(2023, 7, 19, 11, 30),
    title: "Buổi đào tạo",
    description: "Đào tạo nhân viên về quy trình làm việc",
    },
    {
    start: new Date(2023, 7, 22, 13, 30),
    end: new Date(2023, 7, 22, 15, 0),
    title: "Họp nhóm",
    description: "Bàn về kế hoạch thực hiện dự án",
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
               Sun*Asterisk
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
                <BoardSun />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sun;
