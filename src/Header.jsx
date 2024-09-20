import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">Resumify</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto z-10`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <Link to="/jobdesc" className="text-gray-700 hover:text-blue-600">Job Description Analyzer</Link>
            </li>
            <li>
              <Link to="/ats" className="text-gray-700 hover:text-blue-600">ATS Score</Link>
            </li>
            <li>
              <Link to="/resume-build" className="text-gray-700 hover:text-blue-600">Build Resume</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
