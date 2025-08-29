"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const workData = {
  website: [
    {
      title: "Digital Uplift for Atmosphere Burj Khalifa",
      desc: "We built a mobile app for GJ Properties, blending tradition with Cognitive Web Design. With AI-Enhanced Multilingual Support, Smart UI/UX Design, and Predictive UX, we achieved a 95% rise in organic traffic, 92% more conversions, and better CTR—powered by No-Code AI Builders, AI-Driven A/B Testing, and Automated Layout Generation.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/food-and-drink/atmosphere-burj-khalifa/",
      stat: "75%",
      statText: "increase in online interaction and service accessibility.",
    },
    {
      title: "Engineered Sharjah FDI for Global Reach",
      desc: "A high-performance, investor-focused website achieving 98% speed optimization & 67% engagement.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/government/sharjah-fdi-forum/",
      stat: "120%",
      statText: "A surge in website visitors during key events.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
  ],
  mobile: [
    {
      title: "Mobile Project Example",
      desc: "Some mobile app case study.",
      img: "/assets/images/blog/post-5.jpg",
      link: "/case-studies/mobile/app-sample/",
      stat: "88%",
      statText: "growth in downloads within 3 months.",
    },
  ],
};

const tabs = ["website", "mobile", "SMM", "PCC", "SEO", "branding"];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("website");
  const items = workData[activeTab] || [];

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
              {/* Heading + Button */}
              <div
                className="heading vstack sm:hstack gap-4 justify-between items-center md:items-end panel flex-sm-column"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="vstack items-center lg:items-start gap-2 text-center lg:text-start ">
                  <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                    10+ Years Experience
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/case-studies`}
                    className="btn btn-sm lg:btn-md btn-primary px-3"
                  >
                    <span>View all</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>

              <div className="w-full">
                {/* Tabs */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-6 mb-12 text-gray-400 font-medium">
                  {tabs.map((tab) => {
                    const label = ["smm", "ppc", "seo"].includes(tab) // keep acronyms uppercase
                      ? tab.toUpperCase()
                      : tab.charAt(0).toUpperCase() + tab.slice(1);

                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative flex items-center gap-2 transition-all duration-300 ease-in-out ${
                          activeTab === tab
                            ? "text-white font-semibold"
                            : "hover:text-white"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ease-in-out transform ${
                            activeTab === tab
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0"
                          }`}
                        ></span>
                        <span className="transition-colors duration-300">
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Cards Layout */}
                <div className="space-y-12 sm:space-y-16">
                  {/* First row: Featured (text left, image right) */}
                  {items[0] && (
                    <div className="grid grid-cols-1">
                      <CaseStudiesCard item={items[0]} variant="featured" />
                    </div>
                  )}

                  {/* Second row: 2 cards */}
                  {items.slice(1, 3).length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {items.slice(1, 3).map((item, i) => (
                        <CaseStudiesCard key={i} item={item} />
                      ))}
                    </div>
                  )}

                  {/* Third row: 3 cards */}
                  {items.slice(3, 6).length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {items.slice(3, 6).map((item, i) => (
                        <CaseStudiesCard key={i} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesCard({ item, variant = "default" }) {
if (variant === "featured") {
  return (
<div className="overflow-hidden gap-2 sm:gap-6 grid md:grid-cols-[30%_70%] h-full">
  {/* Left: Text (30%) */}
  <div className="card__body flex flex-col justify-center order-2 md:order-1">
    <h3 className="text-2xl md:text-3xl font-bold mb-1 sm:mb-4">
      <Link href={item.link} className="no-underline">
        {item.title}
      </Link>
    </h3>
    <p className="text-gray-300 mb-2 sm:mb-6 leading-relaxed">{item.desc}</p>
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="text-3xl sm:text-5xl font-bold text-white">{item.stat}</span>
      <span className="text-gray-300 w-full">{item.statText}</span>
    </div>
    <div>
      <Link
        href={item.link}
        className="btn btn-sm lg:btn-md btn-primary px-3"
      >
        <span>View Case Studies</span>
        <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
      </Link>
    </div>
  </div>

  {/* Right: Image (70%) */}
  <div className="card__img order-1 md:order-2">
    <Link href={item.link}>
      <Image
        src={item.img}
        alt={item.title}
        width={600}
        height={400}
        className="w-full h-full object-cover rounded-xl"
      />
    </Link>
  </div>
</div>

  );
}


  // Default card (image top, text bottom)
  return (
    <div className="overflow-hidden flex flex-col h-full">
      <div className="card__img mb-2">
        <Link href={item.link}>
          <Image
            src={item.img}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-xl"
          />
        </Link>
      </div>
      <div className="card__body flex flex-col flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-1">
          <Link href={item.link} className="no-underline">
            {item.title}
          </Link>
        </h3>
        <p className="text-gray-300 mb-2 leading-relaxed">{item.desc}</p>
        <div className="flex flex-wrap items-center gap-4 w-full">
          {/* Left 60% */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            <span className="text-3xl sm:text-5xl font-bold text-white">{item.stat}</span>
            <span className="text-gray-300 sm:w-[12em]">{item.statText}</span>
          </div>
          <Link
            href={item.link}
            className="btn btn-sm lg:btn-md btn-primary px-3"
          >
            <span>View Case Studies</span>
            <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
