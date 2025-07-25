"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Logo from "../ui/Logo";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

const footer_menu = [
  { name: "Home", path: "#top" },
  { name: "About", path: "#about-section" },
  { name: "Division", path: "#divisions" },
  { name: "Achievement", path: "/achievements" },
  { name: "Gallery", path: "#gallery" },
  { name: "Contact", path: "#contact" },
];

const social_links = [
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/dreamagination.uny" },
  { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@TimRobotTerbangUNY" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/company/dreamagination" },
  { name: "WhatsApp", icon: IoLogoWhatsapp, url: "https://wa.me/+6281234567890" },
];

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Only handle smooth scroll for anchor links
    if (path.startsWith('#')) {
      e.preventDefault();
      
      let targetPosition = 0; // Default to top
      
      // Handle special case for #top (scroll to top)
      if (path === '#top') {
        targetPosition = 0;
      } else {
        // Handle regular anchor links
        const targetElement = document.querySelector(path);
        if (targetElement) {
          const headerHeight = 80; // Approximate header height
          targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        } else {
          return; // Element not found, exit
        }
      }
      
      // Enhanced smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration in milliseconds
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        const easedPercentage = easeInOutCubic(percentage);
        window.scrollTo(0, startPosition + distance * easedPercentage);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-2">
          
          {/* Brand & Description */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-3">
                  <Logo />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent">Dreamagination</h3>
                  <p className="text-neutral/80 text-sm">Tim Robot Terbang UNY</p>
                </div>
              </div>
              <p className="text-neutral/90 text-sm leading-relaxed mb-6">
                Divisi Robotika UNY yang fokus kepada riset tentang wahana UAV 
                (Unmanned Aerial Vehicle) atau pesawat tanpa awak. Berdiri sejak 2015.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-start text-neutral/80 text-sm">
                  <FaMapMarkerAlt className="mr-2 mt-1 text-accent flex-shrink-0" />
                  <span>Fakultas Teknik, UNY, Sleman, DIY 55281</span>
                </div>
                <div className="flex items-center text-neutral/80 text-sm">
                  <FaMailBulk className="mr-2 text-accent" />
                  <span>dreamagination@uny.ac.id</span>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Quick Links */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold text-accent mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footer_menu.map((menuItem) => (
                  <li key={menuItem.name}>
                    <Link 
                      className="text-neutral/80 hover:text-accent transition-colors duration-200 text-sm" 
                      href={menuItem.path}
                      onClick={(e) => handleSmoothScroll(e, menuItem.path)}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Community Partners */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold text-accent mb-6">Our Partners</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Image src="/infinite.png" width={32} height={32} alt="Infinite Learning" />
                </div>
                <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Image src="/robotika.svg" width={32} height={32} alt="Robotika" />
                </div>
                <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Image src="/restek.png" width={32} height={22} alt="Restek" />
                </div>
                <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Image src="/uny.png" width={32} height={32} alt="UNY" />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <ScrollAnimationWrapper animation="fadeIn" delay={0.3}>
            <div className="flex flex-col md:flex-row justify-between items-center text-neutral/70 text-sm">
              <p className="mb-4 md:mb-0">
                © {new Date().getFullYear()} Dreamagination UNY. All rights reserved.
              </p>
              <p>
                Part of Robotika UNY | Made with ❤️
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </footer>
  );
}
