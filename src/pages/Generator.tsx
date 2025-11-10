import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnhancedQRGenerator } from "@/components/EnhancedQRGenerator";

const Generator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 bg-gradient-hero">
        <EnhancedQRGenerator />
      </div>
      <Footer />
    </div>
  );
};

export default Generator;