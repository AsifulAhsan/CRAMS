import { User } from "lucide-react";

function AdvisorSidebar() {
  return (
    <div className="fixed left-0 top-19 w-72 h-screen bg-white border-r border-gray-200 z-10">
      <div className="p-4 border-b border-gray-100">
        <input
          type="text"
          placeholder="Search students"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-2">
          <li className="flex items-center gap-3 px-4 py-3 bg-[#d9d9d9] cursor-pointer">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div className="font-semibold text-gray-900">
                Shariar Mohammad Aqib
              </div>
              <div className="text-xs text-gray-500">ID: 1234567</div>
            </div>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-[#393E46] hover:text-white cursor-pointer group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User
                className="text-gray-400 group-hover:text-white"
                size={28}
              />
            </span>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-white">
                Asiful Ahsan Wasif
              </div>
              <div className="text-xs text-gray-500 group-hover:text-white">
                ID: 7654321
              </div>
            </div>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-[#393E46] hover:text-white cursor-pointer group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User
                className="text-gray-400 group-hover:text-white"
                size={28}
              />
            </span>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-white">
                Mohammad Hossain Bhai
              </div>
              <div className="text-xs text-gray-500 group-hover:text-white">
                ID: 9876543
              </div>
            </div>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-[#393E46] hover:text-white cursor-pointer group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User
                className="text-gray-400 group-hover:text-white"
                size={28}
              />
            </span>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-white">
                Abdullah Al Mahfuz
              </div>
              <div className="text-xs text-gray-500 group-hover:text-white">
                ID: 3456789
              </div>
            </div>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-[#393E46] hover:text-white cursor-pointer group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User
                className="text-gray-400 group-hover:text-white"
                size={28}
              />
            </span>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-white">
                Mohammad Imrun Abid
              </div>
              <div className="text-xs text-gray-500 group-hover:text-white">
                ID: 5678901
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdvisorSidebar;
