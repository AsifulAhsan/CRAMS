import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CourseManage from "./components/CourseManage/CourseManage";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <div className="flex flex-col ml-70 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
