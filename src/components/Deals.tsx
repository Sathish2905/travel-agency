import React from 'react';
import { Timer, Tag, Percent } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: 'Last Minute Paris Getaway',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    originalPrice: 1299,
    discountedPrice: 899,
    discount: 30,
    validUntil: '2024-04-30',
    description: '4 nights in a boutique hotel, Seine river cruise, and skip-the-line Eiffel Tower access',
  },
  {
    id: 2,
    title: 'Dubai Luxury Package',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    originalPrice: 2499,
    discountedPrice: 1749,
    discount: 25,
    validUntil: '2024-05-15',
    description: '5 nights in a 5-star hotel, desert safari, and Burj Khalifa experience',
  },
  {
    id: 3,
    title: 'Tokyo Spring Special',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
    originalPrice: 1899,
    discountedPrice: 1499,
    discount: 20,
    validUntil: '2024-05-31',
    description: '6 nights during cherry blossom season, guided tours, and bullet train passes',
  },
];

const Deals = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Today's Hot Deals</h2>
            <p className="text-secondary-600">Grab these limited-time offers before they're gone</p>
          </div>
          <Timer className="w-12 h-12 text-primary-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Percent className="w-4 h-4" />
                  <span>{deal.discount}% OFF</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{deal.title}</h3>
                <p className="text-secondary-600 mb-4">{deal.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="text-sm text-secondary-500 line-through">${deal.originalPrice}</span>
                    <span className="ml-2 text-xl font-bold text-primary-500">${deal.discountedPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-secondary-600">
                    <Tag className="w-4 h-4" />
                    <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>

                <button className="w-full py-3 px-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors">
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

export default Deals;