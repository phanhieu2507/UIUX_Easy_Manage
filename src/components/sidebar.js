import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} theme="light" style={{ height: '100vh' }} className='bg-blue-400'>
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }} className='bg-blue-400'>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckCircleOutlined />}>
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
