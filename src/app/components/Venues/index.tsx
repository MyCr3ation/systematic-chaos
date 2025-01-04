import Link from "next/link";

const Venues = () => {
  return (
    <div className="w-full z-10 flex flex-col justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-9">
      <h2 className="text-secondary text-[28px] md:text-[40px] font-heading leading-[48px]">
        Venues
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          key="/kc-college-churchgate-campus"
          href="https://www.google.com/maps/place/K.+C+College/@18.9333664,72.8264594,18.25z/data=!4m6!3m5!1s0x3be7d17e67d2933b:0x5ddbb31cfe4c7ba7!8m2!3d18.9297714!4d72.8271616!16s%2Fm%2F0cr50sg?hl=en&entry=ttu"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <div className="relative flex flex-col justify-end items-start px-6 w-full pt-[320px] pb-6 gap-2 bg-cover bg-center bg-[url('/churchgate.jpg')] before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-primary before:from-20% before:opacity-80">
            <div className="absolute z-[1] flex flex-col gap-2">
              <h4 className="text-lg lg:text-xl font-medium capitalize">
                churchgate campus
              </h4>
            </div>
          </div>
        </Link>
        <Link
          key="/kc-college-colaba-campus"
          href="https://www.google.com/maps/place/KC+College+Colaba+Campus/@18.923826,72.832297,16z/data=!4m6!3m5!1s0x3be7d1c115ffdef5:0xbe55d4c3683b0461!8m2!3d18.9238258!4d72.832297!16s%2Fg%2F11hb6s9yky?hl=en&entry=ttu"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <div className="relative flex flex-col justify-end items-start px-6 w-full pt-[320px] pb-6 gap-2 bg-cover bg-center bg-[url('/colaba.jpg')] before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-primary before:from-20% before:opacity-80">
            <div className="absolute z-[1] flex flex-col gap-2">
              <h4 className="text-lg lg:text-xl font-medium capitalize">
                colaba campus
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Venues;
