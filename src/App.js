import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
function App() {
  return (
    <div>
       
      <Routes>

  
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        
      </Routes>

    </div>
  );
}

export default App;
