import React from "react";
import { Link, useNavigate } from "react-router-dom";

import analysis from "../assets/analysis.jpg";
import prediction from "../assets/prediction.jpg";
import proactive from "../assets/proactive.png";
import strategies from "../assets/strategies.jpg";
import education from "../assets/education.JPG";
import { FaChartLine } from "react-icons/fa";
import {FaRobot} from "react-icons/fa";
import {FaUsers} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">

      {/* HERO SECTION */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-500">
  <div className="max-w-5xl mx-auto text-center">
    
    {/* Header */}
    <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mx-auto">
      About Our E-Learning Platform
    </h1>
    <p className="text-sm text-slate-500 dark:text-slate-400 justify-center mt-2 max-w-md mx-auto">
      Advancing SDG 4 – Quality Education through technology-driven, inclusive, and data-informed learning.
    </p>

    {/* Image + Features */}
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0 py-10">

      {/* Image */}
      <img className="max-w-sm w-full rounded-xl h-auto  shadow-lg"
    src={education}alt="Interactive e-learning"/>

      {/* Features List */}
      <div className="text-left">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-gray-100">
          How We Support SDG 4
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Our platform leverages AI and analytics to enhance learning outcomes, promote equitable access, and provide timely support to students at risk.
        </p>

        <div className="flex flex-col gap-10 mt-6">

          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 p-2 bg-blue-50 border border-blue-200 rounded">
              <div className="w-6 h-6 text-blue-500"><FaChartLine /></div>
            </div>
            <div>
              <h3 className="text-base font-medium text-blue-700 dark:text-gray-200">
                Data-Driven Insights
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monitors student engagement, attendance, and assessment performance to identify learning gaps early.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 p-2 bg-green-50 border border-green-200 rounded">
             <FaUsers className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-base font-medium text-blue-700 dark:text-gray-200">
                Inclusive & Equitable Education
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Supports all learners, providing personalized interventions to reduce dropout rates and improve academic outcomes.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 p-2 bg-purple-50 border border-purple-200 rounded flex items-center justify-center">
              <FaRobot className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-base font-medium text-blue-700 dark:text-gray-200">
                Ethical AI for Education
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Uses responsible AI to predict student risks, guide interventions, and enhance overall teaching and learning quality.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <Link
        to="/courses"
        className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        Explore Courses
      </Link>
      <Link
        to="/dashboard"
        className="border border-gray-400 dark:border-gray-500 px-6 py-3 rounded-lg font-medium hover:bg-white dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        View Dashboard
      </Link>
    </div>

  </div>
</section>



      {/* PROBLEM SECTION */}
      <section className="py-14 px-6 md:px-16 lg:px-24 transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl text-center font-bold mb-4 text-gray-800 dark:text-gray-100">
            The Problem
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            Many learning institutions struggle to identify students at risk of
            academic failure early enough. By the time poor performance is noticed,
            dropout or failure is already likely, limiting opportunities for timely
            intervention.
          </p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 px-6 md:px-16 lg:px-24 transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
            Our AI-Driven Solution
          </h3>

          <ul className="grid gap-6 sm:grid-cols-2">

            {[{
              img: analysis, title: "Data Analysis", desc: "Analyzes attendance, assessments, and engagement data", color: "blue-800"
            },{
              img: prediction, title: "Risk Prediction", desc: "Predicts students at risk using machine learning models", color: "blue-600"
            },{
              img: proactive, title: "Early Intervention", desc: "Generates early risk scores for proactive intervention", color: "blue-600"
            },{
              img: strategies, title: "Support Strategies", desc: "Recommends targeted academic support strategies", color: "blue-600"
            }].map((item, idx) => (
              <li
                key={idx}
                onClick={() => navigate("/dashboard")}
                className="p-6 border rounded-lg flex flex-col items-center text-center cursor-pointer
                  hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 bg-gray-50 dark:bg-gray-700"
              >
                <img src={item.img} alt={item.title} className="w-54 h-24 object-contain mb-4" />
                <h4 className={`text-sm font-semibold mb-1 text-${item.color}`}>
                  {item.title}
                </h4>
                <p className="text-gray-800 dark:text-gray-200 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-14 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
            Impact and Teaching Value
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Early academic intervention",
              "Reduced dropout and failure rates",
              "Improved student performance & retention",
              "Practical demonstration of predictive modeling",
              "Ethical AI in education",
              "Strong alignment with SDG 4 goals"
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
