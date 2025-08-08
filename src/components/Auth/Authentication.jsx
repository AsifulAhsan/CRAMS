import { Square, LockKeyhole, GraduationCap, Search, Mail } from "lucide-react";

function Authentication() {
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

          <div className="flex flex-col mt-8 gap-2 ">
            <p className="font-medium">Email Address</p>
            <div className="flex items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-2">
            <p className="font-medium">Password</p>
            <div className="flex items-center bg-white bg-opacity-30 border border-gray-200 border-opacity-20 rounded-lg backdrop-blur-md p-2 w-full max-w-md">
              <LockKeyhole size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your password"
                className="bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none w-full"
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
          <div className="bg-[#035f64] p-3 rounded-lg mt-6 cursor-pointer">
            <p className="text-white text-center">Sign In</p>
          </div>
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
