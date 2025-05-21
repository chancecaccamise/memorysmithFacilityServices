import React from "react";

const LocationSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Google Maps Embed */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg h-[450px]">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=515+E+Waldburg+St,+Savannah,+GA+31401&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Visit Our Savannah, GA Office
          </h2>
          <p className="text-gray-700 mb-4">
          Located in the heart of Savannah, Memorysmith Facility Services is your trusted local provider for residential and commercial property maintenance. From expert lawn care and professional painting to reliable moving, hauling, and recycling, our team is here to serve the community with skilled, dependable service.
          </p>
          <p className="text-gray-700 mb-6">
          Stop by our office at 515 East Waldburg Street to learn more about our full range of services, including detailed cleaning, precision carpentry, handyman repairs, and pressure washing. Whether you&apos;re a homeowner or a business owner, we&apos;re committed to helping you maintain and enhance your property with care and craftsmanship.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-400 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
