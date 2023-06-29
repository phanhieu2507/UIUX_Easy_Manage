import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Task from "./pages/task/task";
import TaskCalendar from "./pages/calendar/calendar";
import HustLab from "./pages/hustlab/hustlab";
import Board from "./pages/board/board";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/tasks/calendar" element={<TaskCalendar />} />
        <Route path="/hustlab" element={<HustLab />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
