import React, { useState } from "react";
import { Modal, Form, Input, Select, Checkbox, DatePicker, TimePicker, Radio, Button } from "antd";

const { Option } = Select;

const CreateTaskModal = ({ visible, onClose, onCreateTask }) => {
    const [form] = Form.useForm();
    const [isUiuxProjectSelected, setUiuxProjectSelected] = useState(false);
    const [isHustLabProjectSelected, setHustLabProjectSelected] = useState(false);
    const [isSunAsteriskProjectSelected, setSunAsteriskProjectSelected] =
      useState(false);
  
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

  const onFinish = (values) => {
    onCreateTask(values);
  };
  const handleCreateTask = () => {
    form.validateFields().then((values) => {
      onCreateTask(values);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };
  return (
    <Modal 
okButtonProps={{ style: { backgroundColor: 'blue' } }}
    title="Create Task"
    visible={visible}
    onCancel={handleCancel}
    footer={null}
  >
    <Form form={form} onFinish={handleCreateTask}>
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
  );
};

export default CreateTaskModal;
