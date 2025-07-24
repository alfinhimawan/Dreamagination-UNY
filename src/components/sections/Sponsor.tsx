"use client";

import Image from "next/image";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

export default function SponsorGrid() {
  const sponsors = [
    { src: "/sponsor/sponsor1.png", alt: "Sponsor 1" },
    { src: "/sponsor/sponsor2.png", alt: "Sponsor 2" },
    { src: "/sponsor/sponsor3.png", alt: "Sponsor 3" },
    { src: "/sponsor/sponsor4.png", alt: "Sponsor 4" },
    { src: "/sponsor/sponsor5.png", alt: "Sponsor 5" },
    { src: "/sponsor/sponsor6.png", alt: "Sponsor 6" },
  ];

  // Triple the sponsors for smooth infinite scroll
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
      <div className="relative">
        {/* Clean divider line at top */}
        <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mb-8" />
        
        {/* Minimal fade overlays */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent" />
        
        {/* Clean scrolling strip */}
        <div className="flex animate-marquee items-center py-6">
          {extendedSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 group"
            >
              {/* Minimal logo container */}
              <div className="flex h-12 w-28 items-center justify-center transition-all duration-300 group-hover:scale-110 relative">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={100}
                  height={40}
                  style={{ objectFit: "contain" }}
                  className="filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 max-w-full max-h-full"
                />
              </div>
              
              {/* Subtle bottom accent line on hover */}
              <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 transition-transform duration-300 group-hover:scale-x-100 mt-2" />
            </div>
          ))}
        </div>

        {/* Clean divider line at bottom */}
        <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mt-8" />

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </ScrollAnimationWrapper>
  );
}
