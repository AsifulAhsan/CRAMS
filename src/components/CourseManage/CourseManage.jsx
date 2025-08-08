import { Clock10, MapPin, User, Search } from "lucide-react";

function CourseManage() {
  return (
    <div className="mx-4 my-2">
      <p className="text-3xl font-bold">Computer Science Courses</p>
      <p className="text-gray-600 text-md mt-2">
        View all courses in your enrolled department and track your progress.
      </p>
      <div className="flex gap-2 items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md mt-4">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search courses, instructors...."
          className="bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none w-full"
        />
      </div>
      <select className="mt-4 w-60 border-2 rounded-lg px-6 py-4 focus:outline-none focus:ring-1 bg-white focus:ring-[#035f64] focus:border-transparent text-sm">
        <option className="text-sm">All Semester</option>
        <option className="text-sm">Fall Semester</option>
        <option className="text-sm">Spring Semester</option>
        <option className="text-sm">Autumn Semester</option>
        <option className="text-sm">Summer Semester</option>
      </select>

      <div className=""></div>
    </div>
  );
}

export default CourseManage;