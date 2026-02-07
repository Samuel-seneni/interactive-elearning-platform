import React from "react";
import { Link } from "react-router-dom";
import TrackProgress from "../components/TrackProgress";

const enrolledCourses = [
  { id: 1, title: "Web Development", progress: 45 },
  { id: 2, title: "ICT & Digital Literacy", progress: 70 },
  { id: 3, title: "Python", progress: 20 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10">


      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Your Interactive E-Learning Platform
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Track your courses, monitor your progress, and explore your AI project aligned with{" "}
          <span className="font-semibold text-blue-600">
            SDG 4 – Quality Education
          </span>.
        </p>
      </header>

      <section className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <Link
          to="/courses"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 text-center font-semibold"
        >
          Explore Courses
        </Link>

        <a
          href="#track-progress"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 text-center font-semibold"
        >
          Track Progress
        </a>

        {/* NEW: STUDENT PROFILE */}
        <Link
          to="/student-profile"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 text-center font-semibold"
        >
          View Student Profile
        </Link>

        <Link
          to="/contact"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 text-center font-semibold"
        >
          SDG 4 Info
        </Link>
      </section>

      {/* ENROLLED COURSES */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Enrolled Courses & Progress
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map(course => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p className="text-sm text-gray-600 mt-2">
                {course.progress}% completed
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONNECTED TRACK PROGRESS COMPONENT */}
      <TrackProgress courses={enrolledCourses} />

      {/* AI PROJECT OVERVIEW */}
      <section className="mb-14 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          AI-Powered Student Performance & Early Risk Detection
        </h2>

        <p className="text-gray-600 leading-relaxed">
          This project uses AI to predict students at risk of poor performance,
          enabling early interventions, ethical AI education, and alignment with SDG 4.
        </p>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600">
          <li>Analyze attendance, assessments, and engagement data</li>
          <li>Generate early risk scores and predictive analytics</li>
          <li>Recommend targeted academic support strategies</li>
          <li>Track progress and outcomes over time</li>
        </ul>
      </section>

      {/* QUICK ACTIONS */}
      

      {/* ML EXPLANATION */}
      <section className="mb-14 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How the AI Predicts Risk (Educational Model) </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          This system uses a <strong>Logistic Regression model</strong> trained on
          historical academic data to estimate the probability that a student may
          underperform or drop out.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Attendance rate</li>
          <li>Assessment scores</li>
          <li>Course engagement patterns</li>
          <li>Progress trends over time</li>
        </ul>

        <p className="mt-4 text-sm text-gray-500">
          Model outputs are advisory only and support ethical, human-led interventions.
        </p>
      </section>

    </div>
  );
};

export default Dashboard;
