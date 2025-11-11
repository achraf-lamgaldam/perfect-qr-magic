import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnhancedQRGenerator } from "@/components/EnhancedQRGenerator";
import { Helmet } from "react-helmet-async";

const Generator = () => {
  return (
    <>
      <Helmet>
        <title>QR Code Generator - Create Custom QR Codes</title>
        <meta name="description" content="Advanced QR code generator with logo upload, color customization, templates for WiFi, vCard, email and more. Download high-quality QR codes instantly." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 bg-gradient-hero">
          <EnhancedQRGenerator />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Generator;