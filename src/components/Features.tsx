import { Zap, Palette, Shield, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate QR codes instantly with real-time preview. No waiting, no delays.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Choose custom colors, adjust sizes, and personalize your QR codes to match your brand.",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "All QR codes are generated client-side. Your data never leaves your browser.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Download as PNG or SVG. Perfect for both digital and print use.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Our QR Generator?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make QR code generation simple and efficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
  );
};
