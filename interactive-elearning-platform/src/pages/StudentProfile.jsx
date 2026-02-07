import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Default students
const defaultStudents = [
  {
    id: 1,
    name: "John Doe",
    registration: "STU-2025-001",
    program: "ICT & Digital Literacy",
    email: "john.doe@student.edu",
    avatar: "https://i.pravatar.cc/150?img=10",
    courses: [
      { id: 1, title: "Web Development", progress: 45, riskScore: 62, trend: "declining" },
      { id: 2, title: "ICT & Digital Literacy", progress: 70, riskScore: 28, trend: "improving" },
      { id: 3, title: "Python", progress: 20, riskScore: 81, trend: "high-risk" },
    ],
  },
];

// Helper functions
const riskLabel = (score) => {
  if (score >= 70) return "High Risk";
  if (score >= 40) return "Medium Risk";
  return "Low Risk";
};
const riskColor = (score) => {
  if (score >= 70) return "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100";
  if (score >= 40) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100";
  return "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100";
};

const StudentProfile = () => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : defaultStudents;
  });

  const [newStudent, setNewStudent] = useState({
    name: "",
    registration: "",
    program: "",
    email: "",
    avatar: "https://i.pravatar.cc/150?img=12",
    courses: [],
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Student change handler
  const handleChangeStudent = (studentId, field, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, [field]: value } : s))
    );
  };

  // Add new student
  const addStudent = () => {
    if (!newStudent.name || !newStudent.registration) {
      alert("Fill in Name and Registration!");
      return;
    }
    const newId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { ...newStudent, id: newId }]);
    setNewStudent({
      name: "",
      registration: "",
      program: "",
      email: "",
      avatar: "https://i.pravatar.cc/150?img=12",
      courses: [],
    });
  };

  // Course handlers
  const addCourse = (studentId) => {
    const title = prompt("Course title:");
    if (!title) return;
    const progress = parseInt(prompt("Progress % (0-100):"), 10) || 0;
    const riskScore = parseInt(prompt("Risk Score % (0-100):"), 10) || 0;
    const trend = prompt("Trend (improving/declining/high-risk):") || "improving";
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              courses: [
                ...s.courses,
                { id: Date.now(), title, progress, riskScore, trend },
              ],
            }
          : s
      )
    );
  };

  const editCourse = (studentId, courseId, field, value) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              courses: s.courses.map((c) =>
                c.id === courseId ? { ...c, [field]: value } : c
              ),
            }
          : s
      )
    );
  };

  const removeCourse = (studentId, courseId) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? { ...s, courses: s.courses.filter((c) => c.id !== courseId) }
          : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-16 lg:px-24 py-10 transition-colors duration-500">

      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Student Profiles (Admin View)</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Editable student & course details aligned with{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">SDG 4</span>
        </p>
      </header>

      {/* Add New Student */}
      <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <input
            placeholder="Registration"
            value={newStudent.registration}
            onChange={(e) =>
              setNewStudent({ ...newStudent, registration: e.target.value })
            }
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <input
            placeholder="Program"
            value={newStudent.program}
            onChange={(e) => setNewStudent({ ...newStudent, program: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
          <input
            placeholder="Email"
            type="email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
          />
        </div>
        <button
          onClick={addStudent}
          className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Add Student
        </button>
      </section>

      {/* Student Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-colors"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-20 h-20 rounded-full border-2 border-blue-600 dark:border-blue-400 mb-3"
              />
              <input
                type="text"
                value={student.name}
                onChange={(e) => handleChangeStudent(student.id, "name", e.target.value)}
                className="text-center text-xl font-semibold border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 mb-1 bg-transparent text-gray-800 dark:text-gray-100"
              />
              <input
                type="text"
                value={student.registration}
                onChange={(e) => handleChangeStudent(student.id, "registration", e.target.value)}
                className="text-center text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 mb-1 bg-transparent text-gray-800 dark:text-gray-100"
              />
              <input
                type="text"
                value={student.program}
                onChange={(e) => handleChangeStudent(student.id, "program", e.target.value)}
                className="text-center text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 mb-1 bg-transparent text-gray-800 dark:text-gray-100"
              />
              <input
                type="email"
                value={student.email}
                onChange={(e) => handleChangeStudent(student.id, "email", e.target.value)}
                className="text-center text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 bg-transparent text-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Courses */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Courses</h3>
                <button
                  onClick={() => addCourse(student.id)}
                  className="bg-green-600 dark:bg-green-500 text-white px-2 py-1 text-xs rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                >
                  + Add Course
                </button>
              </div>
              {student.courses.map((course) => (
                <div
                  key={course.id}
                  className="mb-3 p-2 border border-gray-300 dark:border-gray-600 rounded flex flex-col gap-1 transition-colors"
                >
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => editCourse(student.id, course.id, "title", e.target.value)}
                    className="border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 text-gray-800 dark:text-gray-100 font-medium bg-transparent"
                  />
                  <input
                    type="number"
                    value={course.progress}
                    onChange={(e) =>
                      editCourse(student.id, course.id, "progress", Number(e.target.value))
                    }
                    className="border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 text-sm bg-transparent text-gray-800 dark:text-gray-100"
                  />
                  <input
                    type="number"
                    value={course.riskScore}
                    onChange={(e) =>
                      editCourse(student.id, course.id, "riskScore", Number(e.target.value))
                    }
                    className="border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 text-sm bg-transparent text-gray-800 dark:text-gray-100"
                  />
                  <input
                    type="text"
                    value={course.trend}
                    onChange={(e) => editCourse(student.id, course.id, "trend", e.target.value)}
                    className="border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 text-sm bg-transparent text-gray-800 dark:text-gray-100"
                  />
                  <button
                    onClick={() => removeCourse(student.id, course.id)}
                    className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600 transition-colors mt-1"
                  >
                    Remove Course
                  </button>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/dashboard"
                className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 text-sm transition-colors"
              >
                Back to Dashboard
              </Link>
              <button className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-sm transition-colors">
                Download Progress
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfile;
