"use client";

import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const SliderOne = () => {
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
          {/* 🖼️ Banner 1 */}
          <SwiperSlide>
            <div className="slider-item slider-first">
              <div className="bg-img">
                <Image
                  src={"/images/slider/Home_Banner_3.jpg"}
                  width={4000}
                  height={3000}
                  alt="Home Banner 1"
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* 🖼️ Banner 2 */}
          <SwiperSlide>
            <div className="slider-item slider-second">
              <div className="bg-img">
                <Image
                  src={"/images/slider/Home_Banner_2.jpg"}
                  width={4000}
                  height={3000}
                  alt="Home Banner 2"
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* 🖼️ Banner 3 */}
          <SwiperSlide>
            <div className="slider-item slider-third">
              <div className="bg-img">
                <Image
                  src={"/images/slider/Home_Banner_1.jpg"}
                  width={4000}
                  height={3000}
                  alt="Home Banner 3"
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
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
