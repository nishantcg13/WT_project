import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About 20-20 Sports</h3>
            <p className="text-gray-400 mb-4">
              20-20 Sports provides premium sports equipment and trophies. We are renowned trophy manufacturers,
              delivering custom designs in any size and shape at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-400 hover:text-white transition-colors">Equipment</Link>
              </li>
              <li>
                <Link to="/trophies" className="text-gray-400 hover:text-white transition-colors">Trophies</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/equipment?category=Trophies" className="text-gray-400 hover:text-white transition-colors">Trophies</Link>
              </li>
              <li>
                <Link to="/equipment?category=Cricket" className="text-gray-400 hover:text-white transition-colors">Cricket</Link>
              </li>
              <li>
                <Link to="/equipment?category=Football" className="text-gray-400 hover:text-white transition-colors">Football</Link>
              </li>
              <li>
                <Link to="/equipment?category=Basketball" className="text-gray-400 hover:text-white transition-colors">Basketball</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Rajgurunagar, Rakshewadi Road - Behind S.T stand</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-400">2020sports@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 20-20 Sports. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;