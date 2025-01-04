"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const year = new Date().getFullYear();

const fetchCount = async () => {
  try {
    const data = await fetch(
      "https://systematic-chaos.hasura.app/api/rest/website_stats/total_visit",
      {
        cache: "no-store",
      }
    ).then((res) => res.json());

    const count = data.website_stats_by_pk.count;

    if (
      !localStorage.getItem("counted") ||
      localStorage.getItem("counted") !== "true"
    ) {
      const mutate = await fetch(
        "https://systematic-chaos.hasura.app/api/rest/website_stats/total_visit",
        {
          method: "POST",
          headers: {
            contentType: "application/json",
          },
          body: JSON.stringify({
            object: {
              count: count + 1,
            },
          }),
        }
      ).then((res) => {
        localStorage.setItem("counted", "true");
        return res.json();
      });

      return {
        count: mutate.update_website_stats_by_pk.count,
        id: "total_visit",
      };
    }

    return {
      count,
      id: "total_visit",
    };
  } catch (error) {
    return { count: 500, id: "total_visit" };
  }
};

const Footer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const data = await fetchCount();
      setCount(data.count);
    };
    getCount();
  }, []);

  return (
    <div className="w-full z-10 flex flex-col gap-12">
      <div className="w-full flex flex-col lg:flex-row items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-lg md:text-xl font-heading uppercase">
              systematic chaos
            </h4>
            <p>
              Celebration of technological prowess and ethical strength. Annual
              cultural intercollegiate festival, proudly hosted by the IT
              department at Colaba campus.
            </p>
          </div>
          <div className="flex gap-10 md:gap-16 lg:gap-10 xl:gap-16">
            <div className="flex flex-col gap-6">
              <div className="uppercase font-medium text-secondary">
                Find us on
              </div>
              <div className="flex gap-6">
                <Link
                  key="instagram"
                  href="https://www.instagram.com/kc.systematicchaos/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={28}
                    height={28}
                    quality={100}
                  />
                </Link>
                <Link
                  key="facebook"
                  href="https://www.facebook.com/systematicchaos2k18/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="facebook"
                    width={28}
                    height={28}
                    quality={100}
                  />
                </Link>
                <Link
                  key="linktree"
                  href="https://linktr.ee/kc.systematicchaos"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Image
                    src="/icons/linktree.svg"
                    alt="linktree"
                    width={24}
                    height={24}
                    quality={100}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="uppercase font-medium text-secondary">
                Total visits
              </div>
              <div className="text-2xl font-medium tracking-widest">
                {count.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div className="uppercase font-medium text-secondary">contact us</div>
          <div>
            <h4 className="mb-1">Pankaj Yadav (Admin):</h4>
            <Link
              key="telephone"
              href="tel:+917304559972"
              className="text-base font-normal underline underline-offset-4"
            >
              +91 73045 59972
            </Link>
          </div>
          <div>
            <h4 className="mb-1"> Sakshi Sanghvi (VCP):</h4>
            <Link
              key="telephone"
              href="tel:+919892216616 "
              className="text-base font-normal underline underline-offset-4"
            >
              +91 98922 16616 
            </Link>
          </div>
          <Link
            key="email"
            href="mailto:kc.systematicchaos@gmail.com"
            className="text-base font-normal lowercase"
          >
            kc.systematicchaos@gmail.com
          </Link>
          <div>WRFJ+GWM, Apollo Bandar, Colaba, Mumbai, Maharashtra 400001</div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1709528184333!2d72.82753339678956!3d18.923825800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c115ffdef5%3A0xbe55d4c3683b0461!2sKC%20College%20Colaba%20Campus!5e0!3m2!1sen!2sin!4v1702814519678!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80"
        ></iframe>
      </div>
      <div className="w-full lg:flex lg:flex-row lg:justify-between items-start pt-6 px-4 xl:px-0 lg:mx-auto xl:max-w-6xl border-t border-secondary">
        <span className="text-sm lg:text-base">
          Copyright © {year} Systematic Chaos. All rights reserved.
        </span>{" "}
        <span className="text-sm lg:text-base">
          Designed and developed with ❤️ by{" "}
          <Link
            key="harshal-singh"
            href="https://harshal-singh.vercel.app/"
            className="underline"
          >
            Harshal Singh
          </Link>
          . <br/>Modified by Yash Dhanawade and Mustafa Dholkawala
        </span>
        
      </div>
    </div>
  );
};

export default Footer;
