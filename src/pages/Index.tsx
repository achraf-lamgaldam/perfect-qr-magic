import { Hero } from "@/components/Hero";
import { QRGenerator } from "@/components/QRGenerator";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QRGenerator />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
