"use client";

import Link from "next/link";
import Logo from "../Logo";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import { useEffect, useState } from "react";

const header_menu = [
  { name: "Division", path: "/subteam" },
  { name: "Achievement", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window) {
      document.addEventListener("scroll", () => setScrolled(!!window.scrollY), {
        passive: true,
      });
    }
  }, []);

  return (
    <header
      className={clsx(
        scrolled && "border-b border-black/20 bg-white/80 backdrop-blur-lg",
        menu &&
          "max-lg:border-black/20 max-lg:bg-white/80 max-lg:backdrop-blur-lg max-md:border-b",
        "fixed left-0 top-0 z-[100] w-full",
      )}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between px-4 py-2 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link
            href="/"
            title="DREAMAGINATION"
            className={clsx(
              !scrolled && "lg:text-white",
              !menu && !scrolled && "max-lg:text-white",
              "h-16",
            )}
          >
            <Logo />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? (
              <MdClose size={32} />
            ) : (
              <MdMenu className={clsx(!scrolled && "text-white")} size={32} />
            )}
          </button>
        </div>
        <div
          className={clsx(
            menu
              ? "h-auto max-lg:mt-4 max-lg:border-t max-lg:border-zinc-600"
              : "max-lg:h-0",
            !scrolled && !menu && "max-lg:text-white",
            !scrolled && "lg:text-white",
            "easy-in-out flex flex-col overflow-hidden transition-[height] duration-500 lg:flex lg:flex-row lg:space-x-6",
          )}
        >
          {header_menu.map((menu) => (
            <Link
              href={menu.path}
              key={menu.name}
              className="p-4 font-medium hover:text-yellow-600"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
