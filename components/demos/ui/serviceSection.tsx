'use client'

import Link from 'next/link';
import {
  Leaf,
  PaintRoller,
  Truck,
  Sofa,
  Sparkles,
  Hammer,
  Droplets,
  Trash2,
} from 'lucide-react';

const services = [
  {
    title: "Residential & Commercial Lawncare",
    description: "Professional lawn maintenance for homes, offices, and properties of all sizes.",
    image: "/lawncare.jpg",
    icon: Leaf,
    link: "/services/lawncare",
  },
  {
    title: "Residential & Commercial Painting",
    description: "Interior and exterior painting with high-quality finishes and expert care.",
    image: "/painting.png",
    icon: PaintRoller,
    link: "/services/painting",
  },
  {
    title: "Moving, Hauling & Recycling",
    description: "Reliable moving services and eco-friendly hauling and recycling options.",
    image: "/hauling.jpg",
    icon: Truck,
    link: "/services/movingHauling",
  },
  {
    title: "Furniture Assembly / Disassembly",
    description: "Quick and careful setup or breakdown of all types of furniture.",
    image: "/furnitureAssembly.jpg",
    icon: Sofa,
    link: "/services/furniture",
  },
  {
    title: "Residential & Commercial Cleaning",
    description: "Comprehensive cleaning tailored for homes, offices, and rental turnovers.",
    image: "/commercialCleaning.jpg",
    icon: Sparkles,
    link: "/services/cleaning",
  },
  {
    title: "Carpentry & Handyman Services",
    description: "Skilled repairs and builds for residential and commercial needs.",
    image: "/carpentry.jpg",
    icon: Hammer,
    link: "/services/carpentry",
  },
  {
    title: "Pressure Washing",
    description: "Restore your surfaces with high-power, professional pressure washing.",
    image: "/pressureWashing.jpg",
    icon: Droplets,
    link: "/services/pressureWashing",
  },
  {
    title: "Junk Removal",
    description: "Fast and affordable junk pickup and responsible disposal.",
    image: "/junkRemoval.jpg",
    icon: Trash2,
    link: "/services/junkRemoval",
  },
];

const ServiceCard = ({ title, description, image, icon: Icon, link }: any) => (
  <Link href={link} className="w-full">
    <div className="bg-white rounded-xl shadow-[0_-6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_-10px_25px_rgba(0,0,0,0.12)] p-6 transition group flex flex-col items-center text-center cursor-pointer h-full">
      {/* Image with hover overlay */}
      <div className="relative w-full h-44 rounded-md mb-10">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md z-0" />
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md z-10 group-hover:text-blue-400 transition">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Text */}
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Optional: Keep the CTA text visible */}
      <div className="text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition duration-300">
        Learn More →
      </div>
    </div>
  </Link>
);

const ServicesGrid = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        We're Here to Help with All Your Property Needs
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      We love helping people take care of their homes and businesses. Whether it&apos;s a fresh coat of paint or a full cleanup, you can count on us to treat your space like our own.
      </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
