
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <Services />
      <Gallery />
      <Stats />
      <PrivacyPolicy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
