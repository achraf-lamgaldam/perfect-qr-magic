import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Target, Users, Zap, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Simplicity First",
      description: "We believe powerful tools should be easy to use. No complicated menus, no confusing options."
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data stays yours. All QR codes are generated locally in your browser."
    },
    {
      icon: Heart,
      title: "Always Free",
      description: "Quality tools shouldn't cost money. QR Master is free forever, no hidden fees."
    },
    {
      icon: Users,
      title: "User Centered",
      description: "Built based on user feedback and real-world needs. Your input shapes our product."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-gradient-hero">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 shadow-elegant">
                <QrCode className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About QR Master
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Making QR code generation simple, fast, and accessible for everyone.
              </p>
            </div>

            {/* Mission */}
            <Card className="shadow-card border-border/50 mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  QR Master was born from a simple observation: creating QR codes shouldn't be complicated, 
                  expensive, or require sacrificing your privacy. We saw too many tools that were either 
                  too complex for casual users or locked essential features behind paywalls.
                </p>
                <p>
                  Our mission is to provide a completely free, easy-to-use QR code generator that respects 
                  your privacy while offering professional-grade features. Whether you're a small business 
                  owner, event organizer, or just someone who needs a quick QR code, we've built this for you.
                </p>
                <p>
                  We believe in the power of QR codes to connect the physical and digital worlds. From 
                  contactless payments to instant WiFi sharing, QR codes make life easier—and creating 
                  them should be just as effortless.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <Card key={value.title} className="shadow-card border-border/50">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* What We Offer */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">For Everyone</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Unlimited QR code generation</li>
                      <li>• No signup or login required</li>
                      <li>• Multiple export formats (PNG, SVG)</li>
                      <li>• Pre-built templates</li>
                      <li>• Color customization</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">For Businesses</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Logo integration for branding</li>
                      <li>• Batch generation for scale</li>
                      <li>• Analytics and tracking</li>
                      <li>• Professional color themes</li>
                      <li>• High-quality vector output</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;