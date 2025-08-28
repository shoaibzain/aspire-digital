import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div
      id="cta"
      className="cta section panel overflow-hidden"
      data-anime="onview:-100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
    >
      <div className="section-outer panel py-4 sm:py-6 xl:py-9 bg-black dark:bg-gray-800">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:gap-3 max-w-550px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 m-0 text-white">
                We’re looking for people who share our vision!
              </h2>
              <p className="fs-5 xl:fs-4 text-white text-opacity-70">
                Have what it takes to be one of us.
              </p>
              <Link
                href={`/page-career`}
                className="btn btn-md lg:btn-lg btn-primary text-white mt-1 xl:mt-2"
              >
                View current openings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
