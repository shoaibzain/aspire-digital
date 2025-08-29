"use client";
import { ChannelPartners } from "@/data/brands";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import module
import Image from "next/image";
import "swiper/css";

export default function Brands() {
  const swiperOptions = {
    modules: [Autoplay], // ✅ enable autoplay module
    slidesPerView: 3,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    loop: true, // ✅ enable infinite loop
    autoplay: {
      delay: 600, // 2s delay
      disableOnInteraction: false, // keeps autoplay after user swipe
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 40,
      },
    },
  };

  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel py-4 lg:py-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3  overflow-hidden"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <h3 className="title h4 sm:h3 lg:h2 m-0">
                Trusted by Our Channel Partners
              </h3>
              <div className="vstack sm:hstack justify-center gap-1 fs-6  text-black dark:text-white flex-sm-column">
                <span className="desc rtl:order-first">
                  Recognized and trusted by leading channel partners for reliability and growth.
                </span>
              </div>
              <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                  <Swiper {...swiperOptions}>
                    {ChannelPartners.map((brand, index) => (
                      <SwiperSlide
                        className="brand-item swiper-slide text-center flex justify-center"
                        key={index}
                      >
                        <Image
                          src={brand.src}
                          width={100}
                          height={60}
                          alt={brand.alt}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
