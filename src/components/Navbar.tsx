"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = ["Home", "About", "Services", "Why Us", "Contact"];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">
          SOD<span className="text-amber-400">.</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href={link === "Home" ? "#" : `#${link.toLowerCase().replace(" ", "")}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/5">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
