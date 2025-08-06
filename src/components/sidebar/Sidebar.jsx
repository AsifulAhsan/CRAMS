import React from "react";
import styles from "./Sidebar.module.css";
import {NotepadText,ListChecks,StickyNote,UserCheck} from "lucide-react"
function Sidebar(){

    return(
        <div className="w-70 h-screen bg-white">
            <ul>
                <li className={styles.list}><NotepadText /><button>Student Dashboard</button></li>
                <li className={styles.list}><ListChecks /><button>My Plan</button></li>
                <li className={styles.list}><StickyNote /><button>Academic History</button></li>
                <li className={styles.list}><UserCheck /><button>Advisor Notes</button></li>
                
            </ul>
        </div>


    );
}
export default Sidebar;
