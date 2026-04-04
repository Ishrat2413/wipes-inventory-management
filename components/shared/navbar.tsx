"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const hasSolidBackground = !isHome || isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full ${
        hasSolidBackground
          ? "border-b border-black/10 bg-white/20 backdrop-blur"
          : "bg-transparent"
      } transition-colors duration-300`}>
      <nav
        className={`mx-5 md:mx-11.5 grid grid-cols-3 items-center py-4 ${
          hasSolidBackground ? "text-(--text-primary)" : "text-white"
        } transition-colors duration-300`}>
        <button
          className={`justify-self-start text-sm font-medium uppercase tracking-[0.3em] transition-colors ${
            hasSolidBackground
              ? "text-(--text-primary)/80 hover:text-(--text-primary)"
              : "text-white/90 hover:text-white"
          }`}>
          Menu
        </button>

        <span className='justify-self-center font-heading text-2xl leading-none'>
          Zilky Wipes
        </span>

        <button
          className={`justify-self-end text-sm font-medium uppercase tracking-[0.3em] transition-colors ${
            hasSolidBackground
              ? "text-(--text-primary)/80 hover:text-(--text-primary)"
              : "text-white/90 hover:text-white"
          }`}>
          Shop
        </button>
      </nav>
    </header>
  );
}
