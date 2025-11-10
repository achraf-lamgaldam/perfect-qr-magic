import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is QR Master really free?",
      answer: "Yes! QR Master is completely free to use. You can generate unlimited QR codes without any signup or subscription required."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account needed! You can start generating QR codes immediately without signing up. However, your QR history is saved locally in your browser."
    },
    {
      question: "What types of QR codes can I create?",
      answer: "You can create QR codes for URLs, plain text, WiFi credentials, vCards (business cards), email addresses, SMS messages, and phone numbers. We offer templates for each type to make it easier."
    },
    {
      question: "Can I customize the colors of my QR code?",
      answer: "Absolutely! You can choose any foreground and background colors, or select from our pre-designed color themes. We recommend ensuring good contrast for better scanability."
    },
    {
      question: "Can I add a logo to my QR code?",
      answer: "Yes! You can upload your own logo and adjust its size. The logo will be placed in the center of the QR code. We use high error correction to ensure the QR code remains scannable."
    },
    {
      question: "What formats can I download my QR code in?",
      answer: "You can download your QR codes as PNG (raster image) or SVG (vector image). PNG is great for web use, while SVG is perfect for printing at any size without quality loss."
    },
    {
      question: "Can I generate multiple QR codes at once?",
      answer: "Yes! Use our batch generation feature to create multiple QR codes from a list of URLs or text. Each QR code will be downloaded separately."
    },
    {
      question: "How does QR code tracking work?",
      answer: "Our analytics dashboard tracks when QR codes are scanned, including device types, browsers, and geographic locations. This helps you understand your QR code performance."
    },
    {
      question: "Are QR codes generated securely?",
      answer: "Yes! All QR codes are generated locally in your browser. Your data never leaves your device unless you choose to download or share the QR code."
    },
    {
      question: "Will my QR codes expire?",
      answer: "No! Once generated, static QR codes never expire. However, if the content they link to (like a URL) changes or becomes unavailable, the QR code won't work."
    },
    {
      question: "What size should my QR code be?",
      answer: "The minimum recommended size for printing is 2cm x 2cm (0.8in x 0.8in). For digital displays, 256px x 256px is a good starting point. You can adjust the size from 128px to 512px in our generator."
    },
    {
      question: "Can I edit a QR code after creating it?",
      answer: "Static QR codes cannot be edited once created. However, you can access your QR history to recreate similar codes or generate a new one with updated information."
    },
    {
      question: "Why isn't my QR code scanning?",
      answer: "Common issues include: insufficient contrast between colors, QR code too small, damaged or blurry image, or poor lighting. Try using darker colors on lighter backgrounds and ensure adequate size."
    },
    {
      question: "Can I use QR codes for commercial purposes?",
      answer: "Yes! You can use QR codes generated with QR Master for any purpose, including commercial use. There are no restrictions or licensing fees."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-background">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 shadow-elegant">
                <HelpCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about QR Master
              </p>
            </div>

            {/* FAQ Accordion */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Contact us for more help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;