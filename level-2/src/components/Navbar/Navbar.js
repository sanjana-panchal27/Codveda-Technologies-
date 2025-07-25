import React from 'react';
import '../../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="#" className="text-2xl font-bold">
          MyBrand
        </NavLink>
        <div className="space-x-4">
          <NavLink to="#hero" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="#features" className="hover:text-gray-300">
            Features
          </NavLink>
          <NavLink to="#testimonial" className="hover:text-gray-300">
            Testimonials
          </NavLink>
          <NavLink to="#contact" className="hover:text-gray-300">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
