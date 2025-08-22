"use client";

import {
  ArrowRight,
  BarChart3,
  PenTool,
  Search,
  Share2,
  MousePointer,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      name: "Analytics and Data Insights",
      icon: BarChart3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kn0AgCm9iVmXc27Qb4p17K1u0GsyEY.png",
      description:
        "Transform raw data into actionable insights that drive strategic business decisions and growth.",
    },
    {
      name: "Content Marketing",
      icon: PenTool,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FUCcQrQ4B5g44QFMBnUaAsOa4pwG9w.png",
      description:
        "Create compelling content that resonates with your audience and builds lasting brand connections.",
    },
    {
      name: "Search Engine Marketing",
      icon: Search,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yfxk6KN9Ecc4xx4delOGwO8coHKyBD.png",
      description:
        "Boost your online visibility and drive qualified traffic through strategic search optimization.",
    },
    {
      name: "Social Media Marketing",
      icon: Share2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frrL5Lv23Vtwhxrw5gvF6kNFTeFiZG.png",
      description:
        "Elevate your brand with impactful social media strategies that engage and convert.",
    },
    {
      name: "Pay-Per-Click Advertising",
      icon: MousePointer,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Maximize ROI with targeted advertising campaigns that deliver measurable results.",
    },
  ];

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

              <div className="space-y-6 w-full">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer py-6 border-b border-emerald-700/30 relative"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 flex-1">
                        <h3
                          className={`text-xl lg:text-2xl font-normal transition-colors ${
                            hoveredService === index
                              ? "text-yellow-400"
                              : "text-emerald-100"
                          }`}
                        >
                          {service.name}
                        </h3>
                      </div>

                      <div
                        className={`absolute right-16 top-1/2 -translate-y-1/2 flex items-center gap-4 bg-emerald-700/80 backdrop-blur-sm rounded-lg p-4 transition-opacity duration-300 z-10 ${
                          hoveredService === index
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="relative overflow-hidden rounded-lg w-24 h-20 flex-shrink-0">
                          <img
                            src={services[index]?.image || "/placeholder.svg"}
                            alt={services[index]?.name || ""}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-emerald-100 text-sm leading-relaxed max-w-md">
                          {services[index]?.description}
                        </p>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center hover:bg-emerald-400 transition-all duration-300 flex-shrink-0 ${
                          hoveredService === index ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:text-emerald-800" />
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
