import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridal from "@/components/Bridal";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgress, WhatsAppButton } from "@/components/FloatingElements";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Bridal />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
