"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "At SAWOOD AKHTAR ENTERPRISE, we collect information that you provide directly to us, including:",
    list: [
      "Name, email address, and contact information",
      "Company name and business information",
      "Account credentials and authentication data",
      "Payment and billing information",
      "Communications and support requests",
      "Usage data and analytics from our services",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to:",
    list: [
      "Provide, maintain, and improve our consulting services",
      "Process transactions and send related information",
      "Send technical notices, updates, and support messages",
      "Respond to your comments, questions, and requests",
      "Develop new products and services",
      "Monitor and analyze trends, usage, and activities",
      "Detect, prevent, and address technical issues and security threats",
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
    list: [
      "With your consent or at your direction",
      "With service providers who perform services on our behalf",
      "To comply with legal obligations or protect rights and safety",
      "In connection with a merger, acquisition, or sale of assets",
    ],
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes encryption, secure servers, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.",
  },
  {
    title: "6. Your Rights and Choices",
    content:
      "You have the following rights regarding your personal information:",
    list: [
      "Access and receive a copy of your personal data",
      "Correct inaccurate or incomplete information",
      "Request deletion of your personal information",
      "Object to or restrict processing of your data",
      "Withdraw consent at any time",
      "Data portability to another service provider",
    ],
  },
  {
    title: "7. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our services.",
  },
  {
    title: "8. International Data Transfers",
    content:
      "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. Your continued use of our services after changes constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
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
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              Policy
            </span>
          </h1>
          <p className="mt-4 text-zinc-500 text-sm">
            Last Updated: June 2026
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
