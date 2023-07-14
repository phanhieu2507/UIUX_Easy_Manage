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
  Dropdown,
  Tag,
} from "antd";
import { MenuOutlined, FileAddOutlined, ProjectOutlined, UsergroupAddOutlined, MessageOutlined,  PlusCircleOutlined, } from '@ant-design/icons';
import CreateTaskModal from "./CreateTaskModal";

const { Header } = Layout;
const { Search } = Input;
const { Option } = Select;

const Navbar = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [isCreateProjectModalVisible, setCreateProjectModalVisible] = useState(
    false
  );
  const [inviteEmails, setInviteEmails] = useState([]);
  const [inviteInputValue, setInviteInputValue] = useState("");

  const handleInviteInputChange = (e) => {
    setInviteInputValue(e.target.value);
  };

  const handleInviteAdd = () => {
    if (inviteInputValue && !inviteEmails.includes(inviteInputValue)) {
      setInviteEmails([...inviteEmails, inviteInputValue]);
      setInviteInputValue("");
    }
  };

  const handleInviteRemove = (email) => {
    const updatedEmails = inviteEmails.filter((item) => item !== email);
    setInviteEmails(updatedEmails);
  };

  const handleCreateProjectModalOpen = () => {
    setCreateProjectModalVisible(true);
  };

  const handleCreateProjectModalClose = () => {
    setCreateProjectModalVisible(false);
  };

  const handleCreateProject = (values) => {
    console.log("Received project values:", values);
    handleCreateProjectModalClose();
  };

  const handleCreateModalOpen = () => {
    setCreateModalVisible(true);
  };

  const handleCreateModalClose = () => {
    setCreateModalVisible(false);
  };

  const handleCreateTask = (values) => {
    console.log("Received values:", values);
    handleCreateModalClose();
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<FileAddOutlined />} key="1"  onClick={handleCreateModalOpen} >Create Task</Menu.Item>
      <Menu.Item icon={<ProjectOutlined />} key="2" onClick={handleCreateProjectModalOpen}>Create Project</Menu.Item>
      <Menu.Item icon={<UsergroupAddOutlined />} key="3">Invite</Menu.Item>
      <Menu.Item icon={<MessageOutlined />} key="4">Message</Menu.Item>
    </Menu>
  );

  return (
    <Header className="bg-blue-400 fixed top-0 left-0 right-0 z-10 ">
      <div className="flex items-center justify-between mx-auto h-full">
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "2rem" }} />}
        />

        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="primary" className="ml-24 mr-4 rounded-lg border border-black bg-white text-black">
            Create
          </Button>
        </Dropdown>
        <div className="flex items-center justify-center flex-grow">
          <Search
            placeholder="Search..."
            className="w-full max-w-2xl bg-white"
          />
        </div>
        <Avatar
          size={32}
          src="https://demoda.vn/wp-content/uploads/2022/04/hinh-cute-cho-dien-thoai-iphone.jpg"
          className="ml-4"
        />
      </div>
      <CreateTaskModal
        visible={isCreateModalVisible}
        onClose={handleCreateModalClose}
        onCreateTask={handleCreateTask}
      />
      <Modal
        title="Create Project"
        visible={isCreateProjectModalVisible}
        onCancel={handleCreateProjectModalClose}
        footer={null}
      >
        <Form onFinish={handleCreateProject}>
          <Form.Item
            name="projectName"
            rules={[
              { required: true, message: "Please enter the project name!" },
            ]}
          >
            <Input placeholder="Project Name" />
          </Form.Item>

          <Form.Item
            name="privacy"
            rules={[
              { required: true, message: "Please select the privacy option!" },
            ]}
          >
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="description"
            
            rules={[
              { message: "Please enter the description!" },
            ]}
          >
            <Input.TextArea placeholder="Description" rows={4} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Input.Group compact>
              <Form.Item
                name="inviteEmail"
                rules={[
                  {  message: "Please enter an email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Email"
                  value={inviteInputValue}
                  onChange={handleInviteInputChange}
                />
              </Form.Item>
              <Button
                type="primary"
                icon={<PlusCircleOutlined className="bg-blue-500"/>}
                onClick={handleInviteAdd}
                className="bg-blue-500"
              />
            </Input.Group>
          </Form.Item>

          <Form.Item>
            <div>
              {inviteEmails.map((email) => (
                <Tag
                  key={email}
                  closable
                  onClose={() => handleInviteRemove(email)}
                >
                  {email}
                </Tag>
              ))}
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Header>
  );
};

export default Navbar;
