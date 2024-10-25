import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import PopularPackages from './components/PopularPackages';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <PopularPackages />
        <Deals />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;