import React from 'react';
import '../../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default Navbar;
