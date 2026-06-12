"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "./ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !ctaRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current.querySelectorAll(".line"),
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(
      ctaRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
      "-=0.5"
    );

    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0.8,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <ThreeBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div ref={textRef}>
          <div className="line mb-4">
            <span className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-amber-400/80 font-medium">
              IT Development &amp; Consultancy
            </span>
          </div>
          <div className="line">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
              SOD{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                Solutions
              </span>
            </h1>
          </div>
          <div className="line mt-6 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Practical, scalable, and efficient technology solutions for modern businesses.
              We build reliable systems that drive real growth.
            </p>
          </div>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-amber-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-medium text-sm hover:border-zinc-500 hover:text-white transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
