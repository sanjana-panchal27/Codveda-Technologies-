import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 p-8 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 MyBrand. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <NavLink to="#" className="hover:text-gray-300">
              Privacy Policy
            </NavLink>
            <NavLink to="#" className="hover:text-gray-300">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
