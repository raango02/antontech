import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Verse from "@/components/Verse";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <div className="relative min-h-screen bg-[#030303]">
        <TechBackground />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <CtaBanner />
          <About />
          <Contact />
          <Verse />
        </main>
        <Footer />
      </div>
    </SplashScreen>
  );
}
