import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import React from "react";
import Portfolio from "@/components/home/Portfolio";
export const metadata = {
  title: "Home.",
  description: "Home description.",
};
export default function HomePage6() {
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
          <Portfolio />
          <Blogs />
        </div>
        <Footer />
      </div>
    </>
  );
}
