import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import Benefit from "@/components/Benefit";
import TrustSection from "@/components/TrustSection";
import CustomersWall from "@/components/CustomersWall";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import Properties from "@/components/Properties";
import MidOffer from "@/components/MidOffer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <Benefit />
        <TrustSection />
        <CustomersWall />
        <Mission />
        <Testimonials />
        <Properties />
        <MidOffer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
