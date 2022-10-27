import React, { useEffect, useRef, useState } from "react";

import { Banners } from "./ListBanner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-6rem)] mt-[6rem] pb-8">
      <div className="hidden md:flex w-full 2xl:max-w-[1200px] mx-auto h-full overflow-hidden relative">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Banners.map((item) => {
            return (
              <SwiperSlide>
                <img src={item.url} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex md:hidden w-full h-full overflow-hidden relative">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Banners.map((item) => {
            return (
              <SwiperSlide>
                <img src={item.urlMobile} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
