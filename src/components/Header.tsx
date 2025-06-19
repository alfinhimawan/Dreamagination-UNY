"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";

const header_menu = [
  { name: "Division", path: "/subteam" },
  { name: "Achivement", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-black/20 bg-white/80 backdrop-blur-lg">
      <div className="container flex flex-col justify-between px-4 py-2 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" title="DREAMAGINATION" className="h-16">
            <Logo />
          </Link>
          <button onClick={() => setMenu(!menu)}>
            {menu ? (
              <MdClose size={32} aria-label="Close" />
            ) : (
              <MdMenu className="lg:hidden" size={32} aria-label="Menu" />
            )}
          </button>
        </div>
        <div
          className={clsx(
            menu ? "mt-4 h-auto border-t border-zinc-600" : "h-0",
            "easy-in-out flex flex-col overflow-hidden transition-[height] duration-500 lg:flex lg:h-auto lg:flex-row lg:space-x-6 lg:pt-0",
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
