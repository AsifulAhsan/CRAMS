import styles from "./AdvisorNav.module.css";
import { Bell, CircleUserRound } from "lucide-react";

function AdvisorNav() {
  return (
    <div
      className={`fixed w-full flex justify-between pt-2 px-4 bg-white shadow-md top-0 z-10`}
    >
      <div className="flex p-4 gap-2">
        <h1 className="text-3xl font-bold">IIUC Advisor Panel</h1>
      </div>
      <div className="flex gap-6 p-4">
        <Bell className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
        <CircleUserRound className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
      </div>
    </div>
  );
}

export default AdvisorNav;
