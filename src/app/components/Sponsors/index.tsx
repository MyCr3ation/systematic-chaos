"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageWithMatchingBackground from "../ImageWithMatchingBackground";

const Sponsors = () => {
  const [slidesPerView, setSlidesPerView] = useState<"auto" | number>("auto");

  useEffect(() => {
    const viewPortWidth = document.body.clientWidth;
    viewPortWidth < 1024 ? setSlidesPerView("auto") : setSlidesPerView(2);
  }, []);

  return (
    <div className="w-full z-10 flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
      <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
        Sponsors
      </h2>
      <Swiper
        loop
        centeredSlides
        spaceBetween={24}
        slidesPerView={slidesPerView}
        speed={6000}
        freeMode
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full flex justify-start items-start"
      >
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="mediamentor"
            href="https://mediamentor.co.in/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/media-mentor.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                Media Mentor
              </h5>
              <p className="line-clamp-4">
                The Exclusive Channel for Media Studies & Media Careers in
                India. Where you can explore and choose the right media career.
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="mindflix-holidays"
            href="https://www.mindflixholidays.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/mindflix-holidays.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                mindflix holidays
              </h5>
              <p className="line-clamp-4">
                Mindflix Holidays plans culture-soaked trips all over India and
                abroad, and the best part? Your trip is carefully engineered to
                suit your specific needs, whether you&apos;re a family, a
                bachelor, a college student or a couple!
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="omomos"
            href="/"
            // target="_blank"
            // referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/omomos.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                o momos
              </h5>
              <p className="line-clamp-4">Food partner</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="vastr"
            href="https://rajeshwaritextile.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/vastr.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                vastr
              </h5>
              <p className="line-clamp-4">
                Vastr (Rajeshwari Textile) is leading the industry in
                manufacturing and wholesale distribution of quality fabrics and
                clothing.
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="mediamentor"
            href="https://mediamentor.co.in/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/media-mentor.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                Media Mentor
              </h5>
              <p className="line-clamp-4">
                The Exclusive Channel for Media Studies & Media Careers in
                India. Where you can explore and choose the right media career.
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="mindflix-holidays"
            href="https://www.mindflixholidays.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/mindflix-holidays.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                mindflix holidays
              </h5>
              <p className="line-clamp-4">
                Mindflix Holidays plans culture-soaked trips all over India and
                abroad, and the best part? Your trip is carefully engineered to
                suit your specific needs, whether you&apos;re a family, a
                bachelor, a college student or a couple!
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="omomos"
            href="/"
            // target="_blank"
            // referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/omomos.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                o momos
              </h5>
              <p className="line-clamp-4">Food partner</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="max-w-56 lg:max-w-none h-full">
          <Link
            key="vastr"
            href="https://rajeshwaritextile.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="h-full flex flex-col lg:flex-row items-center text-primary bg-white"
          >
            <ImageWithMatchingBackground
              imageUrl="/sponsors/vastr.jpg"
              className="h-48 min-w-48 w-[-webkit-fill-available]"
            />
            <div className="w-full h-44 flex flex-col p-4 leading-normal">
              <h5 className="mb-3 text-xl font-bold line-clamp-2 capitalize">
                vastr
              </h5>
              <p className="line-clamp-4">
                Vastr (Rajeshwari Textile) is leading the industry in
                manufacturing and wholesale distribution of quality fabrics and
                clothing.
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;
