import { QrCode } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                QR Master
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Create professional QR codes instantly. Free, fast, and fully
              customizable. No signup required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "generator")}
                >
                  Generator
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "how-it-works")}
                >
                  How It Works
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "faq")}
                >
                  FAQ
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "analytics")}
                >
                  Analytics
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "about")}
                >
                  About Us
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "contact")}
                >
                  Contact
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "privacy")}
                >
                  Privacy Policy
                </div>
              </li>
              <li>
                <div
                  className="hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "terms")}
                >
                  Terms of Service
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© {currentYear} QR Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
