import Sponsors from "./components/Sponsors";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Venues from "./components/Venues";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Pillars from "./components/Pillars";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-20 lg:gap-32 pb-12">
      <Background />
      <Hero />
      <Pillars />
      <Events />
      {/* <Sponsors /> */}
      <Gallery />
      <Venues />
      <Footer />
    </main>
  );
}
