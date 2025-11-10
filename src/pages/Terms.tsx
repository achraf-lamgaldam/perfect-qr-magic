import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-background">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 shadow-elegant">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Card className="shadow-card border-border/50">
              <CardContent className="prose prose-slate max-w-none pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using QR Master, you accept and agree to be bound by the terms and 
                    provisions of this agreement. If you do not agree to these terms, please do not use our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Use of Service</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Permitted Use</h3>
                  <p className="text-muted-foreground mb-4">
                    QR Master is provided free of charge for both personal and commercial use. You may:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                    <li>Generate unlimited QR codes</li>
                    <li>Download and use QR codes for any lawful purpose</li>
                    <li>Use QR codes in commercial projects without attribution</li>
                    <li>Customize QR codes with your own branding</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-2">Prohibited Use</h3>
                  <p className="text-muted-foreground mb-4">You may not:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Use the service for illegal activities or to promote illegal content</li>
                    <li>Create QR codes that link to malicious websites or malware</li>
                    <li>Attempt to reverse engineer or copy our source code</li>
                    <li>Overload our servers with automated requests</li>
                    <li>Use the service to spam or harass others</li>
                    <li>Violate any intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Intellectual Property</h2>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Your Content</h3>
                  <p className="text-muted-foreground mb-4">
                    You retain all rights to the content you input into QR codes. QR Master does not claim 
                    ownership of your QR code content or the generated QR codes themselves.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Platform</h3>
                  <p className="text-muted-foreground">
                    The QR Master platform, including its design, code, and branding, is protected by copyright 
                    and other intellectual property laws. You may not copy, modify, or distribute our platform 
                    without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground">
                    QR Master is provided "as is" and "as available" without any warranties of any kind, either 
                    express or implied. We do not guarantee that:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>The service will be uninterrupted or error-free</li>
                    <li>Generated QR codes will work in all scenarios</li>
                    <li>The service will meet your specific requirements</li>
                    <li>All bugs or errors will be corrected</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, QR Master shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
                    intangible losses resulting from:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Your use or inability to use the service</li>
                    <li>Any unauthorized access to or use of our servers</li>
                    <li>Any bugs, viruses, or other harmful code</li>
                    <li>Any errors or omissions in content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Privacy and Data</h2>
                  <p className="text-muted-foreground">
                    Your use of QR Master is also governed by our Privacy Policy. Please review our Privacy 
                    Policy to understand our practices regarding your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Service Modifications</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify or discontinue, temporarily or permanently, the service 
                    (or any part thereof) with or without notice. We shall not be liable to you or any third 
                    party for any modification, suspension, or discontinuance of the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless QR Master and its affiliates from any claims, 
                    damages, losses, liabilities, and expenses (including legal fees) arising from your use 
                    of the service or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with the laws of the United 
                    States and the State of California, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to update these Terms of Service at any time. We will notify users 
                    of any material changes by updating the "Last updated" date. Your continued use of the 
                    service after such changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at legal@qrmaster.com
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Severability</h2>
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision 
                    shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                    otherwise remain in full force and effect.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;