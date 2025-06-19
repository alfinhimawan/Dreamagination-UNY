"use client";

import clsx from "clsx";
import Image from "next/image";

export default function SponsorGrid() {
  const photos = [
    { src: "/sponsor/sponsor1.png", alt: "Sponsor 1" },
    { src: "/sponsor/sponsor2.png", alt: "Sponsor 2" },
    { src: "/sponsor/sponsor5.png", alt: "Sponsor 5" },
    { src: "/sponsor/sponsor6.png", alt: "Sponsor 6" },
    { src: "/sponsor/sponsor3.png", alt: "Sponsor 3" },
    { src: "/sponsor/sponsor4.png", alt: "Sponsor 4" },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:px-12 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo, index) => (
        <div className="aspect-[4/3] w-full" key={index}>
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-200 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
