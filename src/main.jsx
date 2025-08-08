import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./components/Auth/Authentication";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import App from "./App.jsx";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import AdvisorPanel from "./components/Advisor/AdvisorPanel.jsx";
import CourseManage from "./components/CourseManage/CourseManage.jsx";
import AcadHistory from "./components/AcadHistory/AcadHistory.jsx";
import AdvisorNotes from "./components/AdvisorNotes/AdvisorNotes.jsx";
import UserManage from "./components/AdminPage/UserManage.jsx";

// Create router with basic routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <StudentDashboard /> },
      { path: "/dashboard/courses", element: <CourseManage /> },
      { path: "/dashboard/academic-history", element: <AcadHistory /> },
      { path: "/dashboard/advisor-notes", element: <AdvisorNotes /> },
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

// Add error handling for root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  document.body.innerHTML =
    '<div style="color: red; padding: 20px;">Error: Root element not found!</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StrictMode>
    );
  } catch (error) {
    rootElement.innerHTML = `<div style="color: red; padding: 20px;">React Error: ${error.message}</div>`;
  }
}
