import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { currentUser, userRole, loading } = useAuth();

  // Show loading while authentication state is being determined
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#035f64] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not logged in, redirect to login
  if (!currentUser) {
    console.log("No user logged in, redirecting to login");
    return <Navigate to="/" replace />;
  }

  // If no specific role is required, redirect based on user's role
  if (!requiredRole) {
    console.log("No required role specified, checking user role:", userRole);
    switch (userRole) {
      case "admin":
        console.log("User is admin, redirecting to /admin");
        return <Navigate to="/admin" replace />;
      case "advisor":
        console.log("User is advisor, redirecting to /advisor");
        return <Navigate to="/advisor" replace />;
      case "student":
        console.log("User is student, redirecting to /dashboard");
        return <Navigate to="/dashboard" replace />;
      default:
        console.log("Unknown role, redirecting to /dashboard");
        return <Navigate to="/dashboard" replace />;
    }
  }

  // If a specific role is required, check if user has that role
  if (userRole !== requiredRole) {
    console.log(`User role (${userRole}) doesn't match required role (${requiredRole})`);
    // Redirect based on user's actual role
    switch (userRole) {
      case "admin":
        return <Navigate to="/admin" replace />;
      case "advisor":
        return <Navigate to="/advisor" replace />;
      case "student":
        return <Navigate to="/dashboard" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  console.log(`User has required role (${requiredRole}), allowing access`);
  return children;
}
