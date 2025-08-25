import Accordion from "@/components/common/Accordion";
import React from "react";
import Link from "next/link";

export default function Faq() {
  return (
    <section id="faq" className="faq section panel  scrollSpysection">
      <div className="section-outer panel py-6 xl:py-10">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                
                  <h2 className="h3 lg:h2 m-0">Frequently Asked Questions</h2>
                  <p className="fs-6 lg:fs-5">
                    To help you make well-informed decisions for your business, we have addressed some of the most frequently asked questions asked by people who are looking for a digital marketing agency near me.
                  </p>
                  <Link
                    href={`/contact-us`}
                    className="btn btn-sm lg:btn-md btn-primary px-3 mt-2"
                  >
                    <span>Have Another Question?</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <Accordion parentClass="panel p-2 md:p-4 border rounded-1-5" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
