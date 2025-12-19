"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

type SlideConfig = {
  id: string;
  desktopSrc: string;
  tabletSrc?: string;
  mobileSrc?: string;
  alt: string;
  wrapperClass: string;
};

const slides: SlideConfig[] = [
  {
    id: "hero-banner-3",
    desktopSrc: "/images/slider/Home_Banner_3.jpg",
    alt: "Home Banner 1",
    wrapperClass: "slider-first",
  },
  {
    id: "hero-banner-2",
    desktopSrc: "/images/slider/Home_Banner_2.jpg",
    tabletSrc: "/images/slider/Home_Banner_2_tablet.jpg",
    mobileSrc: "/images/slider/Home_Banner_2_mobile.jpg",
    alt: "Home Banner 2",
    wrapperClass: "slider-second",
  },
  {
    id: "hero-banner-1",
    desktopSrc: "/images/slider/Home_Banner_1.jpg",
    alt: "Home Banner 3",
    wrapperClass: "slider-third",
  },
];

type Viewport = "desktop" | "tablet" | "mobile";

const SliderOne = () => {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  useEffect(() => {
    const updateViewport = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      if (width <= 767) {
        setViewport("mobile");
      } else if (width <= 1023) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <div className="slider-block style-one">
      {/* Prev Arrow */}
      <div className="prev-arrow flex items-center justify-center">
        <Icon.CaretLeft className="text-white heading6" weight="bold" />
      </div>

      {/* Swiper Slider */}
      <div className="slider-main">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
          loop={true}
          pagination={{ clickable: true }}
          speed={400}
          modules={[Pagination, Autoplay, Navigation]}
          className="h-full relative"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => {
            let imageSrc = slide.desktopSrc;

            if (viewport === "mobile" && slide.mobileSrc) {
              imageSrc = slide.mobileSrc;
            } else if (viewport === "tablet" && slide.tabletSrc) {
              imageSrc = slide.tabletSrc;
            }

            return (
              <SwiperSlide key={slide.id}>
                <div className={`slider-item ${slide.wrapperClass}`}>
                  <div className="bg-img">
                    <Image
                      src={imageSrc}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Next Arrow */}
      <div className="next-arrow flex items-center justify-center">
        <Icon.CaretRight className="text-white heading6" weight="bold" />
      </div>
    </div>
  );
};

export default SliderOne;
