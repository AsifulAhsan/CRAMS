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
      <div className="flex justify-between items-center bg-[#035f64] text-white mx-4 p-4 rounded-t-xl">
        <h1 className="text-xl ml-4">Spring 2024</h1>
        <div className="flex gap-8 mr-4">
          <p className="text-lg">
            Semester GPA <br />
            3.75
          </p>
          <p className="text-lg">
            Total Credits <br />
            20
          </p>
        </div>
      </div>

      <table className="flex justify-around gap-8 mx-4 mb-4 bg-white p-4 rounded-bl-xl rounded-b-xl border-1 border-gray-200">
          <div className="flex-col mx-4 my-2 w-full">
            {/*First Col*/}
            <p className="text-xl mb-8 ">Course</p>
            <p className="mt-4 mb-8">
              CS101 <br />
              Programming 1
            </p>
            <p className=" mb-8">
              EC101 <br />
              Microeconomics
            </p>
            <p className=" mb-8">
              MA101 <br />
              Calculus 1
            </p>
            <p className=" mb-8">
              EN101 <br />
              English Literature 1
            </p>
            <p className=" mb-8">
              HI101 <br />
              History Teaching 1
            </p>
          </div>
          <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Instructor</p>
            <p className="mt-4 mb-16">Md. Ali Khan</p>
            <p className=" mb-16">Rina Begum</p>
            <p className=" mb-16">Mohammad Rashedul Islam</p>
            <p className=" mb-16">Jamal Assad</p>
            <p className=" mb-16">Shariar Mohammad Aqib</p>
          </div>
          <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Credits</p>
            <p className="mt-4 mb-16">3</p>
            <p className=" mb-16">3</p>
            <p className=" mb-16">4</p>
            <p className=" mb-16">3</p>
            <p className=" mb-16">2</p>
          </div>
          <div className="flex-col mx-4 my-2 w-full">
            <p className="text-xl mb-8 ">Grade</p>
            <p className="mt-4 mb-16">A</p>
            <p className=" mb-16">A-</p>
            <p className=" mb-16">B</p>
            <p className=" mb-16">A+</p>
            <p className=" mb-16">A+</p>
          </div>
      </table>
    </>
  );
}

export default AcadHistory;
