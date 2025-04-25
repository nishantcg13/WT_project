import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Have questions about our products or services? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info and Form */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              We're always happy to hear from you! Please feel free to contact us using any of the methods below,
              or fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-gray-700">
                  <p className="font-medium">Our Address</p>
                  <p>123 Sport Street, Athletica, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-gray-700">
                  <p className="font-medium">Email Us</p>
                  <p>info@sportelite.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-gray-700">
                  <p className="font-medium">Call Us</p>
                  <p>(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-gray-700">
                  <p className="font-medium">Customer Support Hours</p>
                  <p>Monday - Friday: 9AM - 6PM EST</p>
                  <p>Saturday: 10AM - 4PM EST</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Customer service team"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Visit Our Store</h2>
          <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden shadow-lg">
            {/* Replace with your map or an image of a map */}
            <img 
              src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Store location map" 
              className="w-full h-full object-center object-cover" 
            />
          </div>
          <div className="mt-6 text-center text-gray-600">
            <p>We're conveniently located in downtown Athletica, with plenty of parking available.</p>
            <p className="mt-2">Opening Hours: Monday to Saturday, 9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;