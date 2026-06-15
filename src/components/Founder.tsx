"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 80, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="relative py-24 md:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Founded &amp; Led by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                Md. Sawood Akhter
              </span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                SAWOOD AKHTAR ENTERPRISE is driven by a commitment to quality, innovation, 
                and long-term value creation. Every project is approached with a focus on 
                understanding the client&apos;s vision and translating it into robust technology.
              </p>
              <p>
                We aim to help businesses streamline operations, improve digital capabilities, 
                and adopt technology in a way that supports sustainable growth.
              </p>
            </div>
          </div>

          <div ref={imageRef}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-amber-500/20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl border border-zinc-800 bg-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-400 to-amber-400 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">SA</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Md. Sawood Akhter</h3>
                  <p className="text-sm text-zinc-500 mt-1">Founder &amp; Lead Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
