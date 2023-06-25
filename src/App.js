import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Task from "./pages/task/task";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
