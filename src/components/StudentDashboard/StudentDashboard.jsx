import React from "react";
import HeroSec from "../HeroSection/Hero";
import Card from "../Card/Card";
import CourseTable from "../CourseTable/CourseTable";

function StudentDashboard() {
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
      <CourseTable />
    </>
  );
}

export default StudentDashboard;
