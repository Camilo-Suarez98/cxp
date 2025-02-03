import CryptoGallery from "@/components/ui/CryptoGallery";
import FeatureSection from "@/components/ui/FeatureSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import BestOfCryptoSection from "@/components/ui/BestOfCryptoSection";
import LearnSection from "@/components/ui/LearnSection";
import PartnerSection from "@/components/ui/PartnerSection";
import ReviewsSections from "@/components/ui/ReviewsSections";
import TransformFinanceSection from "@/components/ui/TransformFinanceSection";

export default function Home() {
  return (
    <div className="bg-[#2C2C2C] w-full">
      <BestOfCryptoSection />
      <CryptoGallery />
      <FeatureSection />
      <FeaturesSection />
      <TransformFinanceSection />
      <LearnSection />
      <ReviewsSections />
      <PartnerSection />
    </div>
  );
}
