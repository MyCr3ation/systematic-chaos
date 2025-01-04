import Image from "next/image";
import Link from "next/link";

const Pillars = () => {
  return (
    <div className="w-full z-10 flex flex-col md:flex-row md:flex-wrap justify-between items-start px-4 xl:px-0 xl:max-w-6xl mx-auto gap-20">
      <div className="mx-auto">
        <div className="rounded-full border-ternary mx-auto w-48 h-48 lg:w-56 lg:h-56 bg-cover bg-center bg-[url('/teachers/dr-hemlata-bagla.jpg')]" />
        <div className="flex flex-col gap-2 mt-6 w-64">
          <div className="text-lg lg:text-xl font-semibold line-clamp-2 capitalize">
          Col. Prof.hemlata k.bagla
          </div>
          <div className="w-24 h-0.5 bg-secondary" />
          <div className="mb-2 font-normal line-clamp-2">
            Vice Chancellor, HSNC University, Mumbai
          </div>
          {/* <div className="capitalize">HSNC University, Mumbai</div> */}
        </div>
      </div>
      <div className="mx-auto">
        <div className="rounded-full border-ternary mx-auto w-48 h-48 lg:w-56 lg:h-56 bg-cover bg-center bg-[url('/teachers/dr-tejashree-shanba.jpg')]" />
        <div className="flex flex-col gap-2 mt-6 w-64">
          <div className="text-lg lg:text-xl font-semibold line-clamp-2 capitalize">
           Prof (Dr.) tejashree v.shanbag
          </div>
          <div className="w-24 h-0.5 bg-secondary" />
          <div className="mb-2 font-normal line-clamp-2">
            I/C Principal, K.C. College
          </div>
          {/* <div className="capitalize">K.C. College</div> */}
        </div>
      </div>
      <div className="mx-auto">
        <div className="rounded-full border-ternary mx-auto w-48 h-48 lg:w-56 lg:h-56 bg-cover bg-center bg-[url('/teachers/dr-rakhi-gupta.jpg')]" />
        <div className="flex flex-col gap-2 mt-6 w-64">
          <div className="text-lg lg:text-xl font-semibold line-clamp-2 capitalize">
          Dr. rakhi gupta
          </div>
          <div className="w-24 h-0.5 bg-secondary" />
          <div className="mb-2 font-normal line-clamp-2">
            HOD (Information Technology), K.C. College
          </div>
          {/* <div className="capitalize">K.C. College</div> */}
        </div>
      </div>
    </div>
  );
};

export default Pillars;
