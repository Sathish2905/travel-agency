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
            <a href="#" className="text-secondary-600 hover:text-primary-500">Flights</a>
            <a href="#" className="text-secondary-600 hover:text-primary-500">Hotels</a>
            <a href="#" className="text-secondary-600 hover:text-primary-500">Trains</a>
            <a href="#" className="text-secondary-600 hover:text-primary-500">Cabs</a>
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 px-4 py-2 text-secondary-600 hover:text-primary-500">
                <User className="w-5 h-5" />
                Login
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all">
                <Phone className="w-5 h-5" />
                Support
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
              <a href="#" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Flights</a>
              <a href="#" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Hotels</a>
              <a href="#" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Trains</a>
              <a href="#" className="block px-3 py-2 text-secondary-600 hover:text-primary-500">Cabs</a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <button className="flex items-center gap-2 px-4 py-2 text-secondary-600 hover:text-primary-500">
                  <User className="w-5 h-5" />
                  Login
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600">
                  <Phone className="w-5 h-5" />
                  Support
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