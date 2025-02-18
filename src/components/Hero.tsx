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
      </div>
    </div>
  );
};

export default Hero;