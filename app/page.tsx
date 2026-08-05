import Navbar from "@/components/layout/Navibar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/WowItWorks";
import Plans from "@/components/landing/Plans";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Plans />
      <Footer />
    </main>
  );
}
