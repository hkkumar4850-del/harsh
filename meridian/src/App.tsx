import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Collection from "@/components/Collection";
import Craftsmanship from "@/components/Craftsmanship";
import ProductGrid from "@/components/ProductGrid";
import Configurator from "@/components/Configurator";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Manifesto />
        <Collection />
        <Craftsmanship />
        <ProductGrid />
        <Configurator />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
