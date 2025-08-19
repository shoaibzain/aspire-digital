"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const categories = [
    "Website",
    "Mobile App",
    "SMM",
    "PPC",
    "Print",
    "SEO",
    "Branding",
  ];

  const [active, setActive] = useState("Mobile App");

  const projects = [
    {
      category: "Mobile App",
      title: "Real Estate App for Success of GJ Properties",
      description:
        "We built a mobile app for GJ Properties, blending tradition with Cognitive Web Design. With AI-Enhanced Multilingual Support, Smart UI/UX Design, and Predictive UX, we achieved a 95% rise in organic traffic, 92% more conversions, and better CTR—powered by No-Code AI Builders, AI-Driven A/B Testing, and Automated Layout Generation.",
      stat: "95%",
      statLabel:
        "increase in customer engagement with the new mobile app experience.",
      imageMain: "/images/portfolio/buildings.jpg", // replace with your image path
      imageApp: "/images/portfolio/app-ui.png", // replace with your image path
      link: "/case-study/gj-properties",
    },
  ];

  const filtered = projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="Portfolio section panel overflow-hidden uc-dark scrollSpysection"
    >
      <div className="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2 rounded-2 lg:rounded-3 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack sm:hstack gap-4 justify-between items-center md:items-end panel flex-sm-column"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="vstack items-center lg:items-start gap-2 text-center lg:text-start ">
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill border-white">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-white" />
                    <span className="fs-8 fw-bold text-uppercase">
                      Our Work
                    </span>
                  </div>
                  <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                    10+ Years Experience
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/blog`}
                    className="btn btn-sm lg:btn-md btn-primary px-3"
                  >
                    <span>View all</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex gap-6 mb-12 text-gray-400 font-medium">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`transition ${
                      active === cat
                        ? "text-white font-semibold flex items-center gap-2"
                        : "hover:text-white"
                    }`}
                  >
                    {active === cat && (
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    )}
                    {cat}
                  </button>
                ))}
              </div>
              {/* Projects */}
              {filtered.map((project, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                  {/* Left Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-5xl font-bold text-white">
                        {project.stat}
                      </span>
                      <p className="text-gray-300">{project.statLabel}</p>
                    </div>

                    <Link
                      href={project.link}
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
                    >
                      View Case Study
                    </Link>
                  </div>

                  {/* Right Images */}
                  <div className="flex gap-6">
                    <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={project.imageMain}
                        alt="Main Project"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-[200px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={project.imageApp}
                        alt="App UI"
                        width={200}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
