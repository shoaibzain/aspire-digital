"use client";
import { services } from "@/data/services";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section
      id="services"
      className="services section panel overflow-hidden uc-dark scrollSpysection"
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
                  <h2 className="title h3 lg:h2 xl:h1 m-0">
                    10+ Years Experience
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/our-services`}
                    className="btn btn-sm lg:btn-md btn-primary px-3"
                  >
                    <span>View all</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>

              <div className="w-full">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer py-7 border-b border-emerald-700/30 relative"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center justify-between">
                      {/* Title */}
                      <div className="flex items-center gap-6 flex-1">
                        <h3
                          className={`text-xl lg:text-4xl font-medium mb-0 transition-colors duration-500 ease-in-out ${
                            hoveredService === index
                              ? "text-white"
                              : "text-white/60"
                          }`}
                        >
                          <Link href={service.href} className="no-underline">
                            {service.name}
                          </Link>
                        </h3>
                      </div>

                      {/* Hover Card */}
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 hidden sm:!flex items-center gap-4 rounded-xl shadow-lg
                      transform transition-all duration-500 ease-in-out z-10 
                      ${
                        hoveredService === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-5 pointer-events-none"
                      }`}
                      >
                        <div className="relative overflow-hidden rounded-lg w-[250px] h-[250px] flex-shrink-0">
                          <img
                            src={services[index]?.image || "/placeholder.svg"}
                            alt={services[index]?.name || ""}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out"
                          />
                        </div>
                        <p className="max-w-[250px] text-emerald-100 text-sm leading-relaxed">
                          {services[index]?.description}
                        </p>
                      </div>

                      {/* Circle Button */}

                      <div
                        className={`w-10 sm:w-16 h-10 sm:h-16 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-500 ease-out ${
                          hoveredService === index
                            ? "opacity-0 invisible translate-x-5"
                            : "opacity-100 visible translate-x-0"
                        } `}
                      >
                        <Link href={service.href} className="no-underline">
                          <i className="icon unicon-arrow-right text-xl sm:text-3xl rtl:rotate-180 text-white transition-colors duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
