'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/porchBeforeGallery.jpg', alt: 'Front porch before restoration' },
  { src: '/porchAfterGallery.jpg', alt: 'Front porch after restoration' },
  { src: '/closet1Gallery.jpg', alt: 'Closet before organizing' },
  { src: '/closet2Gallery.jpg', alt: 'Closet after organizing' },
  { src: '/cleaning1Gallery.jpg', alt: 'Cleaned kitchen space' },
  { src: '/cleaning2Gallery.jpg', alt: 'Sparkling floors and windows' },
  { src: '/cleaning3Gallery.jpg', alt: 'Polished hardwood floors' },
  { src: '/cleaning4Gallery.jpg', alt: 'Living room cleaned and staged' },
  { src: '/cleaning5Gallery.jpg', alt: 'Clean dining area' },
  { src: '/cleaning6Gallery.jpg', alt: 'Freshly cleaned home interior' },
  { src: '/powerwashBeforeGallery.jpg', alt: 'Walkway before pressure washing' },
  { src: '/powerwashAfterGallery.jpg', alt: 'Walkway after pressure washing' },
  { src: '/leantoBeforeGallery.jpg', alt: 'Lean-to structure before work' },
  { src: '/leantoAfterGallery.jpg', alt: 'Lean-to structure after work' },
  { src: '/fenceBeforeGallery.jpg', alt: 'Fence before staining' },
  { src: '/fenceAfterGallery.jpg', alt: 'Fence after staining' },
  { src: '/porch2BeforeGallery.jpg', alt: 'Porch pre-renovation' },
  { src: '/porch2AfterGallery.jpg', alt: 'Porch post-renovation' },
  { src: '/sodGallery.jpg', alt: 'Fresh sod installation' },
  { src: '/sod2Gallery.jpg', alt: 'Completed lawn transformation' },
  { src: '/stoneBeforeGallery.jpg', alt: 'Stone path before cleaning' },
  { src: '/stoneAfterGallery.jpg', alt: 'Stone path after cleaning' },
  { src: '/washerGallery.jpg', alt: 'Washer setup in laundry room' },
  { src: '/painting1Gallery.jpg', alt: 'Interior painting project' },
  { src: '/porch3Galllery.jpg', alt: 'Updated outdoor space' },
  { src: '/cleaning7Gallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/stairsBeforeGallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/stairsAfterGallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/trimBeforeGallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/trimAfterGallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/ovenBeforeGallery.jpg', alt: 'Bright, spotless living room' },
  { src: '/ovenAfterGallery.jpg', alt: 'Bright, spotless living room' },
];

export default function GallerySection() {
  return (
    <section className="bg-gray-50 pt-52 pb-24 px-6 lg:px-8 scroll-mt-36 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Project Highlights</h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore the homes and businesses we&apos;ve helped transform — from full-scale renovations to expert painting, pressure washing, junk removal, lawn care, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600} // Instagram images are usually 1080px square; this keeps them responsive
              height={600}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
