import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import sdgLogo from "../assets/sdglogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Initialize dark mode on first load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setMenuOpen(false);
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 font-semibold underline"
      : "block px-3 py-2 hover:underline";

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white dark:text-gray-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-14">

          {/* LEFT: LOGO + HEADING */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
              <img src={sdgLogo} alt="SDG 4 Quality Education Logo" className="w-7 h-7 object-contain"/>
            </div>

            <h1 className="text-sm sm:text-base lg:text-lg font-bold leading-tight dark:text-gray-100">
              Interactive E-Learning Platform
            </h1>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 px-3 py-1.5 rounded-lg bg-white text-blue-600 dark:bg-gray-700 dark:text-white hover:opacity-80 transition text-sm"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            {!isAuth && (
              <>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                <NavLink to="/signup" className={navLinkClass}>Sign Up</NavLink>
                <NavLink to="/login" className={navLinkClass}>Sign In</NavLink>
              </>
            )}

            {isAuth && (
              <>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1 dark:bg-gray-800 dark:text-gray-100">

            {!isAuth && (
              <>
                <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
                <NavLink to="/signup" onClick={() => setMenuOpen(false)} className={navLinkClass}>Sign Up</NavLink>
                <NavLink to="/login" onClick={() => setMenuOpen(false)} className={navLinkClass}>Sign In</NavLink>
              </>
            )}

            {isAuth && (
              <>
                <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
                <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className={navLinkClass}>Dashboard</NavLink>
                <NavLink to="/courses" onClick={() => setMenuOpen(false)} className={navLinkClass}>Courses</NavLink>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact</NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full text-left bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

