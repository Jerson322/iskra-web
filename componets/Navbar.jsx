"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-bold text-xl">
          Iskra
        </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 text-white text-sm">
          <li className="cursor-pointer hover:opacity-70 transition">
            Inicio
          </li>
          <li className="cursor-pointer hover:opacity-70 transition">
            Nosotros
          </li>
          <li className="cursor-pointer hover:opacity-70 transition">
            Contáctanos
          </li>
        </ul>

      </nav>
    </header>
  );
}
