import React from 'react';
import { Layout, Menu, Input, Avatar, Button } from 'antd';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
const { Header } = Layout;
const { Search } = Input;

const Home = () => {
  return (
    <>
   <Navbar/>
   <Sidebar/>
   </>
  );
}

export default Home;
