"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useToggle } from "~/hooks";

const home_menu = [
  { name: "Home", path: "#top" },
  { name: "About", path: "#about-section" },
  { name: "Division", path: "#divisions" },
  { name: "Achievement", path: "/achievements" },
  { name: "Gallery", path: "#gallery" },
  { name: "Contact", path: "#contact" },
];

const general_menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about-section" },
  { name: "Division", path: "/subteam" },
  { name: "Achievement", path: "/#achievements" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Contact", path: "/#contact" },
];

interface HeaderProps {
  variant?: "home" | "general";
}

export default function Header({ variant = "general" }: HeaderProps) {
  const { value: isMenuOpen, toggle: toggleMenu, setFalse: closeMenu } = useToggle(false);
  const [scrolled, setScrolled] = useState(false);
  
  const header_menu = variant === "home" ? home_menu : general_menu;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (variant === "home" && path.startsWith('#')) {
      e.preventDefault();
      
      let targetPosition = 0; 
      
      if (path === '#top') {
        targetPosition = 0;
      } else {
        const targetElement = document.querySelector(path);
        if (targetElement) {
          const headerHeight = 80;
          targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        } else {
          return;
        }
      }
      
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        const easedPercentage = easeInOutCubic(percentage);
        window.scrollTo(0, startPosition + distance * easedPercentage);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
      
      closeMenu();
    }
  };

  return (
    <header
      className={clsx(
        scrolled && "bg-white/30 shadow backdrop-blur-md",
        isMenuOpen &&
          "max-lg:bg-white/30 max-lg:text-primary max-lg:backdrop-blur-md max-md:border-b",
        "fixed left-0 top-0 z-[100] w-full transition-colors duration-300 ease-in-out",
      )}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between px-4 py-2 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            className="h-16"
          >
            <span className={clsx(
              "w-10 cursor-pointer transition-colors duration-300 ease-in-out",
              scrolled || isMenuOpen ? "text-black" : variant === "home" ? "text-white" : "text-black"
            )}>
              <Logo />
            </span>
          </Link>
          <button
            className="z-50 ml-2 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-300 bg-white text-2xl text-primary shadow-lg transition hover:bg-zinc-100 lg:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <nav
          className={clsx(
            isMenuOpen ? "mt-4 h-auto border-t border-zinc-600" : "h-0",
            "easy-in-out flex flex-col overflow-hidden transition-[height] duration-500 lg:flex lg:h-auto lg:flex-row lg:space-x-6 lg:pt-0",
          )}
        >
          {header_menu.map((menuItem) => (
            <Link
              href={menuItem.path}
              key={menuItem.name}
              onClick={(e) => handleSmoothScroll(e, menuItem.path)}
              className={clsx(
                "p-4 font-medium hover:text-accent transition-colors duration-300 ease-in-out",
                scrolled || isMenuOpen ? "text-black" : variant === "home" ? "lg:text-white" : "text-black"
              )}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
