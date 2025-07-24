"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary shadow-lg transition-all duration-200 hover:bg-yellow-500 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={16} />
      </button>
    </div>
  );
}
