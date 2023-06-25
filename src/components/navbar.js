import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Avatar,
  Button,
  Modal,
  Form,
  Checkbox,
  DatePicker,
  TimePicker,
  Select,
  Radio,
} from "antd";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;
const { Option } = Select;

const Navbar = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [isUiuxProjectSelected, setUiuxProjectSelected] = useState(false);
  const [isHustLabProjectSelected, setHustLabProjectSelected] = useState(false);
  const [isSunAsteriskProjectSelected, setSunAsteriskProjectSelected] =
    useState(false);

  const handleCreateModalOpen = () => {
    setCreateModalVisible(true);
  };

  const handleCreateModalClose = () => {
    setCreateModalVisible(false);
  };

  const handleProjectSelect = (value) => {
    if (value === "UIUX") {
      setUiuxProjectSelected(true);
      setHustLabProjectSelected(false);
      setSunAsteriskProjectSelected(false);
    } else if (value === "HUST Lab") {
      setUiuxProjectSelected(false);
      setHustLabProjectSelected(true);
      setSunAsteriskProjectSelected(false);
    } else if (value === "Sun*Asterisk") {
      setUiuxProjectSelected(false);
      setHustLabProjectSelected(false);
      setSunAsteriskProjectSelected(true);
    } else {
      setUiuxProjectSelected(false);
      setHustLabProjectSelected(false);
      setSunAsteriskProjectSelected(false);
    }
  };

  const handleCreateTask = (values) => {
    console.log("Received values:", values);
    handleCreateModalClose();
  };

  return (
    <Header className="bg-blue-400">
      <div className="flex items-center justify-between mx-auto h-full">
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "2rem" }} />}
        />
        <Button
          type="primary"
          className="ml-24 mr-4 rounded-lg border border-black bg-white text-black"
          onClick={handleCreateModalOpen}
        >
          Create
        </Button>
        <div className="flex items-center justify-center flex-grow">
          <Search
            placeholder="Search..."
            className="w-full max-w-2xl bg-white"
          />
        </div>
        <Avatar
          size={32}
          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/297228210_1198514960930805_3166992545929509431_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=rjC0kxnrGtAAX8D0YFN&_nc_ht=scontent.fhan3-1.fna&oh=00_AfArANVyVjBXICvu6-hHO5MkCP6HfY96-1Tmfw05aky0_g&oe=649D2A46"
          className="ml-4"
        />
      </div>
      <Modal
        title="Create Task"
        visible={isCreateModalVisible}
        onCancel={handleCreateModalClose}
        footer={null}
      >
        <Form onFinish={handleCreateTask}>
          <Form.Item
            name="taskName"
            label="Task Name"
            rules={[{ required: true, message: "Please enter task name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="project"
            label="Project"
            rules={[{ required: true, message: "Please select a project" }]}
          >
            <Select onChange={handleProjectSelect}>
              <Option value="HUST Lab">HUST Lab</Option>
              <Option value="UIUX">UIUX</Option>
              <Option value="Sun*Asterisk">Sun*Asterisk</Option>
              <Option value="None">None</Option>
            </Select>
          </Form.Item>
          <Form.Item name="addDate" label="Add Date" valuePropName="checked">
            <Checkbox>Add Date</Checkbox>
          </Form.Item>
          <Form.Item noStyle dependencies={["addDate"]}>
            {({ getFieldValue }) => {
              return getFieldValue("addDate") ? (
                <>
                  <Form.Item name="startDate" label="Start Date">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item name="dueDate" label="Due Date">
                    <DatePicker />
                  </Form.Item>
                </>
              ) : null;
            }}
          </Form.Item>
          <Form.Item name="addTime" label="Add Time" valuePropName="checked">
            <Checkbox>Add Time</Checkbox>
          </Form.Item>
          <Form.Item noStyle dependencies={["addTime"]}>
            {({ getFieldValue }) => {
              return getFieldValue("addTime") ? (
                <>
                  <Form.Item name="startTime" label="Start Time">
                    <TimePicker />
                  </Form.Item>
                  <Form.Item name="dueTime" label="Due Time">
                    <TimePicker />
                  </Form.Item>
                </>
              ) : null;
            }}
          </Form.Item>
          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: "Please select a priority" }]}
          >
            <Select>
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="section"
            label="Section"
            rules={[{ required: true, message: "Please select a section" }]}
          >
            <Select>
              <Option value="Do Today">Do Today</Option>
              <Option value="Do this Week">Do this Week</Option>
              <Option value="Do this Month">Do this Month</Option>
            </Select>
          </Form.Item>
          {isUiuxProjectSelected ||
          isHustLabProjectSelected ||
          isSunAsteriskProjectSelected ? (
            <>
              <Form.Item name="assignee" label="Assignee">
                <Select mode="multiple">
                  <Option value="Phan Công Hiếu">Phan Công Hiếu</Option>
                  <Option value="Phạm Vân Anh">Phạm Vân Anh</Option>
                  <Option value="Hoàng Việt Đức">Hoàng Việt Đức</Option>
                  <Option value="Vũ Đình Hoài">Vũ Đình Hoài</Option>
                  <Option value="Lê Đình Hải Sơn">Lê Đình Hải Sơn</Option>
                  <Option value="Me">Me</Option>
                </Select>
              </Form.Item>
              <Form.Item name="supporter" label="Supporter">
                <Select mode="multiple">
                  <Option value="Phan Công Hiếu">Phan Công Hiếu</Option>
                  <Option value="Phạm Vân Anh">Phạm Vân Anh</Option>
                  <Option value="Hoàng Việt Đức">Hoàng Việt Đức</Option>
                  <Option value="Vũ Đình Hoài">Vũ Đình Hoài</Option>
                  <Option value="Lê Đình Hải Sơn">Lê Đình Hải Sơn</Option>
                  <Option value="Me">Me</Option>
                </Select>
              </Form.Item>
              <Form.Item name="reviewer" label="Reviewer">
                <Select mode="multiple">
                  <Option value="Phan Công Hiếu">Phan Công Hiếu</Option>
                  <Option value="Phạm Vân Anh">Phạm Vân Anh</Option>
                  <Option value="Hoàng Việt Đức">Hoàng Việt Đức</Option>
                  <Option value="Vũ Đình Hoài">Vũ Đình Hoài</Option>
                  <Option value="Lê Đình Hải Sơn">Lê Đình Hải Sơn</Option>
                  <Option value="Me">Me</Option>
                </Select>
              </Form.Item>
            </>
          ) : null}
          <Form.Item name="repeat" label="Repeat">
            <Radio.Group defaultValue={"none"}>
              <Radio value="none">None</Radio>
              <Radio value="daily">Daily</Radio>
              <Radio value="weekly">Weekly</Radio>
              <Radio value="monthly">Monthly</Radio>
              <Radio value="yearly">Yearly</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Create Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Header>
  );
};

export default Navbar;
