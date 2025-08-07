import React from "react";

function CourseManage() {
  return (
    <div className="mx-4 my-2">
      <p className="text-4xl font-medium">Course Management</p>
      <table className="flex gap-12 mt-8 mb-4 bg-white p-8 rounded-xl border-1 border-gray-200">
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Course</p>
            <p className="mt-4 mb-8">CS101</p>
            <p className=" mb-8">EC101</p>
            <p className=" mb-8">MA101</p>
            <p className=" mb-8">EN101</p>
            <p className=" mb-8">HI101</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Faculty</p>
            <p className="mt-4 mb-8">Programming 1</p>
            <p className=" mb-8">Microeconomics</p>
            <p className=" mb-8">Calculus 1</p>
            <p className=" mb-8">Composition 1</p>
            <p className=" mb-8">History Teaching 1</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Schedule</p>
            <p className="mt-4 mb-8">Md. Ali Khan</p>
            <p className=" mb-8">Rina Begum</p>
            <p className=" mb-8">Mohammad Rashedul Islam</p>
            <p className=" mb-8">Jamal Assad</p>
            <p className=" mb-8">Shariar Mohammad Aqib</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Occupency</p>
            <p className="mt-4 mb-8">3</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">4</p>
            <p className=" mb-8">3</p>
            <p className=" mb-8">2</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-8">Status</p>
            <p className="mt-4 mb-8">25/30</p>
            <p className=" mb-8">23/30</p>
            <p className=" mb-8">15/30</p>
            <p className=" mb-8">28/30</p>
            <p className=" mb-8">24/30</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="gap-2">
            <p className="text-xl mb-2">Actions</p>
            <button className="mt-4 mb-4 bg-[#b50000] text-white px-2 py-2 rounded-md">
              Drop
            </button>
          </div>
          <button className="mb-4 bg-[#b50000] text-white px-2 py-2 rounded-md">
            Drop
          </button>
          <div>
            <button className="mb-4 bg-[#b50000] text-white px-2 py-2 rounded-md">
              Drop
            </button>
          </div>
          <div>
            <button className="mb-4 bg-[#b50000] text-white px-2 py-2 rounded-md">
              Drop
            </button>
          </div>
          <div>
            <button className="mb-4 bg-[#b50000] text-white px-2 py-2 rounded-md">
              Drop
            </button>
          </div>
        </div>
      </table>
    </div>
  );
}

export default CourseManage;
