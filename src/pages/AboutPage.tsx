import React from 'react';
import { Award, Users, Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero section */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              About 20-20 Sports
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Providing high-quality sports equipment to athletes of all levels since 2010.
            </p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering athletes to reach their potential
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At 20-20 Sports, we're dedicated to providing the highest quality sports equipment that helps athletes
              of all levels achieve their goals and reach new heights in their performance.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Quality First</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We never compromise on quality. Every product we offer is carefully selected and tested
                    to ensure it meets our high standards.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Focus</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our customers are at the heart of everything we do. We're committed to providing
                    exceptional service and support.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Innovation Driven</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We constantly seek out the most innovative sports equipment to help our customers
                    stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                2020 Sports – Crafting Excellence Since 2015

                2020 Sports was founded in 2015 with a passion for sports and a vision to provide quality equipment to athletes at every level. While we initially focused on sports gear, we soon recognized a growing demand for high-quality trophies and awards.
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-gray-500">
                  What started as a small step into the trophy business quickly turned into our hallmark. With dedication and craftsmanship, we earned a name across Maharashtra as trusted trophy manufacturers. Today, we specialize in creating custom trophies tailored to every unique requirement—from school events and corporate functions to major sports tournaments.
                </p>
                <p className="text-gray-500">
                  We take pride in delivering finely finished, elegant trophies at pocket-friendly prices, ensuring both quality and customer satisfaction. At 2020 Sports, your moment of recognition becomes a masterpiece.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team of athletes"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to elevate your game?</span>
            <span className="block text-blue-200">Explore our premium sports equipment today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/equipment"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Shop Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;