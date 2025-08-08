import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Bell, CircleUserRound, Plus } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  enableNetwork,
} from "firebase/firestore";
import { db } from "../../firebase/config";

export default function UserManage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    studentId: "",
    email: "",
    role: "student",
    department: "",
    password: "",
  });
  const { createUserAccountForAdmin } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      console.log("Fetching users from Firestore...");

      // Enable network connection
      await enableNetwork(db);

      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched users:", usersList);
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Error fetching users: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateUser(e) {
    e.preventDefault();

    if (!newUser.name || !newUser.studentId || !newUser.email) {
      alert("Please fill in all required fields (Name, ID, and Email)");
      return;
    }

    try {
      setCreatingUser(true);

      // Prepare user data
      const userData = {
        name: newUser.name,
        studentId: newUser.studentId,
        email: newUser.email,
        role: newUser.role,
        department: newUser.department,
        password: newUser.password || "defaultPassword123",
      };

      console.log("Creating user:", userData);

      await createUserAccountForAdmin(userData);

      console.log("User created successfully, refreshing user list...");

      // Reset form
      setNewUser({
        name: "",
        studentId: "",
        email: "",
        role: "student",
        department: "",
        password: "",
      });
      setShowCreateForm(false);

      // Refresh users list with a small delay to ensure Firestore is updated
      setTimeout(async () => {
        await fetchUsers();
        console.log("User list refreshed after timeout");
      }, 1000);

      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);

      let errorMessage = "Error creating user: " + error.message;

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "A user with this Student ID or Email already exists.";
      } else if (error.code === "auth/weak-password") {
        errorMessage =
          "Password is too weak (should be at least 6 characters).";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      } else if (error.message.includes("INTERNAL ASSERTION FAILED")) {
        errorMessage = "Firebase internal error. Please try again.";
      }

      alert(errorMessage);
    } finally {
      setCreatingUser(false);
    }
  }

  async function handleDeleteUser(userId) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteDoc(doc(db, "users", userId));
        fetchUsers();
        alert("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Error deleting user: " + error.message);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navbar */}
      <div className="fixed w-full flex justify-between pt-2 px-4 bg-white shadow-md top-0 z-10">
        <div className="flex p-4 gap-2">
          <h1 className="text-3xl font-bold">IIUC Admin Panel</h1>
        </div>
        <div className="flex gap-6 p-4">
          <div className="flex gap-4">
            <button
              onClick={() => (window.location.href = "/admin")}
              className="px-4 py-2 text-gray-600 hover:text-[#035f64] transition-colors"
            >
              Dashboard
            </button>
            <button className="px-4 py-2 text-[#035f64] border-b-2 border-[#035f64]">
              User Manage
            </button>
          </div>
          <Bell className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
          <CircleUserRound className="w-6 h-6 text-gray-600 hover:text-[#035f64] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-25 px-6 py-10">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-1">User Management</h1>
              <p className="text-gray-500">
                Manage user accounts and permissions.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={fetchUsers}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh
              </button>
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-[#035f64] text-white px-4 py-2 rounded-lg hover:bg-[#024a4e] transition flex items-center gap-2"
              >
                <Plus size={20} />
                Create User
              </button>
            </div>
          </div>

          {/* Create User Form */}
          {showCreateForm && (
            <div className="mb-8 p-6 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-4">Create New User</h2>
              <form
                onSubmit={handleCreateUser}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-sm mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">ID *</label>
                  <input
                    type="text"
                    value={newUser.studentId}
                    onChange={(e) =>
                      setNewUser({ ...newUser, studentId: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="advisor">Advisor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Department</label>
                  <input
                    type="text"
                    value={newUser.department}
                    onChange={(e) =>
                      setNewUser({ ...newUser, department: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Leave empty for default password"
                  />
                </div>
                <div className="flex gap-2 items-end">
                  <button
                    type="submit"
                    disabled={creatingUser}
                    className="bg-[#035f64] text-white px-4 py-2 rounded-lg hover:bg-[#024a4e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {creatingUser ? "Creating..." : "Create User"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="px-6 py-4">
                        {user.name || user.displayName}
                      </td>
                      <td className="px-6 py-4">{user.studentId}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.role === "admin"
                              ? "bg-red-100 text-red-800"
                              : user.role === "advisor"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">{user.department || "-"}</td>
                      <td className="px-6 py-4">
                        {user.createdAt
                          ? new Date(
                              user.createdAt.toDate()
                            ).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-row gap-2">
                          <button className="text-blue-600 flex items-center hover:text-[#035f64] transition-colors">
                            <Pencil size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 flex items-center hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
