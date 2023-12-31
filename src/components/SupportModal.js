import React from "react";
import { Modal, Form, Input, Rate, Tag } from "antd";

const { TextArea } = Input;

const SupportModal = ({ visible, onCancel, onOk, task }) => {
   
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onOk(values);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <Modal
      okButtonProps={{ style: { backgroundColor: "blue" } }}
      title="Support Task"
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Support" name="Support" initialValue={task?.Support}>
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Assignee"
          name="Assignee"
          initialValue={task?.Assignee}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item label="User" name="User" initialValue={task?.User}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Project" name="Project" initialValue={task?.Project}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Priority">
          <Tag color={getPriorityColor(task?.Priority.toLowerCase())}>
            {task?.Priority}
          </Tag>
        </Form.Item>
        <Form.Item label="Due Date" name="dueDate" initialValue={task?.dueDate}>
          <Input disabled />
        </Form.Item>
        <Form.Item label="Problem" name="Problem" initialValue={task?.Problem}>
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item
          label="Solve this Problem"
          name="Solve this problem"
          initialValue={task?.solveThisProblem}
        >
          <TextArea rows={2} />
        </Form.Item>
      </Form>
    </Modal>
  );
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
};

export default SupportModal;
