'use client';

import React from 'react';
import Image from 'next/image';
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function FurnitureLanding() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Furniture Disassembly & Reassembly Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Make moving, remodeling, or room setup stress-free with our expert furniture disassembly and reassembly services. Whether you&apos;re relocating or reorganizing, we handle beds, desks, shelving units, and more — carefully taking each piece apart and putting it back together with precision and care.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <WrenchScrewdriverIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Disassembly for Moving:</strong> We safely break down furniture to make transport easier and prevent damage during the move.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Sturdy, Aligned Reassembly:</strong> Everything is reassembled on-site with careful alignment, secure hardware, and full functionality.
              </span>
            </li>
            <li className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-blue-400 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Furniture Setup Support:</strong> Save time and effort with a team that can handle the heavy lifting and complex builds—no missing screws or guesswork.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/furnitureAssembly.jpg" // Replace with your actual image path
            alt="Furniture disassembly and reassembly service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
