"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import useSWR from "swr";
import { EventType } from "@/app/api/types";
import EventLoadingElements from "./EventLoadingElements";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Events = () => {
  const { data, error, isLoading } = useSWR<EventType[]>("/api/event", fetcher);

  return (
    <div className="w-full z-10 flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
      <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
        Events
      </h2>
      <Swiper
        loop
        freeMode
        centeredSlides
        speed={1000}
        spaceBetween={24}
        slidesPerView="auto"
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full flex justify-start items-start"
      >
        {isLoading
          ? EventLoadingElements
          : data?.map((event, i) => {
              return (
                <SwiperSlide key={event.name} className="!w-full md:!w-auto">
                  <Link
                    key={event.name}
                    href={event.formURL}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    style={{
                      backgroundImage: `url("/events/${event.imageFile}")`,
                    }}
                    className="relative flex flex-col justify-end items-start px-6 w-full md:w-[360px] pt-[520px] pb-6 gap-2 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-primary before:from-20% before:opacity-80"
                  >
                    <span className="absolute bottom-32 lg:bottom-28 left-6 z-[1] text-8xl lg:text-9xl font-medium text-white opacity-10">
                      {event.id}
                    </span>
                    <div className="absolute z-[2] flex flex-col gap-2 pr-6">
                      <div className="text-lg lg:text-xl font-semibold line-clamp-2">
                        {event.name}
                      </div>
                      <div className="mb-2 font-normal line-clamp-2">
                        {event.description}
                      </div>
                      <div className="w-24 h-0.5 bg-secondary" />
                      <div className="capitalize">JAN 2025</div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default Events;
