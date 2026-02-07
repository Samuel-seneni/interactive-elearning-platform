import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and modern web tools.",
    level: "Beginner – Intermediate",
    progress: 45,
  },
  {
    id: 2,
    title: "ICT & Digital Literacy",
    description: "Essential computer skills, internet safety, and productivity tools.",
    level: "Beginner",
    progress: 70,
  },
  {
    id: 3,
    title: "Data & Computer Basics",
    description: "Understand data handling, operating systems, and office tools.",
    level: "Beginner",
    progress: 30,
  },
  {
    id: 4,
    title: "Accessibility in Tech",
    description: "Build inclusive and accessible digital products (SDG 4 aligned).",
    level: "Intermediate",
    progress: 50,
  },
  {
    id: 5,
    title: "Python",
    description: "Backend development projects using Python (SDG 4 aligned).",
    level: "Intermediate",
    progress: 20,
  },
  {
    id: 6,
    title: "SQL",
    description: "Database handling and project-based SQL learning (SDG 4 aligned).",
    level: "Intermediate",
    progress: 10,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-24 py-10 
                    bg-gray-50 dark:bg-gray-900 
                    text-gray-800 dark:text-gray-100 
                    transition-colors duration-500">

      {/* PAGE HEADER */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Explore our curated courses designed to support
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {" "}SDG 4 – Quality Education
          </span>
          through accessible, practical learning.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 
                       rounded-xl shadow-sm 
                       border border-gray-200 dark:border-gray-700 
                       p-6 flex flex-col justify-between 
                       hover:shadow-md transition-all duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {course.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {course.description}
              </p>

              {/* Level Badge */}
              <span className="inline-block mt-4 text-xs font-medium px-3 py-1 rounded-full
                               bg-blue-100 text-blue-700
                               dark:bg-blue-900/40 dark:text-blue-300">
                {course.level}
              </span>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden mt-4">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {course.progress}% completed
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <Link
                to="/dashboard"
                className="inline-block w-full text-center 
                           bg-blue-600 dark:bg-blue-500 
                           text-white py-2 rounded-lg 
                           hover:bg-blue-700 dark:hover:bg-blue-600 
                           transition"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
