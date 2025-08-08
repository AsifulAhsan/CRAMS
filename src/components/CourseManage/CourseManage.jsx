import { Clock10, MapPin, User, Search } from "lucide-react";

function CourseManage() {
  return (
    <div className="mx-4 my-2">
      <p className="text-3xl font-bold">Computer Science Courses</p>
      <p className="text-gray-600 text-md mt-2">
        View all courses in your enrolled department and track your progress.
      </p>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-3 items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md mt-4">
          {/*SEARCH BOX!!!*/}
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, instructors...."
            className="bg-transparent text-black placeholder-gray-400 text-sm focus:outline-none w-full"
          />
        </div>
        <select className="mt-4 w-60 border-2 rounded-lg px-6 py-4 focus:outline-none focus:ring-1 bg-white focus:ring-[#035f64] focus:border-transparent border-gray-300 text-sm text-black">
          <option className="text-sm">All Semester</option>
          <option className="text-sm">Fall Semester</option>
          <option className="text-sm">Spring Semester</option>
          <option className="text-sm">Autumn Semester</option>
          <option className="text-sm">Summer Semester</option>
        </select>
      </div>

      <div className="flex flex-col px-8 py-6 border border-gray-300 bg-white rounded-lg mt-8">
        <h1 className="text-lg font-medium">Course List</h1>
        <div className="flex flex-col gap-2 border border-gray-300 bg-white rounded-lg mt-4 p-8 justify-start">
          <h1 className="text-xl font-medium">CS101</h1>
          <p className="font-sans font-semibold">Programming Fundamentals</p>
          <div className="flex gap-4 text-gray-600">
            <User />
            <p>Prof. Ahmed Ullah</p>
            <div className="flex ml-50 gap-2">
              <Clock10 />
              <p className="mr-30">Mon, Wed, Fri 9:00-10:00 AM</p>
              <MapPin />
              <p>Room 201, CS Building</p>
            </div>
          </div>
          <div className="flex gap-8 text-gray-600">
            <p>Semester: Spring 2024</p>
            <p>Credits: 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManage;
