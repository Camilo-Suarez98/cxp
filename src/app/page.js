import CryptoGallery from "@/components/ui/CryptoGallery";
import FeatureSection from "@/components/ui/FeatureSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import Hero from "@/components/ui/Hero";
import TransformFinanceSection from "@/components/ui/TransformFinanceSection";

export default function Home() {
  return (
    <div className="bg-[#2C2C2C] w-full">
      <Hero />
      <CryptoGallery />
      <FeatureSection />
      <FeaturesSection />
      <TransformFinanceSection />
    </div>
  );
}
