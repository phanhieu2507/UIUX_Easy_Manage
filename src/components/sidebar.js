import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('1');

  useEffect(() => {
    const path = location.pathname;

    if (path === '/home') {
      setSelectedKey('1');
    } else if (path === '/tasks') {
      setSelectedKey('2');
    } else if (path === '/hustlab') {
      setSelectedKey('4');
    } else if (path === '/uiux') {
      setSelectedKey('5');
    } else if (path === '/sunasterisk') {
      setSelectedKey('6');
    }
  }, [location]);

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const handleHomeClick = () => {
    navigate('/home');
    handleMenuClick('1');
  };

  const handleTaskClick = () => {
    navigate('/tasks');
    handleMenuClick('2');
  };

  const handleHustLabClick = () => {
    navigate('/hustlab');
    handleMenuClick('4');
  };

  const handleUIUXClick = () => {
    navigate('/uiux');
    handleMenuClick('5');
  };

  const handleSunAsteriskClick = () => {
    navigate('/sunasterisk');
    handleMenuClick('6');
  };

  return (
    <Sider width={200} theme="light" style={{ height: '100vh' }} className="bg-blue-400">
      <div className="logo" />
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ height: '100%' }}
        className="bg-blue-400 fixed top-16 left-0 w-60"
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={handleHomeClick}
          style={selectedKey === '1' ? { background: '#1890ff', color: '#fff' } : null}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CheckCircleOutlined />}
          onClick={handleTaskClick}
          style={selectedKey === '2' ? { background: '#1890ff', color: '#fff' } : null}
        >
          Tasks
        </Menu.Item>
        <Menu.SubMenu
          key="3"
          icon={<AppstoreOutlined />}
          title="Projects"
          popupClassName="bg-blue-400"
        >
          <Menu.Item key="4" onClick={handleHustLabClick}>
            Hust Lab
          </Menu.Item>
          <Menu.Item key="5" onClick={handleUIUXClick}>
            UIUX
          </Menu.Item>
          <Menu.Item key="6" onClick={handleSunAsteriskClick}>
            Sun*Asterisk
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
