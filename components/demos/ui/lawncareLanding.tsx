'use client';

import React from 'react';
import Image from 'next/image';
import {
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function PaintingLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Interior & Exterior Painting Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Give your home or business a fresh, professional look with our expert painting services. We specialize in residential and commercial projects of all sizes, offering high-quality finishes, clean lines, and long-lasting results. Whether you&apos;re upgrading curb appeal or refreshing indoor spaces, our skilled team delivers detail-oriented work you can count on.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <PaintBrushIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Interior & Exterior Painting:</strong> Transform walls, siding, trim, and more with expert prep, priming, and smooth, durable finishes.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Residential & Commercial Expertise:</strong> From single rooms to full buildings, we tailor every project to your property’s needs and schedule.
              </span>
            </li>
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Clean, Hassle-Free Results:</strong> We protect your property, minimize disruption, and leave every space looking polished and professional.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/painting.png" // Make sure to replace this with your actual image path
            alt="Professional painting services in action"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
