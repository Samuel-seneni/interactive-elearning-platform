import React from "react";
import { BsFiletypeAi } from "react-icons/bs";

const TrackProgress = ({ courses }) => {
  return (
    <section className="mb-14">
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-6">
        <div className="w-12 h-12 p-2 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
          <BsFiletypeAi className="w-8 h-8 text-blue-600" /></div>AI Risk Monitoring & Progress
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div
            key={course.id}
            className="relative bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition group"
          >
            {/* HIGH RISK BADGE */}
            {course.riskScore >= 50 && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                🔔 High Risk
              </span>
            )}

            {/* TITLE */}
            <h3 className="font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>

            {/* TREND */}
            <p className="text-sm mb-2">
              Trend:
              <span
                className={`ml-2 font-medium ${
                  course.trend === "improving"
                    ? "text-green-600"
                    : course.trend === "declining"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {course.trend === "improving" && "Improving"}
                {course.trend === "declining" && "Declining"}
                {course.trend === "stable" && "Stable"}
              </span>
            </p>

            {/* PROGRESS */}
            <div className="mb-3">
              <p className="text-xs text-gray-600">Progress</p>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-xs mt-1">{course.progress}% completed</p>
            </div>

            {/* AI RISK */}
            <div className="mb-4">
              <p className="text-xs text-gray-600">AI Risk Score</p>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className={`h-3 rounded-full ${
                    course.riskScore > 50
                      ? "bg-red-500"
                      : course.riskScore > 20
                      ? "bg-yellow-400"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${course.riskScore}%` }}
                />
              </div>
              <p className="text-xs mt-1">{course.riskScore}% risk</p>
            </div>

            {/* AI TOOLTIP */}
            <div className="absolute left-4 right-4 bottom-4 opacity-0 group-hover:opacity-100 transition">
              <div className="bg-blue-600 text-white text-xs p-3 rounded-lg">
                <p className="font-semibold mb-1">AI Recommendation</p>
                <p>{course.advice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackProgress;
