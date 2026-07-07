import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <SocialProof />
        <Features />
        <ProductShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
