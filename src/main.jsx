import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./components/Auth/Authentication";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import CourseManage from "./components/CourseManage/CourseManage.jsx";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import UserManage from "./components/AdminPage/UserManage.jsx";
import AdvisorPanel from "./components/Advisor/AdvisorPanel";
import AdvisorNotes from "./components/AdvisorNotes/AdvisorNotes.jsx";
import AcadHistory from "./components/AcadHistory/AcadHistory.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <StudentDashboard />
      </ProtectedRoute>
    ),
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
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
