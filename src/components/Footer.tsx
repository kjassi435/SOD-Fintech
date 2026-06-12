"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#whyus" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "/terms" },
];

const services = [
  "Software Development",
  "Digital Transformation",
  "IT Consulting",
  "Cloud Solutions",
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative border-t border-zinc-800 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 fade-item">
            <span className="text-3xl font-bold tracking-tight text-white">
              SOD<span className="text-amber-400">.</span>
            </span>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              IT Development &amp; Consultancy — building practical, scalable, and
              future-ready technology solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 fade-item">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3 fade-item">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-zinc-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 fade-item">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-zinc-500">
              <p>
                <span className="block text-zinc-400">Email</span>
                <a
                  href="mailto:hello@sodsolutions.dev"
                  className="hover:text-amber-400 transition-colors"
                >
                  hello@sodsolutions.dev
                </a>
              </p>
              <p>
                <span className="block text-zinc-400">Phone</span>
                <span>+91 12345 67890</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider with 3D-ish glow line */}
        <div className="relative my-12 fade-item">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-indigo-500/0 via-amber-500/50 to-indigo-500/0 blur-sm" />
        </div>

        {/* Bottom bar */}
        <div className="fade-item flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} SOD Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-zinc-400 transition-colors">
              Terms &amp; Conditions
            </a>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span>Built with innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
