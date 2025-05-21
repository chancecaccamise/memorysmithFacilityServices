import React, { useEffect } from "react";

// Extend the window object to avoid TypeScript error
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramGallery = () => {
  const posts = [
    "https://www.instagram.com/p/DITjwKsxImm/?img_index=2",
    "https://www.instagram.com/p/DITjwKsxImm/?img_index=2",
    "https://www.instagram.com/p/DITjwKsxImm/?img_index=2",
  ];

  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {posts.map((url, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-md bg-white"
        >
          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              width: "100%",
              margin: 0,
              padding: 0,
              border: 0,
              background: "white",
            }}
          ></blockquote>
        </div>
      ))}
    </div>
  );
};

export default InstagramGallery;
