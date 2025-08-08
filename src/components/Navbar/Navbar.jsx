import { Code, Bell, CircleUserRound } from "lucide-react";
import styles from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed w-full flex gap-4 justify-between pt-2 px-4 bg-white border-2 border-gray-200">
      <div className="flex p-4 gap-2 items-center">
        <Code color="green" size="32" />
        <h1 className="text-2xl">IIUC Student Panel</h1>
      </div>
      <div className="flex gap-8 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navBtn} ${styles.navBg} ${styles.active}`
              : styles.navBtn
          }
        >
          Home
        </NavLink>
        <NavLink to="/courses"
          className={({ isActive }) =>
            isActive
              ? `${styles.navBtn} ${styles.navBg} ${styles.active}`
              : styles.navBtn
          }
        >
          Courses
        </NavLink>
        <NavLink to="/advising"
          className={({ isActive }) =>
            isActive
              ? `${styles.navBtn} ${styles.navBg} ${styles.active}`
              : styles.navBtn
          }
        >
          Advising
        </NavLink>
      </div>
      <div className="flex gap-6 p-4 items-center">
        <Bell className={styles.navBtn} />
        <CircleUserRound className={styles.navBtn} />
      </div>
    </div>
  );
}
export default Navbar;
