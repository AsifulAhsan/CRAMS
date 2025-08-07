import React from 'react';
import styles from "../Advisor/AdvisorNav.module.css";
import{CircleUser,} from "lucide-react"

const AdvisorNav = () => {
    return (
        <div>
            <nav className='flex p-5 bg-white shadow w-full gap-7'>
                <div>
                    <h3>Advisor Panel</h3>
                </div>
                <div className='ml-100 flex gap-10'>
                    <button className={styles.Navbtn}>Students</button>
                    <button className={styles.Navbtn}>Pending Approval</button>

                </div>
                <div className='ml-80 flex gap-4'>
                    <button className={styles.Navbtn}></button>
                    <button className={styles.Navbtn}><CircleUser /></button>
                </div>
            </nav>
        </div>
    );
};

export default AdvisorNav;