"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !statsRef.current) return;

    gsap.fromTo(
      contentRef.current.querySelectorAll(".reveal"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      statsRef.current.children,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-zinc-950"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={contentRef}>
          <p className="reveal text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            About Us
          </p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            We Build Technology That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Drives Business Growth
            </span>
          </h2>
          <p className="reveal mt-6 text-lg text-zinc-400 max-w-3xl leading-relaxed">
            SAWOOD AKHTAR ENTERPRISE is an IT development and consultancy company focused on 
            delivering practical, scalable, and efficient technology solutions for modern businesses. 
            We specialize in software development, digital transformation, and IT consulting services 
            tailored to meet the unique needs of each client.
          </p>
          <p className="reveal mt-4 text-lg text-zinc-400 max-w-3xl leading-relaxed">
            Our approach is centered on combining technical expertise with a clear understanding 
            of business goals to build reliable and future-ready systems.
          </p>
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
