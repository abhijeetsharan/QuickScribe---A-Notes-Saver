import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md text-black p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-blue-600">QuickScribe</div>
        <div className="text-sm text-gray-500">A notes app</div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink
          to="/"
          className="text-lg text-gray-700 hover:text-blue-500 transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="text-lg text-gray-700 hover:text-blue-500 transition"
        >
          My Notes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
