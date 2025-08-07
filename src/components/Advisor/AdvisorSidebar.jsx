import React from 'react';
import styles from "./AdvisorSidebar.module.css"
import{UserRound,} from "lucide-react"

const AdvisorSidebar = () => {
    return (
        <div className="fixed w-70 h-screen bg-white">
      <ul>
        <li className={styles.list}>
          <UserRound />
          <button>Shahriar Mohammad Aqib</button>
        </li>
        <li className={styles.list}>
          <UserRound />
          <button>Mohammad Imrun Abid</button>
        </li>
        <li className={styles.list}>
          <UserRound />
          <button>Md Asiful Ahsan Wasif</button>
        </li>
        <li className={styles.list}>
          <UserRound />
          <button>Muhammad Hossain</button>
        </li>
      </ul>
    </div>
    );
};

export default AdvisorSidebar;