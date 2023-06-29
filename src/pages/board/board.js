import { useState } from 'react';
import { Layout, Card, Modal, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Board = () => {
  const [reviewTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Review Task ${index + 1}`,
  })));

  const [supportTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Support Task ${index + 1}`,
  })));

  const [recentlyAssignedTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Recently Assigned Task ${index + 1}`,
  })));

  const [doTodayTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Do Today Task ${index + 1}`,
  })));

  const [doThisWeekTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Do This Week Task ${index + 1}`,
  })));

  const [doThisMonthTasks, setDoThisMonthTasks] = useState(Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Do This Month Task ${index + 1}`,
  })));

  const [sections, setSections] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sectionName, setSectionName] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (sectionName) {
      const newSection = {
        id: sections.length + 1,
        name: sectionName,
      };

      setSections([...sections, newSection]);
      setSectionName('');
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSectionName('');
  };

  return (
    <Layout>
      <Content className="p-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Review</h2>
            <div className="h-96 overflow-y-scroll">
              {reviewTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <div className="h-96 overflow-y-scroll">
              {supportTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Recently Assigned</h2>
            <div className="h-96 overflow-y-scroll">
              {recentlyAssignedTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Do Today</h2>
            <div className="h-96 overflow-y-scroll">
              {doTodayTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Do This Week</h2>
            <div className="h-96 overflow-y-scroll">
              {doThisWeekTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Do This Month</h2>
            <div className="h-96 overflow-y-scroll">
              {doThisMonthTasks.map((task) => (
                <Card key={task.id} className="mb-4">{task.title}</Card>
              ))}
              
            </div>
          </div>
          
              {sections.map((section) => (
                    <div className="col-span-1">
                    <h2 className="text-lg font-bold mb-4">
                <div key={section.id} className="flex justify-center items-center">
                  {section.name}
                </div>
                </h2>
            <div className="h-96 overflow-y-scroll">
             
                <Card className="mb-4">{}</Card>
             
              
            </div></div>
              ))}
            
          
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">
            <div className="flex justify-center items-center">
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={showModal}
                >
                  <PlusOutlined /> Add Section
                </span>
              </div>
            </h2>
          </div>
        </div>
        <Modal
          title="Add Section"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
        >
          <Space direction="vertical" size="large">
            <Input
              placeholder="Section Name"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
          </Space>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Board;
