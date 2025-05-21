'use client';

import React from 'react';
import Image from 'next/image';
import {
  TrashIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function JunkRemovalLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Fast, Reliable Junk Removal Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Clear out unwanted items without the hassle. We provide full-service junk removal for homes, offices, rental properties, and job sites—hauling away furniture, appliances, debris, and more. Whether you&apos;re decluttering, preparing for a move, or handling a cleanout, our team ensures a clean slate quickly and responsibly.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <TrashIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Household & Office Cleanouts:</strong> We remove old furniture, boxes, electronics, and bulky items from garages, attics, basements, or commercial spaces.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Safe & Responsible Disposal:</strong> We sort and dispose of materials properly—recycling what we can and keeping your property protected.
              </span>
            </li>
            <li className="flex items-start">
              <ClockIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Same-Day & Scheduled Service:</strong> Need it gone fast? We offer flexible scheduling and quick turnaround times to meet your timeline.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/junkRemoval.jpg" // Update with actual image path
            alt="Junk removal in progress"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
