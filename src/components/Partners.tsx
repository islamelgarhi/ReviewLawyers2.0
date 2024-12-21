import React from 'react';
import { Link2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Airbnb',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
      width: 120
    },
    {
      name: 'VRBO',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/VRBO_Logo_2019.svg/2560px-VRBO_Logo_2019.svg.png',
      width: 100
    },
    {
      name: 'Booking.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png',
      width: 150
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
      width: 120
    },
    {
      name: 'Yelp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/2560px-Yelp_Logo.svg.png',
      width: 100
    },
    {
      name: 'Hostaway',
      logo: 'https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb5212502a6f119154_hostaway-logo.svg',
      width: 130
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted Compatibility & Integrations
          </h2>
          <p className="text-xl text-gray-400">
            Seamlessly integrated with all major booking and review platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Logo */}
              <div className="relative bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 group-hover:border-primary/50 transition-colors">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  style={{ width: partner.width }}
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}