import Header from "@/components/layout/Header";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ClientsSection from "@/components/home/ClientsSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ClientsSection />
      </main>
    </>
  );
}
