import React from "react";
import styles from "./Sidebar.module.css";
import { NotepadText, ListChecks, StickyNote, UserCheck } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed mt-18 w-70 h-screen bg-white border-r-1 border-gray-200">
      <ul>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : styles.list
          }
        >
          <li>
            <NotepadText />
            Student Dashboard
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/courses"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : styles.list
          }
        >
          <li>
            <ListChecks />
            Course Management
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/academic-history"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : styles.list
          }
        >
          <li>
            <StickyNote />
            Academic History
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/advisor-notes"
          className={({ isActive }) =>
            isActive ? `${styles.list} ${styles.active}` : styles.list
          }
        >
          <li>
            <UserCheck />
            Advisor Notes
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
export default Sidebar;
