import React from "react";
import styles from "./Sidebar.module.css";
import { NotepadText, ListChecks, StickyNote, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed mt-18 w-70 h-screen bg-white border-r-1 border-gray-200">
      <ul>
        <Link to="/">
          <li className={styles.list}>
            <NotepadText />
            Student Dashboard
          </li>
        </Link>
        <Link to="/course-manage">
          <li className={styles.list}>
            <ListChecks />
            Course Management
          </li>
        </Link>
        <Link to="/acad-history">
          <li className={styles.list}>
            <StickyNote />
            Academic History
          </li>
        </Link>
        <Link to="/advisor-notes">
          <li className={styles.list}>
            <UserCheck />
            Advisor Notes
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Sidebar;
