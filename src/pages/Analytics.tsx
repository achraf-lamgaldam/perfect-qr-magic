import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QRAnalytics } from "@/components/QRAnalytics";

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 bg-background">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                QR Code Analytics
              </h1>
              <p className="text-lg text-muted-foreground">
                Track and analyze your QR code performance
              </p>
            </div>
            <QRAnalytics />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Analytics;