import React from "react";
import styles from "./Sidebar.module.css";
import { NotepadText, ListChecks, StickyNote, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed mt-19 w-70 h-screen bg-white">
      <ul>
        <li className={styles.list}>
          <NotepadText />
          <Link to="/">Student Dashboard</Link>
        </li>
        <li className={styles.list}>
          <ListChecks />
          <Link to="/course-manage">Course Management</Link>
        </li>
        <li className={styles.list}>
          <StickyNote />
          <button>Academic History</button>
        </li>
        <li className={styles.list}>
          <UserCheck />
          <button>Advisor Notes</button>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
