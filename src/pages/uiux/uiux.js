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
import BoardUIUX from "../board/boardUIUX";
const localizer = momentLocalizer(moment);

const { Content } = Layout;
const { Title } = Typography;

const UIUX = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("uiux");

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };

  // Danh sách các sự kiện
  const events = [
    {
    start: new Date(2023, 5, 26, 10, 0),
    end: new Date(2023, 5, 30, 11, 30),
    title: "Thiết kế giao diện cho màn hình chính",
    description: "Thảo luận về cập nhật dự án",
    },
    {
    start: new Date(2023, 5, 28, 14, 0),
    end: new Date(2023, 5, 29, 15, 30),
    title: "Thiết kế giao diện cho màn hình cài đặt",
    description: "Trình bày các tính năng mới của sản phẩm",
    },
    {
    start: new Date(2023, 5, 24, 10, 0),
    end: new Date(2023, 5, 27, 11, 30),
    title: "Lập trình cho màn hình chính",
    description: "Thảo luận về cập nhật dự án",
    },
    {
    start: new Date(2023, 5, 23, 14, 0),
    end: new Date(2023, 5, 26, 15, 30),
    title: "Lập trình cho màn hình cài đặt",
    description: "Trình bày các tính năng mới của sản phẩm",
    },
    // Các sự kiện liên quan đến UIUX
    {
    start: new Date(2023, 5, 25, 9, 0),
    end: new Date(2023, 5, 26, 16, 0),
    title: "Nghiên cứu và phân tích người dùng",
    description: "Thu thập phản hồi từ người dùng và phân tích dữ liệu",
    },
    {
    start: new Date(2023, 5, 28, 10, 0),
    end: new Date(2023, 5, 30, 14, 30),
    title: "Tạo khung dây chuyền (wireframe)",
    description: "Vẽ và tạo khung dây chuyền (wireframe) cho giao diện người dùng",
    },
    {
    start: new Date(2023, 5, 24, 13, 0),
    end: new Date(2023, 5, 25, 16, 30),
    title: "Xây dựng nguyên mẫu (prototype)",
    description: "Xây dựng nguyên mẫu tương tác để kiểm thử",
    },
    {
    start: new Date(2023, 5, 23, 9, 0),
    end: new Date(2023, 5, 24, 12, 30),
    title: "Đánh giá thiết kế giao diện",
    description: "Đánh giá và đưa ra phản hồi về thiết kế giao diện",
    },
    {
    start: new Date(2023, 5, 27, 15, 0),
    end: new Date(2023, 5, 29, 17, 30),
    title: "Kiểm thử tính sử dụng",
    description: "Tiến hành kiểm thử tính sử dụng trên nguyên mẫu giao diện",
    },
    {
    start: new Date(2023, 5, 24, 9, 0),
    end: new Date(2023, 5, 25, 13, 30),
    title: "Xây dựng hướng dẫn kiểu (style guide)",
    description: "Tạo hướng dẫn kiểu để đảm bảo giao diện thống nhất",
    },
    {
    start: new Date(2023, 5, 23, 11, 0),
    end: new Date(2023, 5, 24, 14, 30),
    title: "Thư viện thành phần giao diện",
    description: "Xây dựng thư viện các thành phần giao diện có thể tái sử dụng",
    },
    {
    start: new Date(2023, 5, 26, 9, 0),
    end: new Date(2023, 5, 27, 12, 30),
    title: "Phiên phản hồi giao diện",
    description: "Thu thập phản hồi về thiết kế giao diện từ các bên liên quan",
    },
    {
    start: new Date(2023, 5, 25, 14, 0),
    end: new Date(2023, 5, 26, 17, 30),
    title: "Triển khai giao diện",
    description: "Dịch thiết kế giao diện thành mã nguồn",
    },
    {
    start: new Date(2023, 5, 28, 9, 0),
    end: new Date(2023, 5, 30, 12, 30),
    title: "Kiểm thử và sửa lỗi giao diện",
    description: "Kiểm thử chức năng của giao diện và khắc phục lỗi",
    },
    {
    start: new Date(2023, 5, 23, 13, 0),
    end: new Date(2023, 5, 25, 16, 30),
    title: "Tối ưu hóa giao diện",
    description: "Tối ưu hóa hiệu suất giao diện để cải thiện trải nghiệm người dùng",
    },
    {
    start: new Date(2023, 5, 27, 10, 0),
    end: new Date(2023, 5, 29, 14, 30),
    title: "Đánh giá và cải thiện giao diện",
    description: "Xem xét và cải thiện triển khai giao diện",
    },
    {
    start: new Date(2023, 5, 24, 15, 0),
    end: new Date(2023, 5, 25, 17, 30),
    title: "Tài liệu hóa thiết kế giao diện",
    description: "Tài liệu hóa quyết định thiết kế giao diện và hướng dẫn",
    },
    {
    start: new Date(2023, 5, 26, 13, 0),
    end: new Date(2023, 5, 27, 16, 30),
    title: "Trình bày thiết kế giao diện",
    description: "Trình bày thiết kế giao diện cho các bên liên quan",
    },
    {
    start: new Date(2023, 5, 23, 10, 0),
    end: new Date(2023, 5, 24, 13, 30),
    title: "Kiểm thử tính sử dụng giao diện",
    description: "Tiến hành kiểm thử tính sử dụng trên triển khai giao diện",
    },
    {
    start: new Date(2023, 5, 28, 15, 0),
    end: new Date(2023, 5, 29, 17, 30),
    title: "Hoàn thiện thiết kế giao diện",
    description: "Hoàn thiện thiết kế giao diện để công bố",
    },
    {
    start: new Date(2023, 5, 25, 9, 0),
    end: new Date(2023, 5, 26, 12, 30),
    title: "Triển khai giao diện",
    description: "Triển khai giao diện trong môi trường sản phẩm",
    },
    {
    start: new Date(2023, 5, 30, 14, 0),
    end: new Date(2023, 6, 1, 17, 30),
    title: "Bảo trì giao diện",
    description: "Thực hiện bảo trì và cập nhật định kỳ cho giao diện",
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
               UIUX
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
                <BoardUIUX />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UIUX;
