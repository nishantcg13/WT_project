import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Menu className="h-8 w-8 text-gray-800" />
              <span className="ml-2 text-xl font-bold text-gray-800">SportGear</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <Link to="/equipment" className="text-gray-600 hover:text-gray-900">Equipment</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;