import { useState, useEffect } from "react";
import {
  Pencil,
  Trash2,
  Plus,
  Search,
  Filter,
  Bell,
  CircleUserRound,
} from "lucide-react";
import { userAPI, authAPI } from "../../services/api";

export default function UserManage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Real data from API
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    department: "",
    studentId: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    const newUser = {
      id: users.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      type: formData.userType,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setUsers((prev) => [...prev, newUser]);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "student",
      department: "",
      studentId: "",
      phone: "",
    });

    alert("User created successfully!");
  };

  const deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || user.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === "active"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "admin":
        return "text-purple-600 bg-purple-100";
      case "advisor":
        return "text-blue-600 bg-blue-100";
      case "student":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">User Management</h1>
            <p className="text-gray-500">
              Create and manage user accounts for students, advisors, and
              administrators.
            </p>
          </div>

          {/* Create User Section - Top */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Create New User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Account Type *
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  >
                    <option value="student">Student</option>
                    <option value="advisor">Advisor</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength="8"
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    minLength="8"
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div>
                  {formData.userType === "student" ? (
                    <>
                      <label className="block text-xs font-medium mb-1 text-gray-700">
                        Student ID
                      </label>
                      <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                      />
                    </>
                  ) : (
                    <>
                      <label className="block text-xs font-medium mb-1 text-gray-700">
                        Department
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#035f64] focus:border-transparent"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#035f64] text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-[#024a4e] transition-colors"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>

          {/* Manage Users Section */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold">Manage Existing Users</h2>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035f64] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035f64] focus:border-transparent appearance-none"
                  >
                    <option value="all">All Types</option>
                    <option value="student">Students</option>
                    <option value="advisor">Advisors</option>
                    <option value="admin">Administrators</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                            user.type
                          )}`}
                        >
                          {user.type.charAt(0).toUpperCase() +
                            user.type.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            user.status
                          )}`}
                        >
                          {user.status.charAt(0).toUpperCase() +
                            user.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors">
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No users found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
