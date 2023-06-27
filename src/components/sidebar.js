import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;


const Sidebar = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
   
        navigate('/home')
    }
    const handleTaskClick = () => {
   
        navigate('/tasks')
    }
  return (
    <Sider width={200} theme="light" style={{ height: '100vh' }} className='bg-blue-400 '>
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }} className='bg-blue-400 fixed top-16 left-0 w-60'>
        <Menu.Item key="1" icon={<HomeOutlined /> } onClick={handleHomeClick}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckCircleOutlined /> } onClick={handleTaskClick}>
          Tasks
        </Menu.Item>
        <Menu.SubMenu key="3" icon={<AppstoreOutlined />} title="Projects">
          <Menu.Item key="4">Hust Lab</Menu.Item>
          <Menu.Item key="5">UIUX</Menu.Item>
          <Menu.Item key="6">Sun*Asterisk</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
