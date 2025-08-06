import { Code, Bell, CircleUserRound } from "lucide-react";
import styles from "../Navbar/Navbar.module.css";
function Navbar() {
  return (
    <div className="flex gap-4 justify-between pt-2 px-4 bg-white shadow-md">
      <div className="flex p-4 gap-2">
        <Code color="green" size="32" />
        <h1 className="text-3xl">IIUC</h1>
      </div>
      <div className="flex gap-8">
        <button className={styles.navBtn}>Dashboard</button>
        <button className={styles.navBtn}>Courses</button>
        <button className={styles.navBtn}>Advising</button>
        <button className={styles.navBtn}>Resources</button>
      </div>
      <div className="flex gap-6 p-4">
        <Bell className={styles.navBtn} />
        <CircleUserRound className={styles.navBtn} />
        <p>hELLOW</p> //comment your codes
      </div>
      <p>exam are close</p>
    </div>
  );
}
export default Navbar;

