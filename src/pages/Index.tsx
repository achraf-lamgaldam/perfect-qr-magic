import { Hero } from "@/components/Hero";
import { QRGenerator } from "@/components/QRGenerator";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { QRAnalytics } from "@/components/QRAnalytics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QRGenerator />
      <Features />
      <HowItWorks />
      <QRAnalytics />
      <Footer />
    </div>
  );
};

export default Index;
