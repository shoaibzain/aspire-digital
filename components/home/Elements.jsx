"use client";
import { ChannelPartners } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Elements() {
  return (
    <section
      id="builder_elements"
      className="builder-elements section panel  scrollSpysection"
    >
      <div className="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2 rounded-2 lg:rounded-3 dark:bg-gray-900">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel vstack items-center gap-3 xl:gap-4 text-center max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <h4 className="h2 m-0 text-white">Channel Partners</h4>
            <div className="panel w-100">
              <Swiper
                className="swiper mask-x"
                slidesPerView={2.5}
                spaceBetween={16}
                centeredSlides={false}
                loop={true}
                freeMode={true}
                freeModeMomentum={false}
                speed={10000} // slower, smoother ticker
                autoplay={{
                  delay: 0, // continuous
                  disableOnInteraction: false,
                }}
                allowTouchMove={false} // disable manual dragging for pure ticker
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {ChannelPartners.map((slide, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="flex items-center justify-center p-3 md:p-4 rounded-s bg-[#f9f9f9]">
                      <div className="w-28 h-16 relative">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
