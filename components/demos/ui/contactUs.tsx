'use client';

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useForm } from '@formspree/react';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mbloejbz");

  return (
    <div id="contact" className="relative isolate bg-gray-50 pt-36 pb-20 scroll-mt-36 min-h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative px-6 pt-8 pb-20 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg text-gray-600">
            Looking for reliable property maintenance in <strong>Savannah, GA?</strong> Whether you need residential or commercial lawn care, painting, moving and hauling, cleaning, carpentry, handyman services, or pressure washing — our skilled and insured team is ready to help.
              <br /><br />
              Reach out today for a free estimate and let&apos;s take care of your property the right way.
            </p>
            <dl className="mt-10 space-y-4 text-base text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  515 East Waldburg Street<br />
                  Savannah, GA 31401
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+19124641185" className="hover:text-blue-500">
                    +1 (912) 464-1185
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:MFSSavannah@gmail.com" className="hover:text-blue-500">
                  MFSSavannah@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full max-w-sm mx-auto lg:max-w-md bg-white text-gray-900 p-8 mt-12 lg:ml-12 rounded-lg shadow-lg">
          {state.succeeded ? (
            <div className="p-6 text-center rounded-lg bg-green-100 border border-blue-400">
              <h3 className="text-2xl font-semibold text-gray-700">Thanks for reaching out!</h3>
              <p className="mt-2 text-lg text-gray-600">We will be in contact with you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900 text-left mb-6">Schedule a Free Consultation Now</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 pb-2">First name</label>
                  <input id="first-name" name="first-name" type="text" placeholder="John" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 pb-2">Last name</label>
                  <input id="last-name" name="last-name" type="text" placeholder="Doe" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 pb-2">Phone number</label>
                  <input id="phone-number" name="phone-number" type="tel" placeholder="(912) 464-1185" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 pb-2">Email</label>
                  <input id="email" name="email" type="email" placeholder="johndoe@gmail.com" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-900 pb-2">Address</label>
                  <input id="address" name="address" type="text" placeholder="123 Main St" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
                <div>
                  <label htmlFor="zip-code" className="block text-sm font-semibold text-gray-900 pb-2">Zip Code</label>
                  <input id="zip-code" name="zip-code" type="text" placeholder="31401" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 pb-2">Select a Service</label>
                <select id="service" name="service" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-blue-400">
                  <option value="" disabled selected>Select a service</option>
                  <option value="junk-removal">Junk Removal</option>
                  <option value="residential-commercial-lawncare">Residential + Commecial Lawncare</option>
                  <option value="residential-commercial-painting">Residential + Commercial Painting</option>
                  <option value="moving-hauling-recycling">Reliable Moving, Hauling + Recycling</option>
                  <option value="furniture-assembly-disassembly">Furniture Reassembly + Disassembly</option>
                  <option value="residential-commercial-cleaning">Residential + Commercial Cleaning</option>
                  <option value="carpentry-handyman">Carpentry + Handyman</option>
                  <option value="pressure-washing">Pressure Washing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 pb-2">Message</label>
                <textarea id="message" name="message" placeholder="Write your message here..." rows={4} required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400"></textarea>
              </div>

              <button type="submit" disabled={state.submitting} className="w-full bg-blue-400 py-2 rounded-md text-white font-semibold hover:bg-blue-500">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Embed Section */}
      <div className="mt-20 px-4 lg:px-20">
        <iframe
          title="Memorysmith Facility Services"
          src="https://www.google.com/maps?q=515+E+Waldburg+St,+Savannah,+GA+31401&output=embed"
          className="w-full h-[400px] rounded-lg shadow-md border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
