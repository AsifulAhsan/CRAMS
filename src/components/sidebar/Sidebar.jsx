import React from "react";
import styles from "./Sidebar.module.css";
import {NotepadText,} from "lucide-react"
function Sidebar(){

    return(
        <div className="w-70 h-screen bg-gray-50">
            <ul>
                <li className={styles.list}><NotepadText /><button>Student Dashboard</button></li>
                <li className={styles.list}><button>My Plan</button></li>
                <li className={styles.list}><button>Academic History</button></li>
                <li className={styles.list}><button>Advisor Notes</button></li>
                
            </ul>
        </div>


    );
}
export default Sidebar;
