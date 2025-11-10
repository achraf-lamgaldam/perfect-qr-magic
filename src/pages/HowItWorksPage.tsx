import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Upload, Palette, Download, BarChart3, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Choose Your Content Type",
      description: "Select from URL, WiFi, vCard, Email, SMS, or plain text. We offer pre-built templates to make it even easier."
    },
    {
      icon: Palette,
      title: "Customize Your Design",
      description: "Pick colors from our theme library or create your own. Add your logo to the center for branded QR codes."
    },
    {
      icon: Upload,
      title: "Add Your Logo (Optional)",
      description: "Upload your company logo or any image to place in the center of your QR code for better brand recognition."
    },
    {
      icon: Download,
      title: "Download in Multiple Formats",
      description: "Save your QR code as PNG for web use or SVG for print. Generate multiple QR codes at once with batch generation."
    },
    {
      icon: Share2,
      title: "Share Instantly",
      description: "Use the built-in share feature to distribute your QR code across platforms or copy the link to clipboard."
    },
    {
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor scans, view device types, browsers, and geographic data through our analytics dashboard."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gradient-hero">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Create professional QR codes in six simple steps. No technical knowledge required.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="shadow-card border-border/50 hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary mb-1">
                            Step {index + 1}
                          </div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card rounded-2xl shadow-card border border-border/50 p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Create Your QR Code?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start generating professional QR codes in seconds. No signup required.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-10 py-6"
              >
                <Link to="/generator">
                  <QrCode className="w-5 h-5 mr-2" />
                  Get Started Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;