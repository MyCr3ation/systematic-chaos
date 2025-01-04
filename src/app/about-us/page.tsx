import Image from "next/image";
import Footer from "../components/Footer";
import ImageWithMatchingBackground from "../components/ImageWithMatchingBackground";
import Link from "next/link";

const AboutUs = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-20 lg:gap-32 pb-12">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-12 px-4 xl:px-0 xl:max-w-6xl mx-auto">
        <Image
          src="/about-us.jpg"
          alt="systematic chaos logo"
          width={480}
          height={480}
          priority
          loading="eager"
          quality={100}
          className="mx-auto lg:mx-0 lg:ml-0 px-4 lg:px-0 shrink-0"
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
            What is <br /> Systematic Chaos?
          </h2>
          <p>
            Systematic Chaos is our annual cultural intercollegiate festival,
            proudly hosted by the IT department at Colaba campus. Rooted in a
            legacy of excellence, our festival is more than an event - it&apos;s
            a celebration of technological prowess and ethical strength. We
            provide futuristic technical training, instill high discipline, and
            offer a platform that nurtures creativity and innovation.
          </p>
        </div>
      </div>
      <div className="w-full z-10 flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
        <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
          Past Sponsors
        </h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 md:gap-y-8">
          <ImageWithMatchingBackground
            imageUrl="/sponsors/frameboxx.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/gatsby.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/dc-legends-of-tomorrow.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/hiphopskincare.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/channel-win.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/frapp.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/gatsby-global.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/lokoman.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/lot.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/niit.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/taglr.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/zebronics.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/media-mentor.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/mindflix-holidays.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/omomos.jpg"
            className="h-16 w-56"
          />
          <ImageWithMatchingBackground
            imageUrl="/sponsors/vastr.jpg"
            className="h-16 w-56"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
