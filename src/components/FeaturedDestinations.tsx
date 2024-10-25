import React from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    description: 'Experience the magic of white-washed buildings and stunning sunsets',
    price: 1299,
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    description: 'Discover tropical paradise with ancient temples and pristine beaches',
    price: 899,
  },
  {
    id: 3,
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    description: 'Adventure awaits in the majestic mountains of Switzerland',
    price: 1499,
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h2>
            <p className="text-gray-600">Explore our hand-picked destinations for your next adventure</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700">
            View all destinations <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/90">From ${destination.price}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Explore Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700">
          View all destinations <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedDestinations;