"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using SAWOOD AKHTAR ENTERPRISE's services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our services.",
  },
  {
    title: "2. Services Description",
    content:
      "SAWOOD AKHTAR ENTERPRISE provides technology consulting services including but not limited to:",
    list: [
      "Cloud infrastructure design and implementation",
      "Artificial Intelligence and Machine Learning solutions",
      "Cybersecurity consulting and implementation",
      "Digital transformation strategy and execution",
      "Custom software development and integration",
    ],
    extra:
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.",
  },
  {
    title: "3. User Accounts and Registration",
    content:
      "To access certain features of our services, you may be required to create an account. You agree to:",
    list: [
      "Provide accurate, current, and complete information",
      "Maintain and promptly update your account information",
      "Maintain the security of your password and account",
      "Accept responsibility for all activities under your account",
      "Notify us immediately of any unauthorized use",
    ],
    extra:
      "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
  },
  {
    title: "4. Payment Terms",
    content: "For paid services, you agree to the following payment terms:",
    list: [
      "All fees are in USD unless otherwise specified",
      "Payment is due according to the billing schedule in your service agreement",
      "Late payments may incur additional fees and service suspension",
      "Refunds are provided according to our refund policy",
      "You are responsible for all applicable taxes",
      "Prices may change with 30 days notice for ongoing services",
    ],
  },
  {
    title: "5. Intellectual Property Rights",
    content:
      "All content, features, and functionality of our services are owned by SAWOOD AKHTAR ENTERPRISE and are protected by international copyright, trademark, and other intellectual property laws.",
    subSections: [
      {
        heading: "Client Work Product",
        text: "Upon full payment, you own the deliverables created specifically for you. We retain rights to our pre-existing tools, methodologies, and general knowledge.",
      },
      {
        heading: "License",
        text: "We grant you a limited, non-exclusive, non-transferable license to use our services for your internal business purposes.",
      },
    ],
  },
  {
    title: "6. Confidentiality",
    content:
      "Both parties agree to maintain confidentiality of proprietary information shared during the course of our engagement. This includes business strategies, technical information, customer data, and any information marked as confidential. This obligation survives termination of services for a period of five years.",
  },
  {
    title: "7. Acceptable Use Policy",
    content: "You agree not to use our services to:",
    list: [
      "Violate any applicable laws or regulations",
      "Infringe on intellectual property rights of others",
      "Transmit malicious code, viruses, or harmful content",
      "Attempt to gain unauthorized access to our systems",
      "Interfere with or disrupt our services or servers",
      "Engage in any fraudulent or deceptive practices",
      "Harass, abuse, or harm other users",
    ],
  },
  {
    title: "8. Warranties and Disclaimers",
    content:
      "We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.",
    disclaimer:
      "EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.",
    extra:
      "We do not warrant that our services will be uninterrupted, error-free, or completely secure.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAWOOD AKHTAR ENTERPRISE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.",
  },
  {
    title: "10. Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless SAWOOD AKHTAR ENTERPRISE and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your violation of these terms or your use of our services.",
  },
  {
    title: "11. Termination",
    content:
      "Either party may terminate services with written notice according to the terms in your service agreement. We may immediately terminate or suspend access to our services without notice if you breach these terms.",
    extra:
      "Upon termination, you must cease all use of our services, and we will provide you with your data in a standard format within 30 days.",
  },
  {
    title: "12. Dispute Resolution",
    content:
      "Any disputes arising from these terms or our services shall be resolved through:",
    list: [
      "Good faith negotiation between the parties",
      "Mediation if negotiation fails",
      "Binding arbitration under the rules of the American Arbitration Association",
    ],
    extra:
      "These terms shall be governed by the laws of the State of California, without regard to conflict of law principles.",
  },
  {
    title: "13. Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. We will notify you of material changes via email or through our services. Your continued use of our services after changes constitutes acceptance of the modified terms.",
  },
  {
    title: "14. Contact Information",
    content: "For questions about these Terms and Conditions, please contact us:",
    contact: [
      { label: "Email", value: "Sawoodakhter273@gmail.com" },
      { label: "Phone", value: "7634853890" },
      { label: "Address", value: "NEHAL MANJIL, 07-JAGDISHPUR, BHAGALPUR, BIHAR, 812005" },
    ],
  },
];

export default function TermsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      pageRef.current.querySelectorAll(".section"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Nav spacer */}
      <div className="h-16" />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Terms &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Conditions
            </span>
          </h1>
          <p className="mt-4 text-zinc-500 text-sm">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        ref={pageRef}
        className="max-w-4xl mx-auto px-6 py-16 space-y-12"
      >
        {sections.map((section) => (
          <section key={section.title} className="section">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              {section.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed">{section.content}</p>

            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.subSections?.map((sub) => (
              <div key={sub.heading} className="mt-4">
                <h3 className="text-white font-medium mb-2">{sub.heading}</h3>
                <p className="text-zinc-400 leading-relaxed">{sub.text}</p>
              </div>
            ))}

            {section.disclaimer && (
              <div className="mt-4 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                <p className="text-amber-300/90 text-sm leading-relaxed">
                  {section.disclaimer}
                </p>
              </div>
            )}

            {section.extra && (
              <p className="mt-3 text-zinc-400 leading-relaxed">{section.extra}</p>
            )}

            {section.contact && (
              <div className="mt-4 space-y-2">
                {section.contact.map((c) => (
                  <p key={c.label} className="text-zinc-400">
                    <span className="text-zinc-500">{c.label}:</span> {c.value}
                  </p>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Back link */}
      <div className="border-t border-zinc-800 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-amber-400 transition-colors inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
