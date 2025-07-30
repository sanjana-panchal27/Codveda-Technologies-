import React, { useState } from 'react'; // Import useState for responsive menu
import { NavLink } from 'react-router-dom';

function Navbar() {
  // State to control the mobile menu's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 shadow-lg sticky top-0 z-50 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Brand Logo/Name */}
        <NavLink
          to="#"
          className="text-purple-600  text-3xl font-extrabold tracking-wide hover:text-blue-700 transition duration-300 ease-in-out rounded-md p-2"
        >
          MyBrand
        </NavLink>

        {/* Mobile menu button (Hamburger icon) */}
        <button
          onClick={toggleMenu}
          className="text-blue-900 lg:hidden focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="text-lg lg:flex-grow">
            <NavLink
              to="#hero"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-purple-500 mr-6 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-20"
              onClick={() => setIsOpen(false)} // Close menu on click for mobile
            >
              Home
            </NavLink>
            <NavLink
              to="#features"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-purple-500 mr-6 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-20"
              onClick={() => setIsOpen(false)}
            >
              Features
            </NavLink>
            <NavLink
              to="#testimonial"
              className="block mt-4 lg:inline-block lg:mt-0  text-blue-800 hover:text-purple-500 mr-6 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-20"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-purple-500 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-white hover:bg-opacity-20"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
