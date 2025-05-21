'use client';

import React from 'react';
import Image from 'next/image';
import {
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function CleaningLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Residential & Commercial Cleaning Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Keep your space spotless and guest-ready with our reliable cleaning services. From homes and offices to Airbnb properties, our experienced team delivers detailed, professional cleanings tailored to your needs. With over 30 short-term rentals cleaned, we know how to make every room shine.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Detailed Residential Cleaning:</strong> Bathrooms, kitchens, bedrooms and more — we make your home feel fresh, clean, and cared for.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Office & Commercial Spaces:</strong> Maintain a clean, professional environment that’s inviting for both staff and visitors.
              </span>
            </li>
            <li className="flex items-start">
              <ClockIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Airbnb Turnovers & Short-Term Rentals:</strong> Fast, reliable cleanings between guests — done with attention to detail and tight timelines.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/commercialCleaning.jpg" // Replace with your actual image path
            alt="Professional home and Airbnb cleaning service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
