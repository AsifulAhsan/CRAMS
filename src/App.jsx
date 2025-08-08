import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAuth } from "./contexts/AuthContext";
import { Outlet } from "react-router-dom";

function App() {
  const { userRole } = useAuth();

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2">
        {/* Only show sidebar for students */}
        {userRole === "student" && <Sidebar />}
        <div
          className={`flex flex-col ml-70 mt-20 w-full ${
            userRole !== "student" ? "ml-0" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
