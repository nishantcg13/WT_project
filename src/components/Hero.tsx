import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-screen max-h-[800px]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
              Premium Sports Equipment for Champions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-300">
              Discover professional-grade equipment that enhances your performance and takes your game to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
              <Link
                to="/equipment"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;