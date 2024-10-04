import Header from "./components/header";
import CarouselSection from "./components/carousel";
import Hero from "./components/hero";

import SectionTwo from "./components/sectionTwo";
import Community from "./components/community";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden bg-[#000803] ">
        <Header />
        <div className="lg:py-10 flex flex-col gap-10 lg:gap-5">
          <Hero />
          <CarouselSection />
          <SectionTwo />
          <Community />

          <Footer />
        </div>
      </div>
    </>
  );
}
