import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Menu and Close icons
import logo from '../assets/images/2020.png'; // Import your logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Website Logo" className="h-10 w-auto" /> {/* Logo */}
              <span className="ml-2 text-xl font-bold">20-20 Sports & Trophies</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/equipment" className="hover:text-gray-200 transition-colors">Equipment</Link>
            <Link to="/about" className="hover:text-gray-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 transform rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 transform rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/equipment"
              className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Equipment
            </Link>
            <Link
              to="/about"
              className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;