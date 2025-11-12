import {
  QrCode,
  Zap,
  Palette,
  History,
  TrendingUp,
  Shield,
  Download,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate QR codes instantly with our optimized engine",
    },
    {
      icon: Palette,
      title: "Customizable Colors",
      description: "Choose any color scheme with gradients and themes",
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download as PNG, SVG, or generate in batches",
    },
    {
      icon: Smartphone,
      title: "Multiple Templates",
      description: "WiFi, vCard, Email, SMS, and more pre-built templates",
    },
    {
      icon: History,
      title: "QR History",
      description: "Access your previously generated QR codes anytime",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Track scans, locations, and device information",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "All QR codes generated locally in your browser",
    },
    {
      icon: QrCode,
      title: "Logo Support",
      description: "Add your brand logo to the center of QR codes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>QR Code Generator - Create Free QR Codes Instantly</title>
        <meta
          name="description"
          content="Generate QR codes for links, text, Wi-Fi, business cards and more. Free, fast and customizable QR code generator with instant download."
        />
        <meta
          property="og:title"
          content="QR Code Generator - Create Free QR Codes Instantly"
        />
        <meta
          property="og:description"
          content="Generate QR codes for links, text, Wi-Fi, business cards and more. Free, fast and customizable."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDg4ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 shadow-elegant">
              <QrCode className="w-10 h-10 text-primary-foreground" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Professional QR Codes
              <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
                Made Simple
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Generate, customize, and track QR codes with powerful features. No
              signup required. Completely free forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                <div onClick={() => (window.location.href = "generator")}>
                  <QrCode className="w-5 h-5 mr-2" />
                  Create QR Code Now
                </div>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/20 hover:bg-primary/5 text-lg px-8 py-6"
              >
                <div onClick={() => (window.location.href = "analytics")}>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Analytics
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything You Need
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features to create professional QR codes for any use
                case
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="shadow-card border-border/50 hover:shadow-elegant transition-all hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users creating professional QR codes every day.
              Start generating your QR codes now, no account needed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-10 py-6"
            >
              <div onClick={() => (window.location.href = "generator")}>
                <QrCode className="w-5 h-5 mr-2" />
                Create Your First QR Code
              </div>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
