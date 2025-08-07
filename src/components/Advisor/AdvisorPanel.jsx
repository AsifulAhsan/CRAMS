import AdvisorNav from "./AdvisorNav";
import AdvisorSidebar from "./AdvisorSidebar";
import AdvisorHero from "./AdvisorHero";
import { AlertTriangle } from "lucide-react";

export default function AdvisorPanel() {
  return (
    <div className="">
      <AdvisorNav />
      <AdvisorSidebar />
      <div className="flex flex-col ml-72 mt-20">
        <div className="mx-4 my-6">
          <AdvisorHero />

          <div className="bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Proposed Courses (12 Credits)
              </h2>
              <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg">
                <AlertTriangle size={16} />
                <span className="text-sm font-medium">3 Pending Reviews</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Section
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Credits
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Days & Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Instructor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Programming 1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      CS101-01
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      MWF 10:00 AM-10:50 AM
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Md. Ali Khan
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Microeconomics
                      <div className="text-xs text-red-600 mt-1">
                        Conflict: Time overlap with CS101
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      EC101-02
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      MWF 10:00 AM-10:50 AM
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Rina Begum
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Conflict
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Calculus 1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      MA101-01
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">4</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      TTH 2:00 PM-3:15 PM
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Mohammad Rashedul Islam
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Composition 1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      EN101-01
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      MWF 1:00 PM-1:50 PM
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Jamal Assad
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Actions
            </h2>
            <div className="mb-6">
              <textarea
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Add comments or suggestions for the student. e.g., 'Microeconomics conflicts with your Programming class. Please select a different section.'"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button className="px-6 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg font-semibold text-sm hover:bg-gray-50 transition">
                Reject Plan
              </button>
              <button className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold text-sm hover:bg-gray-700 transition">
                Approve Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
