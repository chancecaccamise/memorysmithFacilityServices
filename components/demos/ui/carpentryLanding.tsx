'use client';

import React from 'react';
import Image from 'next/image';
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function CarpentryLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Carpentry & Handyman Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Transform your home or business with our expert carpentry and handyman services. From detailed woodwork to essential repairs, we bring craftsmanship, care, and lasting results to every project. Whether you need trim installed, shelving built, or general fixes handled, we’ve got it covered.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <WrenchScrewdriverIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Custom Carpentry Projects:</strong> Built-in shelving, accent walls, and wood features crafted to fit your space and style.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Repairs & Installations:</strong> Door, trim, and drywall fixes — plus small upgrades that make a big impact.
              </span>
            </li>
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Reliable Handyman Help:</strong> Trust our skilled team to handle the tasks that keep your property running smoothly.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/carpentry.jpg" // Replace with your actual image path
            alt="Custom carpentry project in progress"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
