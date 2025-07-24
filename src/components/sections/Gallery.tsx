"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

const categories = ["All", "Competition", "Workshop", "Team Building"];

const photos = [
  {
    src: "/gallery/1.jpg",
    alt: "1",
    caption: "Competition",
    category: "Competition",
    year: "2024",
    title: "Dreamagination - Seleksi Wilayah KRTI 2024",
  },
  { 
    src: "/gallery/2.jpeg", 
    alt: "2", 
    caption: "Workshop", 
    category: "Workshop",
    year: "2024",
    title: "TD Division - Seleksi Wilayah KRTI 2024",
  },
  { 
    src: "/gallery/3.jpeg", 
    alt: "3", 
    caption: "Team Building", 
    category: "Team Building",
    year: "2024",
    title: "LELA Division - Seleksi Wilayah KRTI 2024",
  },
  {
    src: "/gallery/4.jpg",
    alt: "4",
    caption: "Competition",
    category: "Competition",
    year: "2024",
    title: "LELA Division - Seleksi Wilayah KRTI 2024",
  },
  { 
    src: "/gallery/5.jpg", 
    alt: "5", 
    caption: "Workshop", 
    category: "Workshop",
    year: "2024",
    title: "TD Division - Seleksi Wilayah KRTI 2024",
  },
  { 
    src: "/gallery/6.jpg", 
    alt: "6", 
    caption: "Team Building", 
    category: "Team Building",
    year: "2024",
    title: "TD Division - Seleksi Wilayah KRTI 2024",
  },
  {
    src: "/gallery/7.jpg",
    alt: "7",
    caption: "Competition",
    category: "Competition",
    year: "2024",
    title: "TD Division - Seleksi Wilayah KRTI 2024",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <section className="py-16">
      <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-bold uppercase shadow-md transition hover:scale-105 hover:bg-accent hover:text-white ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-white text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo, index) => (
          <ScrollAnimationWrapper
            key={index}
            animation="scaleIn"
            delay={index * 0.1}
            threshold={0.1}
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-full w-full bg-zinc-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="scale-110 transition-transform duration-300 ease-in-out group-hover:scale-100 object-cover"
                />
              </div>
              {/* Hover overlay with title */}
              <div className="absolute bottom-0 w-full bg-black/70 p-4 opacity-0 transform translate-y-full transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-sm font-semibold text-accent">
                  {photo.year}
                </span>
                <h3 className="text-white text-sm font-medium leading-tight">
                  {photo.title}
                </h3>
              </div>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </section>
  );
}
