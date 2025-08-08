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

console.log("🚀 main.jsx: Starting with basic routes...");

// Create router with basic routes
console.log("🔧 Creating router...");
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
    children: [{ path: "/dashboard", element: <StudentDashboard /> }],
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
    path: "/advisor",
    element: (
      <ProtectedRoute requiredRole="advisor">
        <AdvisorPanel />
      </ProtectedRoute>
    ),
  },
]);
console.log("✅ Router created successfully");

// Add error handling for root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found!");
  document.body.innerHTML =
    '<div style="color: red; padding: 20px;">Error: Root element not found!</div>';
} else {
  console.log("✅ Root element found");

  try {
    const root = createRoot(rootElement);
    console.log("✅ React root created");

    root.render(
      <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StrictMode>
    );
    console.log("✅ React app rendered");
  } catch (error) {
    console.error("❌ React rendering failed:", error);
    rootElement.innerHTML = `<div style="color: red; padding: 20px;">React Error: ${error.message}</div>`;
  }
}
