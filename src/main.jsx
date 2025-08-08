import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseManage from "./components/CourseManage/CourseManage.jsx";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import AdvisorPanel from "./components/Advisor/AdvisorPanel";
import AdvisorNotes from "./components/AdvisorNotes/AdvisorNotes.jsx";
import AcadHistory from "./components/AcadHistory/AcadHistory.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "/", element: <StudentDashboard /> },
      { path: "/course-manage", element: <CourseManage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/advisor-notes", element: <AdvisorNotes /> },
      { path: "/acad-history", element: <AcadHistory /> },
    ],
  },
  {
    path: "/advisor",
    element: <AdvisorPanel />,
    // children: [
    //   { path: "/", element: <StudentDashboard /> },
    //   { path: "/course-manage", element: <CourseManage /> },
    //   { path: "/admin", element: <AdminPage /> },
    //   { path: "/advisor", element: <AdvisorPanel /> },
    // ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
