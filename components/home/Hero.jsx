import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoComponent from "./VideoComponent";

export default function Hero() {
  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 "
    >
      <div className="position-cover bg-white dark:bg-gray-900" />

      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center">
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase text-white">
                      Beta 2.0 Available Now
                    </span>
                  </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white">
                    Build websites
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      effortlessly
                    </span>
                    <br />
                    now or never!
                  </h1>
                  <p className="fs-5 xl:fs-4 text-black dark:text-white d-none md:d-block">
                    Easy-to-use and powerful page builder, your gateway to
                    intuitive tools and expansive customization options that
                    transform how you build websites.
                  </p>
                  <Link
                    href={`/contact`}
                    className="btn btn-md btn-primary min-w-150px mt-2"
                  >
                    <span>Get started</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <VideoComponent />
        </div>
      </div>
    </div>
  );
}
