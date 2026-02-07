# Interactive E-Learning Platform

Project setup for a **React frontend E-Learning Platform**.

## **Step 0: Create the project folder**

npm create vite@latest interactive-elearning-platform
# Package name: interactive-elearning-platform
# Framework: React
# Variant: JavaScript

cd interactive-elearning-platform
npm install
Step 1: Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npm exec tailwindcss init -p
Configure tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Create src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
Import Tailwind in your main file (e.g., main.jsx):

import './index.css';
Step 2: Install Project Dependencies
npm install react-router-dom


npm install @tailwindcss/forms
npm install @tailwindcss/typography
Step 3: Run the Project
npm run dev


Introduction
The Interactive E-Learning Platform is a modern, responsive React application designed to provide an engaging online learning environment. The platform leverages AI-powered tools to track student performance, identify at-risk students, and support proactive interventions.

It supports:

Course management (Web Development, ICT, Python, SQL, etc.)

Student profiles with progress tracking

AI-based early risk detection for academic success

Accessible and inclusive design aligned with SDG 4 – Quality Education

Purpose of the Project
This platform aims to enhance student learning outcomes by providing a digital tool that allows:

Students to track their progress and access curated courses

Educators to identify students at risk early

Institutions to implement data-driven interventions

Promotion of inclusive education aligned with Sustainable Development Goals

Challenges Addressed
Many educational institutions face challenges like:

Late detection of students at risk of failing

Limited access to data-driven insights

Difficulty in providing targeted support for struggling students

Lack of a centralized platform to manage courses and student data

Solutions Provided
The Interactive E-Learning Platform solves these problems by:

Using AI to predict students at risk and provide early intervention scores

Offering a dashboard for educators to monitor student engagement and performance

Tracking student progress per course with visual indicators

Providing a fully responsive, dark/light mode supported interface

Allowing easy communication through a contact form (integrated with email services)

Aligning learning and accessibility with SDG 4 – Quality Education

Project Features
Home Page: Overview of platform, AI-powered solutions, SDG alignment

Courses Page: Curated courses with progress bars and enrollment

Dashboard: Student performance analytics and risk detection

Student Profile: Editable student and course details for admins

Authentication: Signup and login system with local storage

Contact Page: Form for sending messages to admin email (via EmailJS or backend)

Footer: Contact info and platform links

Dark Mode Support: Toggleable dark/light theme globally

File Structure
interactive-elearning-platform/
│
├─ public/
│
├─ src/
│   ├─ assets/
│   ├─ components/
│   │   ├─ Footer.jsx
│   │   ├─ Navbar.jsx
│   │   └─ ...
│   ├─ pages/
│   │   ├─ Home.jsx
│   │   ├─ Courses.jsx
│   │   ├─ Dashboard.jsx
│   │   ├─ StudentProfile.jsx
│   │   ├─ Contact.jsx
│   │   ├─ Signup.jsx
│   │   └─ Login.jsx
│   ├─ App.jsx
│   └─ index.jsx
│
├─ package.json
├─ tailwind.config.js
└─ README.md
Usage
Install dependencies:

npm install
Start development server:

npm run dev
Access the platform at:



License
This project is open-source and free to use for educational purposes.

Author: Samuel Munialo
Email: samuelmunialo2005@gmail.com
Location: Nairobi, Kenya


---

*setup, dependencies, introduction, purpose, challenges, solution, project features, file structure, and usage**.  



