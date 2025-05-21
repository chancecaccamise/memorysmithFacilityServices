'use client';

import React from 'react';
import Image from 'next/image';
import {
  SunIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function LawncareLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Residential & Commercial Lawn Care
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our expert lawn care services keep your property looking pristine year-round. From routine mowing and edging to fertilization, weed control, and seasonal cleanups, we create lush, healthy landscapes that make a lasting impression. With custom maintenance plans designed to enhance curb appeal and promote long-term turf health, we ensure your outdoor space stays vibrant and well-maintained. Whether you're a homeowner or business owner, our reliable team delivers consistent, high-quality care you can count on.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <SunIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Routine Mowing & Edging:</strong> Maintain a clean, sharp look with weekly or bi-weekly lawn service.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Fertilization & Weed Control:</strong> Encourage healthy turf growth and eliminate unwanted weeds with seasonal treatments.
              </span>
            </li>
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Seasonal Cleanups:</strong> Keep your property tidy and vibrant with spring, fall, and storm-related cleanup services.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/lawncare.jpg" // Replace with your actual lawncare image path
            alt="Lawncare team working on residential yard"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
