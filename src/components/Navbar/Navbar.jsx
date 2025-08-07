import { Code, Bell, CircleUserRound } from "lucide-react";
import styles from "../Navbar/Navbar.module.css";
function Navbar() {
  return (
    <div className="fixed w-full flex gap-4 justify-between pt-2 px-4 bg-white border-2 border-gray-200">
      <div className="flex p-4 gap-2 items-center">
        <Code color="green" size="32" />
        <h1 className="text-2xl">IIUC Student Panel</h1>
      </div>
      <div className="flex gap-8 items-center">
        <button className={styles.navBtn}>Home</button>
        <button className={styles.navBtn}>Courses</button>
        <button className={styles.navBtn}>Advising</button>
      </div>
      <div className="flex gap-6 p-4 items-center">
        <Bell className={styles.navBtn} />
        <CircleUserRound className={styles.navBtn} />
      </div>
    </div>
  );
}
export default Navbar;
