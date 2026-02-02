import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/Cta";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 overflow-hidden">
      <Navbar />
      <Hero />
      <CTA />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
