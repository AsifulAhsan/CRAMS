import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Login from "./components/Auth/Login";
import CourseManage from "./components/CourseManage/CourseManage.jsx";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import UserManage from "./components/AdminPage/UserManage.jsx";
import AdvisorPanel from "./components/Advisor/AdvisorPanel";
import AdvisorNotes from "./components/AdvisorNotes/AdvisorNotes.jsx";
import AcadHistory from "./components/AcadHistory/AcadHistory.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "/", element: <StudentDashboard /> },
      { path: "/course-manage", element: <CourseManage /> },
      { path: "/advisor-notes", element: <AdvisorNotes /> },
      { path: "/acad-history", element: <AcadHistory /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedRoute requiredRole="admin">
        <UserManage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/advisor",
    element: (
      <ProtectedRoute requiredRole="advisor">
        <AdvisorPanel />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
