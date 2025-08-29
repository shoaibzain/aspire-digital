import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import React from "react";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Elements from "@/components/home/Elements";
import Brands from "@/components/home/Brands";
import Services from "@/components/home/Services";
import Faq from "@/components/innerpages/Faq";
import ClientsFeedbacks from "@/components/innerpages/ClientsFeedbacks";
import CaseSudies from "@/components/home/CaseSudies";
export const metadata = {
  title: "Top Reasons to Choose the Best Digital Marketing Agency in Karachi",
  description:
    "Discover Top powerful ways Aspire Digital Marketing Agency in Karachi can boost your business with expert SEO, web design & social media marketing. Try us today!",
};
export default function HomePage() {
  return (
    <>
      <div
        style={{ overflow: "clip" }}
        className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready"
      >
        <Header />
        <div id="wrapper" className="wrap">
          <Hero />
          <About />
          {/* <Portfolio /> */}
          <CaseSudies/>
          {/* <Testimonials /> */}
          <ClientsFeedbacks/>
          <Services />
          <Brands />
          <Blogs />
          {/* <Elements /> */}

          <Faq faqType="accordionItems" />
        </div>
        <Footer />
      </div>
    </>
  );
}
