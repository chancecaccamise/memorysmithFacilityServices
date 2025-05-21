'use client';

import React from 'react';
import Image from 'next/image';
import {
    BeakerIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function PressureWashingLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pressure Washing Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Restore your property&apos;s curb appeal with professional pressure washing for homes and businesses. We deep-clean driveways, patios, siding, and more—removing dirt, mold, algae, and stubborn stains with safe, powerful equipment.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <BeakerIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Surface Cleaning:</strong> Brighten concrete, brick, wood, and vinyl by eliminating built-up grime, grease, and mildew.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Safe & Effective Methods:</strong> We use the right techniques for each material to avoid damage and ensure lasting results.
              </span>
            </li>
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Ideal for Pre-Sale & Seasonal Refresh:</strong> Get your property ready for buyers, guests, or spring with a clean, polished exterior.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/pressureWashing.jpg" // Replace with actual pressure washing image path
            alt="Pressure washing a driveway"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
