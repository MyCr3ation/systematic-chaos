import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full z-10 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-12 px-4 xl:px-0 xl:max-w-6xl mx-auto">
      <div className="w-fit flex flex-col justify-start items-start gap-12">
        <div className="w-fit flex flex-col justify-start items-start ">
          <h1>
            <span className="text-2xl md:text-[40px] font-heading leading-[44px] md:leading-[77px]">
              Welcome to
            </span>
            <br />
            <span className="text-secondary text-4xl md:text-[64px] font-heading font-heading leading-[44px] md:leading-[77px]">
              Systematic <br /> Chaos{" "}
            </span>
            <span className="text-2xl md:text-[40px] font-heading leading-[44px] md:leading-[77px]">
              2025.
            </span>
          </h1>
          <h3 className="text-base md:text-xl font-normal capitalize">
            Where Brilliance Meets Adventure!
          </h3>
        </div>
        <div className="flex gap-x-4">
          <Link
            key="/events"
            href="/events"
            className="bg-ternary px-4 py-2 text-sm md:text-base font-normal capitalize"
          >
            Explore Events
          </Link>
          <Link
            key="/brochure"
            href="/Systematic Chaos 2025 Brochure.pdf"
            download="Systematic Chaos 2025 Brochure"
            target="_blank"
            referrerPolicy="no-referrer"
            className="border px-4 py-2 text-sm md:text-base font-normal capitalize bg-opacity-30 inline-flex items-center gap-x-2"
          >
            <Image
              src="/icons/download.svg"
              alt="download"
              width={18}
              height={18}
              quality={100}
            />
            Brochure
          </Link>
        </div>
      </div>
      <Image
        src="/Logo.png"
        alt="systematic chaos logo"
        width={540}
        height={540}
        priority
        loading="eager"
        quality={100}
        className="mx-auto lg:mx-0 lg:ml-0 pl-6 px-4 lg:px-0"
      />
    </div>
  );
};

export default Hero;
