import React from 'react';
import { Search, Plane, Hotel, Train, Car } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Travel Smarter, Go Further
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center max-w-2xl text-white/90">
          Book flights, hotels, trains and cabs at the best prices
        </p>
        
        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white">
              <Plane className="w-5 h-5" /> Flights
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-secondary-600 hover:bg-gray-100">
              <Hotel className="w-5 h-5" /> Hotels
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-secondary-600 hover:bg-gray-100">
              <Train className="w-5 h-5" /> Trains
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-secondary-600 hover:bg-gray-100">
              <Car className="w-5 h-5" /> Cabs
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="From where?"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="To where?"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
              />
            </div>
            <div className="flex-1">
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;