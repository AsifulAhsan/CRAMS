import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseManage from "./components/CourseManage/CourseManage.jsx";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <StudentDashboard /> },
      { path: "/course-manage", element: <CourseManage /> },
      { path: "/admin", element: <AdminPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
