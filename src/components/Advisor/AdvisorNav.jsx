import styles from "./AdvisorNav.module.css";
import { Bell, CircleUserRound, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AdvisorNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdvisorNav;
