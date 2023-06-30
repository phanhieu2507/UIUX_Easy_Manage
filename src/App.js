import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Task from "./pages/task/task";
import TaskCalendar from "./pages/calendar/calendar";
import HustLab from "./pages/hustlab/hustlab";
import Board from "./pages/board/board";
import Sun from "./pages/sun/sun";
import UIUX from "./pages/uiux/uiux";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/hustlab" element={<HustLab />} />
        <Route path="/board" element={<Board />} />
        <Route path="/tasks/board" element={<TaskCalendar />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="sunasterisk" element={<Sun />} />
      </Routes>
    </div>
  );
}

export default App;
