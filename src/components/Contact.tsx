"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (!formRef.current) return;

    gsap.fromTo(
      formRef.current.querySelectorAll(".field"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-zinc-950"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Great
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="field grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="field">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
            />
          </div>
          <div className="field">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-amber-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent! ✓"
                : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
