import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6 text-center min-h-[60rem]">
      <h2 className="text-5xl font-bold mb-4">Welcome to Resumify</h2>
      <p className="text-lg mb-8">
        Create a standout resume that captures the attention of hiring managers
        and helps you land your dream job!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">
            Job Description Analyzer
          </h3>
          <p className="text-gray-700 mb-4">
            Our advanced analyzer allows you to compare your resume with job
            descriptions to tailor your skills and experiences, ensuring better
            matches and increasing your chances of landing interviews.
          </p>
          <Link to="/jobdesc">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Learn More
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">ATS Score</h3>
          <p className="text-gray-700 mb-4">
            Optimize your resume for Applicant Tracking Systems (ATS) to ensure
            it gets past the initial screenings. Our scoring system gives you
            actionable insights on how to improve your resume.
          </p>
          <Link to="/ats">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Check Your Score
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Build Resume</h3>
          <p className="text-gray-700 mb-4">
            Use our intuitive interface to create your professional resume in
            minutes. Choose from various templates and customize it to match
            your style and preferences.
          </p>
          <Link to="/resume-build">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Start Building
            </button>
          </Link>
        </div>
      </div>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold mb-4">Why Choose Resumify?</h3>
        <ul className="list-disc list-inside text-left mb-4">
          <li>
            ✅ User-friendly interface: Simple and efficient tools to create
            your resume.
          </li>
          <li>
            ✅ Customizable templates: Choose from a variety of professional
            designs.
          </li>
          <li>
            ✅ Real-time feedback: Get suggestions as you build your resume.
          </li>
          <li>
            ✅ Expert resources: Access articles and tips to enhance your job
            search.
          </li>
        </ul>
        <p className="text-lg">
          Join thousands of successful users who have landed their dream jobs
          with Resumify. Start building your future today!
        </p>
      </section>
    </div>
  );
};

export default Home;
