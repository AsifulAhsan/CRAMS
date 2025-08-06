import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import HeroSec from "./components/HeroSection/Hero";
import Card from "./components/Card/Card";
import CourseTable from "./components/CourseTable/CourseTable";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <div className="flex flex-col">
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
          <CourseTable />
        </div>
      </div>
    </>
  );
}
export default App;
