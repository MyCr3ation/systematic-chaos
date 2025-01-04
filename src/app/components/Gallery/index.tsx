"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [swiperSpeed, setSwiperSpeed] = useState(10000);

  useEffect(() => {
    const viewPortWidth = document.body.clientWidth;
    viewPortWidth < 768 ? setSwiperSpeed(10000) : setSwiperSpeed(4000);
  }, []);

  return (
    <div className="w-full z-10 flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
      <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
        Gallery
      </h2>
      <div className="w-full h-[90vh] flex place-items-center overflow-clip">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Swiper
            loop
            centeredSlides
            direction="vertical"
            speed={swiperSpeed}
            spaceBetween={24}
            slidesPerView="auto"
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full grid gap-4 md:gap-6 h-[120vh] !-z-[1]"
          >
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 bg-[url('/gallery/Gallery001.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-96 bg-[url('/gallery/Gallery002.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-72 bg-[url('/gallery/Gallery003.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-80 bg-[url('/gallery/Gallery004.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-64 bg-[url('/gallery/Gallery005.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-56 bg-[url('/gallery/Gallery006.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-80 bg-[url('/gallery/Gallery007.png')]" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            loop
            centeredSlides
            direction="vertical"
            speed={10000}
            spaceBetween={24}
            slidesPerView="auto"
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            className="w-full grid gap-4 md:gap-6 h-[120vh] !-z-[1] rotate-180"
          >
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-56 rotate-180 bg-[url('/gallery/Gallery007.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-80 rotate-180 bg-[url('/gallery/Gallery008.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-72 rotate-180 bg-[url('/gallery/Gallery009.png')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-64 rotate-180 bg-[url('/gallery/Gallery010.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-64 rotate-180 bg-[url('/gallery/Gallery011.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 rotate-180 bg-[url('/gallery/Gallery012.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-72 rotate-180 bg-[url('/gallery/Gallery013.jpg')]" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            loop
            centeredSlides
            direction="vertical"
            speed={4000}
            spaceBetween={24}
            slidesPerView="auto"
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full !hidden md:!grid gap-4 md:gap-6 h-[120vh] !-z-[1]"
          >
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 bg-[url('/gallery/Gallery015.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-72 bg-[url('/gallery/Gallery016.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 bg-[url('/gallery/Gallery017.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 bg-[url('/gallery/Gallery018.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-96 bg-[url('/gallery/Gallery019.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-64 bg-[url('/gallery/Gallery020.jpg')]" />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
              <div className="bg-cover bg-center h-48 bg-[url('/gallery/Gallery021.jpg')]" />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
