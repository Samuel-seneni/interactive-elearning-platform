import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl transition-colors">

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm sm:text-base font-medium mb-1 text-gray-800 dark:text-gray-100">
              Email Address
            </label>
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 sm:p-4 border rounded focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm sm:text-base font-medium mb-1 text-gray-800 dark:text-gray-100">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                aria-label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 sm:p-4 pr-12 border rounded focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white p-3 sm:p-4 rounded hover:bg-blue-700 dark:hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm sm:text-base mt-4 text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
