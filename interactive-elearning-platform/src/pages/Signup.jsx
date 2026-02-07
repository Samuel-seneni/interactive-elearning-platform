import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Account created successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl transition-colors">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm sm:text-base font-medium mb-1 text-gray-800 dark:text-gray-100">
              Full Name
            </label>
            <input
              type="text"
              required
              aria-label="Full name"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 sm:p-4 border rounded focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
            />
          </div>

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
              className="w-full p-3 sm:p-4 border rounded focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
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
                className="w-full p-3 sm:p-4 pr-12 border rounded focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-green-600 dark:text-green-400 font-medium focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm sm:text-base font-medium mb-1 text-gray-800 dark:text-gray-100">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                aria-label="Confirm Password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 sm:p-4 pr-12 border rounded focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
              />
              <button
                type="button"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-green-600 dark:text-green-400 font-medium focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 dark:bg-green-500 text-white p-3 sm:p-4 rounded hover:bg-green-700 dark:hover:bg-green-600 focus:ring-2 focus:ring-green-400 text-sm sm:text-base transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm sm:text-base mt-4 text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
