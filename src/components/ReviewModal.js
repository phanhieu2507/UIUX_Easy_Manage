
import React from 'react';
import { Modal, Form, Input, Rate, Tag } from 'antd';

const { TextArea } = Input;

const ReviewModal = ({ visible, onCancel, onOk, task }) => {
const [form] = Form.useForm();

const handleOk = () => {
form
.validateFields()
.then((values) => {
form.resetFields();
onOk(values);
})
.catch((error) => {
console.error('Validation failed:', error);
});
};

return (
<Modal 
okButtonProps={{ style: { backgroundColor: 'blue' } }}
   title="Review Task"
   visible={visible}
   onCancel={onCancel}
   onOk={handleOk}
 >
<Form form={form} layout="vertical">
<Form.Item label="Review" name="Review" initialValue={task?.Review}>
<Input disabled />
</Form.Item>
<Form.Item label="Task" name="Task" initialValue={task?.Task}>
<Input disabled />
</Form.Item>
<Form.Item label="Assignee" name="Assignee" initialValue={task?.Assignee}>
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
<Form.Item label="Comment" name="Comment" initialValue={task?.Comment}>
<TextArea rows={4} />
</Form.Item>
<Form.Item label="Rating" name="Rating" initialValue={task?.Rating}>
<Rate />
</Form.Item>
</Form>
</Modal>
);
};

const getPriorityColor = (priority) => {
switch (priority) {
case 'high':
return 'red';
case 'medium':
return 'yellow';
case 'low':
return 'green';
default:
return 'gray';
}
};

export default ReviewModal;