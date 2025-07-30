import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="#" className="navbar-brand">
          MyBrand
        </NavLink>

        <div className="navbar-links">
          <NavLink to="#hero" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="#features" className="navbar-link">
            Features
          </NavLink>
          <NavLink to="#testimonial" className="navbar-link">
            Testimonials
          </NavLink>
          <NavLink to="#contact" className="navbar-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
