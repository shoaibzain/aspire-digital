"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "17+", label: "Years of agency experience" },
    { number: "220+", label: "Successfully projects done" },
    { number: "46+", label: "World-wide team members" },
    { number: "98%", label: "Clients satisfied & retention" },
  ];

  // Small inline Count component: parses number strings like "220+" or "98%"
  // and animates from 0 to the numeric part when the element enters the viewport.
  function Count({ number, className = "text-7xl font-bold", duration = 1400 }) {
    const str = String(number || "");
    const match = str.match(/^(\d+)(.*)$/) || ["0", "0", ""]; // [full, digits, suffix]
    const end = parseInt(match[1], 10) || 0;
    const suffix = match[2] || "";

    const [display, setDisplay] = useState(() => `0${suffix}`);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
      if (!ref.current) return;

      // Fallback: if IntersectionObserver not available, start immediately
      if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        start();
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !started.current) {
              started.current = true;
              start();
              io.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );

      io.observe(ref.current);
      return () => io.disconnect();

      function start() {
        const t0 = performance.now();
        const dur = Math.max(200, duration);

        function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const current = Math.floor(p * end);
          setDisplay(String(current) + suffix);
          if (p < 1) requestAnimationFrame(step);
          else setDisplay(String(end) + suffix);
        }

        requestAnimationFrame(step);
      }
    }, [duration, end, suffix]);

    return (
      <h2 ref={ref} className={className}>
        {display}
      </h2>
    );
  }

  return (
    <section id="about" className="about section panel overflow-hidden scrollSpysection">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="flex justify-end" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            <div className="w-[80%]">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-snug text-black dark:text-white">
                  Our digital strategies and design expertise focus on promoting
                  social economy businesses, cutting-edge brands, and
                  eco-friendly products to motivate consumers to make informed
                  decisions towards sustainable products and services
                </h1>
              </div>

              <div className="flex justify-end">
                <div className="w-[50%]">
                  <p className="text-lg leading-relaxed">
                    Whether it&apos;s crafting a visually stunning brand
                    identity, designing immersive digital experiences, or
                    developing strategic marketing campaigns, we approach each
                    project with meticulous attention to detail and an
                    unwavering dedication to quality.
                  </p>

                  <Link
                    href="/about"
                    className="btn btn-sm lg:btn-md btn-primary px-3 md:mt-2 lg:mt-4"
                  >
                    <span>More about us</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
            {stats.map((item, index) => (
              <div key={index}>
                <Count number={item.number} />
                <p className="mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
