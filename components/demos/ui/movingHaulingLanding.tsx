'use client';

import React from 'react';
import Image from 'next/image';
import {
  TruckIcon,
  TrashIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function MovingHaulingLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Moving, Hauling & Recycling Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Whether you&apos;re relocating, decluttering, or managing property cleanouts, our team offers reliable moving, hauling, and eco-conscious recycling solutions for homes and businesses. We handle the heavy lifting, sort responsibly, and help restore clean, usable spaces—quickly and professionally.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <TruckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Local Moving Support:</strong> Need help getting from point A to B? We assist with residential and small business moves—including furniture, boxes, and equipment.
              </span>
            </li>
            <li className="flex items-start">
              <TrashIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Hauling & Junk Removal:</strong> We clear out unwanted items, furniture, appliances, and debris—leaving your property clean and ready for what’s next.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Eco-Friendly Recycling:</strong> We sort and dispose of materials responsibly, diverting usable items and recyclables away from landfills whenever possible.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/hauling.jpg" // Update this to your actual hauling/recycling image
            alt="Moving and hauling team at work"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
