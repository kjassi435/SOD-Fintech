"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Practical Approach",
    desc: "We build solutions that work in the real world, not just on paper.",
  },
  {
    number: "02",
    title: "Scalable by Design",
    desc: "Every system we build is designed to grow with your business.",
  },
  {
    number: "03",
    title: "Client-First Mindset",
    desc: "Your goals drive our technology choices, not the other way around.",
  },
  {
    number: "04",
    title: "Future-Ready",
    desc: "We use modern stacks and best practices to ensure long-term viability.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemsRef.current) return;

    gsap.fromTo(
      itemsRef.current.children,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
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
      id="whyus"
      className="relative py-24 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            Why SOD Fintech
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Us
            </span>
          </h2>
        </div>

        <div
          ref={itemsRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group flex gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-amber-500/30 transition-all duration-500"
            >
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-amber-400 opacity-50 group-hover:opacity-100 transition-opacity">
                {reason.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
