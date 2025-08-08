import React from "react";
import HeroSec from "../HeroSection/Hero";
import Card from "../Card/Card";
import CourseTable from "../CourseTable/CourseTable";
import {
  CalendarFold,
  Send,
  Download,
  UserStar,
  CircleUser,
} from "lucide-react";

function StudentDashboard() {
  console.log("StudentDashboard component rendered");

  return (
    <>
      <HeroSec />
      <div className="flex">
        <Card
          title="Current CGPA"
          subtitle="3.67"
          description="+0.12 from last semester"
        />
        <Card title="Credits" subtitle="67" description="53 more needed" />
        <Card
          title="Plan Status"
          subtitle="Pending"
          description="Awaiting advisor review"
        />
        <Card
          title="Next Semester"
          subtitle="AUT '25"
          description="Registrition opens soon"
        />
      </div>
      <div className="flex flex-col gap-8 px-8 py-8 justify-evenly items-start border-1 bg-white border-gray-300 mx-4 rounded-xl">
        <div className="flex gap-8 items-center">
          <UserStar size={24} />
          <p className="text-lg font-medium">Your Academic Advisor</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-6 items-start mr-90">
            <CircleUser size={34} color="#035f64" />
            <p className="text-xl font-medium">
              Prof. Salah Uddin <br />
              <p className="text-sm font-normal">Computer Science Department</p>
              <p className="text-sm font-normal">salah.ahmed@iiuc.ac.bd</p>
            </p>
          </div>
          <div className="flex items-center">
            <button className="gap-2 flex items-center bg-white text-black border-gray-300 border-1 px-4 py-2 rounded-md hover:bg-[#035f64] hover:text-white cursor-pointer transition-colors duration-200">
              <Send />
              <p className="text-sm">Message Advisor</p>
            </button>
          </div>
          <div className="flex items-center">
            <button className="gap-2 flex items-center bg-white text-black border-gray-300 border-1 px-4 py-2 rounded-md hover:bg-[#035f64] hover:text-white cursor-pointer transition-colors duration-200">
              <CalendarFold />
              <p className="text-sm">Schedule Meeting</p>
            </button>
          </div>
        </div>
      </div>

      <CourseTable />
    </>
  );
}

export default StudentDashboard;
