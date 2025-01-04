"use client";

import useSWR from "swr";
import Footer from "../components/Footer";
import { EventType } from "../api/types";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import EventLoadingElements from "../components/Events/EventLoadingElements";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const Events = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      setSearchTerm(term);
      setIsSearch(true);
      params.set("query", term);
    } else {
      setSearchTerm(null);
      setIsSearch(false);
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const { data: events, isLoading: loadingEvents } = useSWR<EventType[]>(
    "/api/event",
    (url: string) => fetch(url).then((res) => res.json())
  );

  const { data: searchResults, isLoading: loadingSearchEvents } = useSWR<
    EventType[]
  >(
    () => (searchTerm ? "/api/event/search?query=" + searchTerm : null),
    (url: string) => fetch(url).then((res) => res.json())
  );

  const isLoading = loadingSearchEvents || loadingEvents;
  const data = (isSearch ? searchResults : events) || [];

  return (
    <main className="flex flex-col items-center justify-between gap-20 lg:gap-32 pb-12">
      <div className="w-full flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
        <div className="w-full flex flex-col sm:flex-row justify-between items-baseline gap-9">
          <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
            Events
          </h2>
          <input
            type="search"
            name="search"
            autoComplete="off"
            placeholder="Search event"
            defaultValue={searchParams.get("query")?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            className="w-full md:max-w-80 p-2 text-white text-opacity-60 placeholder:text-white placeholder:text-opacity-60 border-b-2 border-b-ternary bg-primary outline-none focus:outline-none"
          />
        </div>

        {isLoading ? (
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {EventLoadingElements}
          </div>
        ) : data.length > 0 ? (
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {data.map((event) => {
              return (
                <Link
                  key={event.name}
                  href={event.formURL}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  style={{
                    backgroundImage: `url("/events/${event.imageFile}")`,
                  }}
                  className="relative flex flex-col justify-end items-start px-6 w-full xl:w-[360px] pt-[520px] pb-6 gap-2 bg-opacity-40 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-primary before:from-20% before:opacity-80"
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
              );
            })}
          </div>
        ) : (
          <div className="w-full grid place-items-center h-80">
            No event found with name &quot;{searchTerm}&quot;
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Events;
