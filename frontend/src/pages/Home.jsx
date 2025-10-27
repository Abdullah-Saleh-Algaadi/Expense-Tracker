import Header from "../components/common/Header";
import CallToAction from "../components/sections/CallToAction";
import FeaturesSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToAction/>
      </main>
    </>
  );
}
