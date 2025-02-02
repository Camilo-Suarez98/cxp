import CryptoGallery from "@/components/ui/CryptoGallery";
import FeatureSection from "@/components/ui/FeatureSection";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <div className="bg-[#2C2C2C] w-full">
      <Hero />
      <CryptoGallery />
      <FeatureSection />
    </div>
  );
}
