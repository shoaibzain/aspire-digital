"use client";

import { useState } from "react";
import Image from "next/image";

const workData = {
  website: [
    {
      title: "Digital Uplift for Atmosphere Burj Khalifa",
      desc: "We revamped Atmosphere’s website with sleek UX & stronger security, driving 20% higher conversions.",
      img: "/assets/images/our-work/website/atmoshphere-bk.webp",
      link: "/case-studies/website/food-and-drink/atmosphere-burj-khalifa/",
      stat: "75%",
      statText: "increase in online interaction and service accessibility.",
    },
    {
      title: "Engineered Sharjah FDI for Global Reach",
      desc: "A high-performance, investor-focused website achieving 98% speed optimization & 67% engagement.",
      img: "/assets/images/our-work/website/sharjah-fdi.webp",
      link: "/case-studies/website/government/sharjah-fdi-forum/",
      stat: "120%",
      statText: "A surge in website visitors during key events.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
  ],
  mobile: [
    {
      title: "Digital Uplift for Atmosphere Burj Khalifa",
      desc: "We revamped Atmosphere’s website with sleek UX & stronger security, driving 20% higher conversions.",
      img: "/assets/images/our-work/website/atmoshphere-bk.webp",
      link: "/case-studies/website/food-and-drink/atmosphere-burj-khalifa/",
      stat: "75%",
      statText: "increase in online interaction and service accessibility.",
    },
    {
      title: "Engineered Sharjah FDI for Global Reach",
      desc: "A high-performance, investor-focused website achieving 98% speed optimization & 67% engagement.",
      img: "/assets/images/our-work/website/sharjah-fdi.webp",
      link: "/case-studies/website/government/sharjah-fdi-forum/",
      stat: "120%",
      statText: "A surge in website visitors during key events.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
    {
      title: "HAKA Group: Optimized for Public Trust",
      desc: "A secure, user-friendly platform delivering 92% engagement & 54% organic traffic growth.",
      img: "/assets/images/our-work/website/haka-group.webp",
      link: "/case-studies/website/corporate/haka-group/",
      stat: "103%",
      statText: "increase in website traffic across experiences.",
    },
  ],
};

const tabs = ["website", "mobile", "smm", "ppc", "print", "seo", "branding"];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("website");

  const items = workData[activeTab] || [];

  return (
    <section className="section section--our-work py-10">
      <div className="container">
        {/* Headings */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            10+ Years Exp but Countless Innovations
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards Layout */}
        <div className="space-y-6">
          {items[0] && (
            <div className="grid grid-cols-1">
              <WorkCard item={items[0]} />
            </div>
          )}

          {items.slice(1, 3).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.slice(1, 3).map((item, i) => (
                <WorkCard key={i} item={item} />
              ))}
            </div>
          )}

          {items.slice(3, 6).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.slice(3, 6).map((item, i) => (
                <WorkCard key={i} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item }) {
  return (
    <div className="card border rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="card__img">
        <a href={item.link}>
          <Image
            src={item.img}
            alt={item.title}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </a>
      </div>
      <div className="card__body p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">
          <a href={item.link}>{item.title}</a>
        </h3>
        <p className="text-sm text-gray-600 mb-3 flex-1">{item.desc}</p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-2xl font-bold text-primary">{item.stat}</span>
          <span className="text-xs text-gray-500">{item.statText}</span>
        </div>
        <a
          href={item.link}
          className="inline-block mt-3 text-primary font-semibold hover:underline"
        >
          View Case Study →
        </a>
      </div>
    </div>
  );
}
