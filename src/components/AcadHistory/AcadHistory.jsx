import React from "react";
import { Download } from "lucide-react";
import Card from "./../Card/Card";
function AcadHistory() {
  return (
    <>
      <div className="flex max-w-full m-4 gap-100">
        <div className="flex-col">
          <h1 className="text-3xl font-medium">Academic History</h1>
          <p className="text-gray-600">
            View your complete academic record and progress toward graduation.
          </p>
        </div>
        <div className="items-center">
          <button className="gap-2 flex items-center bg-white text-black border-gray-300 border-1 px-4 py-2 rounded-md hover:bg-[#035f64] hover:text-white cursor-pointer transition-colors duration-200">
            <Download size="18" />
            <p className="text-sm">Download Transcript</p>
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <Card
          title="Cumulative GPA"
          subtitle="3.67 Points"
          description="+0.15 from last semester"
        />
        <Card
          title="Total Credits"
          subtitle="67 Hours"
          description="53 more needed"
        />
        <Card
          title="Completed Courses"
          subtitle="12"
          description="Across 3 semesters"
        />
        <Card
          title="Expected Graduation"
          subtitle="Spring 2026"
          description="On Track"
        />
      </div>
      <table className="flex justify-between mx-4 bg-white p-4 rounded-xl border-1 border-gray-200">
        <div className="flex-col mx-4 my-2 w-full"> {/*First Col*/}
            <p className="text-xl mb-8 ">Course Code</p>
            <p className="mt-4 mb-8">CS101</p>
            <p className=" mb-8">EC101</p>
            <p className=" mb-8">MA101</p>
            <p className=" mb-8">EN101</p>
            <p className=" mb-8">HI101</p>
        </div>
        <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Course title</p>
            <p className="mt-4 mb-8">Programming 1</p>
            <p className=" mb-8">Microeconomics</p>
            <p className=" mb-8">Calculus 1</p>
            <p className=" mb-8">Composition 1</p>
            <p className=" mb-8">History Teaching 1</p>
        </div>
        <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Instructor</p>
            <p className="mt-4 mb-8">Md. Ali Khan</p>
            <p className=" mb-8">Rina Begum</p>
            <p className=" mb-8">Mohammad Rashedul Islam</p>
            <p className=" mb-8">Jamal Assad</p>
            <p className=" mb-8">Shariar Mohammad Aqib</p>
        </div>
        <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Credits</p>
            <p className="mt-4 mb-8">3</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">4</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">2</p>
        </div>
      </table>
    </>
  );
}

export default AcadHistory;
