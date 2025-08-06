import React from "react";
import styles from "../sidebar/Sidebar.module.css";
function Sidebar(){

    return(
        <div>
            <div className="w-50 h-screen bg-[#ffff] shadow-md">
                <ul>
                    <li className="subject"><button>Student Dashboard</button></li>
                    <li><button>My Plan</button></li>
                    <li><button>Academic History</button></li>
                    <li><button>Advisor Notes</button></li>
                </ul>
                <p>Hello</p>
            </div>
            
        </div>


    );
}
export default Sidebar;