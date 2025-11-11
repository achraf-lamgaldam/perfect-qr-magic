import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - QR Master | Your Data Protection</title>
        <meta name="description" content="Read our privacy policy to understand how QR Master protects your data. Learn about local storage, analytics data collection, and your privacy rights." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
      
      <div className="flex-1 bg-background">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 shadow-elegant">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Card className="shadow-card border-border/50">
              <CardContent className="prose prose-slate max-w-none pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Introduction</h2>
                  <p className="text-muted-foreground">
                    At QR Master, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, and protect your information when you use our QR code generation service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Local Storage</h3>
                  <p className="text-muted-foreground mb-4">
                    QR Master stores your QR code history locally in your browser using localStorage. This data 
                    includes the content of your QR codes, color preferences, and generation timestamps. This 
                    information never leaves your device and is only accessible to you.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Data</h3>
                  <p className="text-muted-foreground">
                    When QR codes are scanned, we collect anonymous analytics data including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                    <li>Scan timestamp</li>
                    <li>Device type (mobile, desktop, tablet)</li>
                    <li>Browser type</li>
                    <li>Geographic location (country and city level)</li>
                    <li>User agent string</li>
                  </ul>
                  <p className="text-muted-foreground">
                    This data is aggregated and anonymized. We do not collect personally identifiable information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the collected information to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide QR code generation services</li>
                    <li>Display analytics about QR code scans</li>
                    <li>Improve our service and user experience</li>
                    <li>Understand usage patterns and trends</li>
                    <li>Maintain and optimize our platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Data Security</h2>
                  <p className="text-muted-foreground">
                    All QR code generation happens locally in your browser. Your QR code content is not 
                    transmitted to our servers during the generation process. We implement industry-standard 
                    security measures to protect any data that is stored in our analytics database.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    QR Master does not share your data with third-party advertisers or marketing companies. 
                    We use Supabase for our backend infrastructure, which complies with GDPR and other privacy 
                    regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Cookies</h2>
                  <p className="text-muted-foreground">
                    We use minimal cookies and browser storage to maintain your preferences and QR code history. 
                    These are essential for the service to function properly. We do not use tracking cookies or 
                    advertising cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Clear your local QR code history at any time</li>
                    <li>Request deletion of any analytics data associated with your QR codes</li>
                    <li>Opt out of analytics tracking</li>
                    <li>Access any data we have collected</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    QR Master is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify users of any material 
                    changes by updating the "Last updated" date at the top of this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy, please contact us at privacy@qrmaster.com
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default Privacy;