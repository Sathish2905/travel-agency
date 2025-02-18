import React, { useState } from 'react';
import { Menu, X, User, Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-primary-500">TravelPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-secondary-600 hover:text-primary-500">Home</a>
            <div className="relative group">
              <button className="text-secondary-600 hover:text-primary-500 flex items-center gap-1">
                Holidays
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="/destinations/international" className="block px-4 py-2 text-secondary-600 hover:text-primary-500 hover:bg-gray-50">International</a>
                <a href="/destinations/domestic" className="block px-4 py-2 text-secondary-600 hover:text-primary-500 hover:bg-gray-50">Domestic</a>
              </div>
            </div>
            <a href="/groupTour" className="text-secondary-600 hover:text-primary-500">Group Tour</a>
            <a href="#" className="text-secondary-600 hover:text-primary-500">Tour Packages</a>
            <a href="/visa" className="text-secondary-600 hover:text-primary-500">Visa</a>
            <a href="/contact" className="text-secondary-600 hover:text-primary-500">Contact Us</a>
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all">
                <Phone className="w-5 h-5" />
                +919176876408
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-600 hover:text-primary-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Home</a>
              <div className="relative">
                <button className="w-full text-left px-3 py-2 text-secondary-600 hover:text-primary-500 flex items-center justify-between">
                  Holidays
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="pl-6 space-y-1">
                  <a href="/destinations/international" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">International</a>
                  <a href="/destinations/domestic" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Domestic</a>
                </div>
              </div>
              <a href="/groupTour" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Group Tour</a>
              <a href="#" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Tour Packages</a>
              <a href="/visa" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Visa</a>
              <a href="/contact" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Contact Us</a>
              <div className="px-3 py-2">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all">
                  <Phone className="w-5 h-5" />
                  +919176876408
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;