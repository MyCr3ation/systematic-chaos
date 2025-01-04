import Footer from "./components/Footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="w-full flex flex-col items-center justify-between gap-20 lg:gap-32 pb-12">
      <div className="relative w-full pt-[480px] bg-cover md:bg-contain bg-center bg-no-repeat bg-[url('/not-found.svg')]">
        <Link
          href="https://storyset.com/online"
          target="_blank"
          referrerPolicy="no-referrer"
          className="absolute right-1/4 -bottom-8 text-xs opacity-10"
        >
          Online illustrations by Storyset
        </Link>
      </div>
      <Footer />
    </main>
  );
}
