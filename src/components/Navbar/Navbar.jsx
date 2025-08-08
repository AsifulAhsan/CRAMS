import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!currentUser) {
    return null; // Don't show navbar if not logged in
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-[#035f64]">IIUC CRAMS</h1>
          <span className="text-sm text-gray-500">
            {userRole === 'admin' && 'Admin Panel'}
            {userRole === 'advisor' && 'Advisor Panel'}
            {userRole === 'student' && 'Student Portal'}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Welcome, {currentUser.displayName || currentUser.email}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
