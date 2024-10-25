import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Mediterranean Dream',
    duration: '10 days',
    groupSize: '12-15',
    location: 'Greece & Italy',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713',
    highlights: ['Athens Tour', 'Santorini Sunset', 'Rome Colosseum', 'Venice Canals'],
  },
  {
    id: 2,
    title: 'Asian Adventure',
    duration: '14 days',
    groupSize: '10-12',
    location: 'Thailand & Vietnam',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
    highlights: ['Bangkok Markets', 'Phi Phi Islands', 'Ha Long Bay', 'Hanoi Old Quarter'],
  },
  {
    id: 3,
    title: 'African Safari',
    duration: '8 days',
    groupSize: '8-10',
    location: 'Tanzania',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    highlights: ['Serengeti Safari', 'Ngorongoro Crater', 'Maasai Village', 'Lake Manyara'],
  },
];

const PopularPackages = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Travel Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated travel experiences designed to create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold text-blue-600">${pkg.price}</span>
                  <span className="text-sm text-gray-600">/person</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 col-span-2">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600">• {highlight}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;