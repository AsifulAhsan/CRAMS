import React from "react";
import { Download } from "lucide-react";
function AcadHistory() {
  return (
    <div className="">
      <div className="flex-col max-w-full m-4 ">
        <h1 className="text-3xl font-medium">Academic History</h1>
        <p className="text-gray-600">
          View your complete academic record and progress toward graduation.
        </p>
        <div>
          <button className="gap-2 flex items-center bg-white text-black border-gray-300 border-1 px-4 py-2 rounded-md hover:bg-[#035f64] hover:text-white cursor-pointer transition-colors duration-200">
            <Download size="16" />
            <p className="text-sm">Download Transcript</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcadHistory;
