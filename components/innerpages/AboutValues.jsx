
import React from "react";
import Image from "next/image";

export default function AboutValues() {
  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Our Values it’s Simple!
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
