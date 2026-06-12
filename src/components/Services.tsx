"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Software Development",
    desc: "Custom web and mobile applications built with modern stacks to solve real business problems.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Digital Transformation",
    desc: "Modernize legacy systems and workflows with cutting-edge digital solutions.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology guidance to align your infrastructure with business objectives.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud architecture, migration, and infrastructure management.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <path d="M8 16h.01" />
        <path d="M8 20h.01" />
        <path d="M12 18h.01" />
        <path d="M12 22h.01" />
        <path d="M16 16h.01" />
        <path d="M16 20h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { y: 80, opacity: 0, rotateX: 10 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Services
            </span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-transparent to-amber-500/0 group-hover:from-indigo-500/10 group-hover:to-amber-500/10 transition-all duration-500" />
              <div className="relative z-10">
                <div className="text-indigo-400 group-hover:text-amber-400 transition-colors duration-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
