import { User } from "lucide-react";
import styles from "./AdvisorSidebar.module.css";

function AdvisorSidebar() {
  return (
    <div className="fixed left-0 top-19 w-72 h-screen bg-white border-r border-gray-200 z-10">
      <div className="p-4 border-b border-gray-100">
        <input
          type="text"
          placeholder="Search students"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-2">
          <li className={`${styles.studentItem} ${styles.active}`}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div className={`font-semibold ${styles.studentName}`}>
                Shariar Mohammad Aqib
              </div>
              <div className={`text-xs ${styles.studentId}`}>ID: 1234567</div>
            </div>
          </li>
          <li className={styles.studentItem}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div
                className={`font-semibold text-gray-900 ${styles.studentName}`}
              >
                Asiful Ahsan Wasif
              </div>
              <div className={`text-xs text-gray-500 ${styles.studentId}`}>
                ID: 7654321
              </div>
            </div>
          </li>
          <li className={styles.studentItem}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div
                className={`font-semibold text-gray-900 ${styles.studentName}`}
              >
                Mohammad Hossain Bhai
              </div>
              <div className={`text-xs text-gray-500 ${styles.studentId}`}>
                ID: 9876543
              </div>
            </div>
          </li>
          <li className={styles.studentItem}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div
                className={`font-semibold text-gray-900 ${styles.studentName}`}
              >
                Abdullah Al Mahfuz
              </div>
              <div className={`text-xs text-gray-500 ${styles.studentId}`}>
                ID: 3456789
              </div>
            </div>
          </li>
          <li className={styles.studentItem}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <User className="text-gray-600" size={28} />
            </span>
            <div>
              <div
                className={`font-semibold text-gray-900 ${styles.studentName}`}
              >
                Mohammad Imrun Abid
              </div>
              <div className={`text-xs text-gray-500 ${styles.studentId}`}>
                ID: 5678901
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdvisorSidebar;
