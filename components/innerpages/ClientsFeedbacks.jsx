"use client";
import { slidesData } from "@/data/clientsfeedbacks";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";



export default function ClientsFeedbacks() {
  return (
    <section
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="section-inner panel">
          <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
            <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
              See what our{" "}
              <span className="px-1 bg-tertiary text-primary">happy users</span>{" "}
              are sharing about us!
            </h2>

            <div className="panel w-100">
              <div className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 mb-4 lg:mb-6 xl:mb-8 text-center">
                <p className="h6">
                  Trusted by over 1.7 million companies worldwide
                </p>
              </div>

              {/* ✅ Swiper Carousel */}
              <Swiper
                slidesPerView={1}
                spaceBetween={24}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150 m-1">
                      <div className="panel vstack items-start gap-2">
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          “{slide.quote}”
                        </p>
                      </div>

                      <div className="panel hstack gap-2 mt-2">
                        <Image
                          src={slide.avatar}
                          alt={slide.name}
                          width={40}
                          height={40}
                          className="w-40px rounded-circle"
                        />
                        <div className="panel vstack justify-center gap-narrow">
                          <ul className="nav-x gap-0 text-warning flex">
                            {Array.from({ length: slide.rating }).map(
                              (_, i) => (
                                <li key={i}>
                                  <i className="icon icon-narrow unicon-star-filled"></i>
                                </li>
                              )
                            )}
                          </ul>
                          <span className="fw-bold ft-secondary m-0">
                            {slide.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* CTA */}
            <Link
              href={`/contact-us`}
              className="uc-link dark:text-tertiary fw-bold d-inline-flex items-center gap-narrow"
            >
              <span>Lets Started</span>
              <i className="icon icon-1 unicon-arrow-right rtl:rotate-180"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
