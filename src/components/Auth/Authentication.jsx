import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Square, LockKeyhole, GraduationCap, Search, Mail } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { login, userRole, currentUser, error: authError } = useAuth();
  const navigate = useNavigate();

  console.log("Authentication component rendered");

  // Watch for userRole changes and navigate accordingly
  useEffect(() => {
    if (userRole && currentUser) {
      console.log("🔍 Authentication: userRole changed to:", userRole);
      console.log("🔍 Authentication: currentUser:", currentUser.email);
      console.log("🔍 Authentication: Navigating based on role:", userRole);

      setTimeout(() => {
        console.log(
          "🔍 Authentication: Executing navigation for role:",
          userRole
        );
        switch (userRole) {
          case "admin":
            console.log("🔍 Authentication: Redirecting to /admin");
            navigate("/admin");
            break;
          case "advisor":
            console.log("🔍 Authentication: Redirecting to /advisor");
            navigate("/advisor");
            break;
          case "student":
            console.log("🔍 Authentication: Redirecting to /dashboard");
            navigate("/dashboard");
            break;
          default:
            console.log(
              "🔍 Authentication: Unknown role, redirecting to /dashboard (default)"
            );
            navigate("/dashboard");
        }
      }, 1000);
    } else {
      console.log("🔍 Authentication: userRole or currentUser not ready yet");
      console.log("🔍 Authentication: userRole:", userRole);
      console.log("🔍 Authentication: currentUser:", currentUser);
    }
  }, [userRole, currentUser, navigate]);

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // Convert email format if needed (for student IDs)
      let loginEmail = email;
      if (!email.includes("@")) {
        // If user entered student ID, convert to email format
        loginEmail = `${email}@example.com`;
      }

      console.log("Attempting login with:", loginEmail);
      await login(loginEmail, password);
      setMessage("Login successful!");

      console.log("Login successful, userRole:", userRole);

      // Remove the old setTimeout since we're using useEffect now
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Show error if there's an auth error
  if (authError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#F9FAFB",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <h1 style={{ color: "#dc2626", marginBottom: "20px" }}>
            Authentication Error
          </h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>{authError}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#035f64",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center px-8 py-8 bg-[#F9FAFB]">
      <div className="flex flex-col justify-center items-center rounded-4xl">
        <div className="bg-[#035f64] p-2 mb-4 rounded-xl">
          <GraduationCap size={42} color="white" />
        </div>
        <h1 className="text-3xl font-bold">IIUC Portal</h1>
        <p className="text-md text-gray-700">
          Sign in to access your dashboard
        </p>
        <div className="flex-col shadow-xl justify-center items-center bg-white rounded-2xl px-6 py-4 mt-6 w-lg">
          <div className="flex flex-col justify-start text-center mt-6 ">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-md text-gray-700">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="w-full">
            <div className="flex flex-col mt-8 gap-2 ">
              <p className="font-medium">Email Address or Student ID</p>
              <div className="flex items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md">
                <Mail size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your email or student ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-gray-700 placeholder-gray-400 text-sm focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-2">
              <p className="font-medium">Password</p>
              <div className="flex items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md">
                <LockKeyhole size={18} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent text-gray-700 placeholder-gray-400 text-sm focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="flex mt-8 px-4 items-center justify-between gap-1">
              <p className="flex gap-2 text-sm font-semibold text-gray-500">
                <Square color="gray" />
                Remember me
              </p>
              <p className="text-sm font-semibold text-gray-500 hover:text-black cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#035f64] p-3 rounded-lg mt-6 cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="text-white text-center">
                {loading ? "Signing In..." : "Sign In"}
              </p>
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 text-center text-sm ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}

          <div className="flex flex-col gap-2 mt-8 text-sm text-gray-500 mb-8">
            <p className="text-center text-xs">
              Your dashboard will be automatically determined based on your
              account type.
            </p>
            <p className="text-center text-xs">
              Students, Advisors, and Administrators will be redirected to their
              respective panels.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="text-center text-xs">
            Need help? Contact support@eduportal.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
