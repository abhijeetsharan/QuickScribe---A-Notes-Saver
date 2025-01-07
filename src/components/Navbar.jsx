import React from 'react';
import { Search, Plus, Moon, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-blue-600">QuickScribe</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Plus className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Moon className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;