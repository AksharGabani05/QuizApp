import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-sky-950 to-sky-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-purple-200 transition-colors duration-300">
          QuizApp
        </Link>

      
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-purple-200 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-200 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-200 transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-purple-200 transition-colors duration-300">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full transition-all duration-300">
                Register
              </Link>
            </li>
          </ul>
        </nav>

        
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-sky-950 text-white rounded-lg shadow-lg p-4`}>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-purple-200 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-200 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-200 transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-purple-200 transition-colors duration-300">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full transition-all duration-300">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
