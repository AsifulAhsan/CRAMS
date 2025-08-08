import React from "react";
import { CalendarDays, User, Search } from "lucide-react";

function AdvisorNotes() {
  return (
    <div className="flex mx-2 my-2">
      <div className="flex-col">
        <h1 className="text-3xl font-medium">Advisor Notes</h1>
        <p className="text-gray-600">
          View notes and recommendations from your academic advisors.
        </p>
        <div className="flex flex-col gap-2 border border-gray-300 bg-white rounded-lg mt-4 px-6 py-4 justify-start w-275">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-4 justify-center text-xl font-medium">
              Course Selection for Fall 2024{" "}
              <button className="bg-red-100 text-red-500 text-sm px-3 text-center items-center rounded-2xl">
                High Priority
              </button>
              <button className="bg-red-100 text-red-500 text-sm px-3 text-center items-center rounded-2xl">
                ! Action Required
              </button>
            </h1>
            <button className="border border-gray-300 px-4 rounded-sm font-semibold cursor-pointer hover:bg-[#035f64] hover:text-white bg-emerald-700 text-white">
              View Details
            </button>
          </div>

          <div className="flex gap-4 text-gray-600 mt-2">
            <User />
            <p>Prof. Ahmed Ullah</p>
            <div className="flex ml-20 gap-2">
              <CalendarDays />
              <p className="mr-30">2024-08-15</p>
            </div>
          </div>
          <div className="flex gap-8 text-black text-lg mt-4">
            <p>
              Student needs to select electives for the upcoming semester.
              Recommend taking CS301 (Database Systems) and CS302 (Software
              Engineering) to stay on track for graduation. Schedule a follow-up
              meeting to finalize course selection.
            </p>
          </div>
          <div className="flex gap-4 border border-gray-300 py-3 px-2 rounded-md bg-amber-100">
            <CalendarDays />
            <p>Follow-up scheduled for 2024-08-20</p>
          </div>
          <div className="flex justify-start gap-6">
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              course-planning
            </p>
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              graduation-track
            </p>
          </div>
        </div> {/*xxx*/}
        <div className="flex flex-col gap-2 border border-gray-300 bg-white rounded-lg mt-4 px-6 py-4 justify-start w-275">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-4 justify-center text-xl font-medium">
              Mid-Semester Progress Review{" "}
              <button className="bg-yellow-100 text-orange-500 text-sm px-3 text-center items-center rounded-2xl">
                Medium Priority
              </button>
              <button className="bg-green-100 text-emerald-500 text-sm px-3 text-center items-center rounded-2xl">
                √ Completed
              </button>
            </h1>
            <button className="border border-gray-300 px-4 rounded-sm font-semibold cursor-pointer hover:bg-[#035f64] hover:text-white bg-emerald-700 text-white">
              View Details
            </button>
          </div>

          <div className="flex gap-4 text-gray-600 mt-2">
            <User />
            <p>Prof. Mohammad Rahman</p>
            <div className="flex ml-20 gap-2">
              <CalendarDays />
              <p className="mr-30">2024-08-15</p>
            </div>
          </div>
          <div className="flex gap-8 text-black text-lg mt-4">
            <p>
              Student needs to select electives for the upcoming semester.
              Recommend taking CS301 (Database Systems) and CS302 (Software
              Engineering) to stay on track for graduation. Schedule a follow-up
              meeting to finalize course selection.
            </p>
          </div>
          
          <div className="flex justify-start gap-6">
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              course-planning
            </p>
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              graduation-track
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-300 bg-white rounded-lg mt-4 px-6 py-4 justify-start w-275">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-4 justify-center text-xl font-medium">
              Internship Preparation{" "}
              <button className="bg-yellow-100 text-orange-500 text-sm px-3 text-center items-center rounded-2xl">
                Medium Priority
              </button>
              <button className="bg-yellow-100 text-orange-500 text-sm px-3 text-center items-center rounded-2xl">
                Ο In Progress
              </button>
            </h1>
            <button className="border border-gray-300 px-4 rounded-sm font-semibold cursor-pointer hover:bg-[#035f64] hover:text-white bg-emerald-700 text-white">
              View Details
            </button>
          </div>

          <div className="flex gap-4 text-gray-600 mt-2">
            <User />
            <p>Dr. Sarah Ahmed</p>
            <div className="flex ml-20 gap-2">
              <CalendarDays />
              <p className="mr-30">2024-08-15</p>
            </div>
          </div>
          <div className="flex gap-8 text-black text-lg mt-4">
            <p>
              Student needs to select electives for the upcoming semester.
              Recommend taking CS301 (Database Systems) and CS302 (Software
              Engineering) to stay on track for graduation. Schedule a follow-up
              meeting to finalize course selection.
            </p>
          </div>
          
          <div className="flex justify-start gap-6">
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              course-planning
            </p>
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              graduation-track
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-300 bg-white rounded-lg mt-4 px-6 py-4 justify-start w-275">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-4 justify-center text-xl font-medium">
              Study Group Formation{" "}
              <button className="bg-green-100 text-emerald-500 text-sm px-3 text-center items-center rounded-2xl">
                Low Priority
              </button>
              <button className="bg-green-100 text-emerald-500 text-sm px-3 text-center items-center rounded-2xl">
                √ Completed
              </button>
            </h1>
            <button className="border border-gray-300 px-4 rounded-sm font-semibold cursor-pointer hover:bg-[#035f64] hover:text-white bg-emerald-700 text-white">
              View Details
            </button>
          </div>

          <div className="flex gap-4 text-gray-600 mt-2">
            <User />
            <p>Dr. Sarah Ahmed</p>
            <div className="flex ml-20 gap-2">
              <CalendarDays />
              <p className="mr-30">2024-08-15</p>
            </div>
          </div>
          <div className="flex gap-8 text-black text-lg mt-4">
            <p>
              Student needs to select electives for the upcoming semester.
              Recommend taking CS301 (Database Systems) and CS302 (Software
              Engineering) to stay on track for graduation. Schedule a follow-up
              meeting to finalize course selection.
            </p>
          </div>
          
          <div className="flex justify-start gap-6">
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              course-planning
            </p>
            <p className="w-30 text-center rounded-md font-semibold text-xs mt-2 p-2 bg-gray-200">
              graduation-track
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisorNotes;
