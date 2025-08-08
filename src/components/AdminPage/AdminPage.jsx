import { Pencil, Trash2, Bell, CircleUserRound } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navbar */}
      <div className="fixed w-full flex justify-between pt-2 px-4 bg-white shadow-md top-0 z-10">
        <div className="flex p-4 gap-2">
          <h1 className="text-3xl font-bold">IIUC Admin Panel</h1>
        </div>
        <div className="flex gap-6 p-4">
          <Bell className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
          <CircleUserRound className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-25 px-6 py-10">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-gray-500">
              Manage course offerings and advisor assignments for each semester.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-auto md:min-w-[320px] md:max-w-sm">
              <h2 className="text-xl font-bold mb-4">Add Course to Semester</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Semester</label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1st Semester</option>
                    <option>2nd Semester</option>
                    <option>3rd Semester</option>
                    <option>4th Semester</option>
                    <option>5th Semester</option>
                    <option>6th Semester</option>
                    <option>7th Semester</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Course Name</label>
                  <input className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Course Code</label>
                  <input className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Schedule</label>
                  <input className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Seat Limit</label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="number"
                    min="1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#035f64] text-white rounded-lg py-2 text-sm hover:bg-[#024a4e] transition"
                >
                  Add Course
                </button>
              </form>
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-4">
                Assign Advisor to Semester
              </h2>
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Semester</label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1st Semester</option>
                    <option>2nd Semester</option>
                    <option>3rd Semester</option>
                    <option>4th Semester</option>
                    <option>5th Semester</option>
                    <option>6th Semester</option>
                    <option>7th Semester</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Advisor</label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Dr. Abdullah Al Mahfuz</option>
                    <option>Dr. Shariar Mohammad Aqib</option>
                    <option>Dr. Mohammad Hossain Bhai</option>
                    <option>Dr. Asiful Ahsan Wasif</option>
                    <option>Dr. Mohammad Imran Abid</option>
                  </select>
                </div>
                <button className="bg-[#035f64] text-white rounded-lg px-6 py-2 text-sm hover:bg-[#024a4e] transition md:mb-0 mb-2">
                  Assign Advisor
                </button>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Current Assignments - Autumn 2025
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                          Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                          Course Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                          Teacher
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4">CS101</td>
                        <td className="px-6 py-4">Programming 1</td>
                        <td className="px-6 py-4">Md. Ali Khan</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row gap-2">
                            <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                              <Pencil size={18} />
                            </button>
                            <button className="text-red-600 flex items-center hover:text-red-700 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">EC101</td>
                        <td className="px-6 py-4">Microeconomics</td>
                        <td className="px-6 py-4">Rina Begum</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row gap-2">
                            <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                              <Pencil size={18} />
                            </button>
                            <button className="text-red-600 flex items-center hover:text-red-700 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">MA101</td>
                        <td className="px-6 py-4">Calculus 1</td>
                        <td className="px-6 py-4">Mohammad Rashedul Islam</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row gap-2">
                            <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                              <Pencil size={18} />
                            </button>
                            <button className="text-red-600 flex items-center hover:text-red-700 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">EN101</td>
                        <td className="px-6 py-4">Composition 1</td>
                        <td className="px-6 py-4">Jamal Assad</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row gap-2">
                            <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                              <Pencil size={18} />
                            </button>
                            <button className="text-red-600 flex items-center hover:text-red-700 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">HI101</td>
                        <td className="px-6 py-4">History Teaching 1</td>
                        <td className="px-6 py-4">Shariar Mohammad Aqib</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row gap-2">
                            <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                              <Pencil size={18} />
                            </button>
                            <button className="text-red-600 flex items-center hover:text-red-700 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
