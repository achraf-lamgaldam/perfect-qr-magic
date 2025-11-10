import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(2000, { message: "Message must be less than 2000 characters" })
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create mailto link with validated and encoded data
      const mailtoLink = `mailto:support@qrmaster.com?subject=${encodeURIComponent(validatedData.subject)}&body=${encodeURIComponent(
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`
      )}`;

      // Open email client
      window.location.href = mailtoLink;

      toast.success("Opening your email client...");
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the errors in the form");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-background">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">support@qrmaster.com</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-4">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Available 9am-5pm EST</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={errors.name ? "border-destructive" : ""}
                        maxLength={100}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={errors.email ? "border-destructive" : ""}
                        maxLength={255}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={errors.subject ? "border-destructive" : ""}
                      maxLength={200}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className={errors.message ? "border-destructive" : ""}
                      rows={6}
                      maxLength={2000}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message ? (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Minimum 10 characters
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {formData.message.length}/2000
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;