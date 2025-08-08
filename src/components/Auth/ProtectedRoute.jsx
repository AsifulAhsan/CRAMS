import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { currentUser, userRole } = useAuth();

  // If not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If no specific role is required, redirect based on user's role
  if (!requiredRole) {
    switch (userRole) {
      case "admin":
        return <Navigate to="/admin" />;
      case "advisor":
        return <Navigate to="/advisor" />;
      case "student":
        return children; // Allow access to student routes
      default:
        // If role is not set or unknown, default to student
        return children;
    }
  }

  // If a specific role is required, check if user has that role
  if (userRole !== requiredRole) {
    // Redirect based on user's actual role
    switch (userRole) {
      case "admin":
        return <Navigate to="/admin" />;
      case "advisor":
        return <Navigate to="/advisor" />;
      case "student":
        return <Navigate to="/" />;
      default:
        return <Navigate to="/" />;
    }
  }

  return children;
}
