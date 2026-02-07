import React from "react";
import sdgLogo from "../assets/sdglogo.png";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-blue-700 dark:bg-gray-900 text-white dark:text-gray-200 transition-colors duration-500">
      
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white/30 dark:border-gray-500/30 pb-6">

        {/* LEFT: LOGO & DESCRIPTION */}
        <div className="md:max-w-96">
          {/* SDG Logo */}
          <img src={sdgLogo} alt="SDG 4" className="w-14 h-14 mb-4" />

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-white/90 dark:text-gray-300">
            This Interactive and Accessible E-Learning Platform supports
            <span className="font-semibold text-yellow-300 dark:text-yellow-400">
              {" "}SDG 4 – Quality Education
            </span>
            by providing inclusive, technology-driven learning experiences for all learners,
            regardless of ability or background.
          </p>
        </div>

        {/* RIGHT: LINKS */}
        <div className="flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-10 sm:gap-20">

          {/* PLATFORM LINKS */}
          <div>
            <h2 className="font-semibold mb-5 text-white dark:text-gray-200">Platform</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-yellow-300 dark:hover:text-yellow-400 transition">Home</a></li>
              <li><a href="/courses" className="hover:text-yellow-300 dark:hover:text-yellow-400 transition">Courses</a></li>
              <li><a href="/dashboard" className="hover:text-yellow-300 dark:hover:text-yellow-400 transition">Dashboard</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 dark:hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="font-semibold mb-5 text-white dark:text-gray-200">Get in Touch</h2>
            <div className="text-sm space-y-2 text-white/90 dark:text-gray-300">
              <p>+254 792529532</p>
              <p>support@elearning-sdg4.org</p>
              <p>Kenya</p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-white/80 dark:text-gray-400 transition-colors duration-500">
        © {new Date().getFullYear()} Interactive E-Learning Platform — SDG 4.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
