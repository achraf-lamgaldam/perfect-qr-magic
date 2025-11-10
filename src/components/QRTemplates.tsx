import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Wifi, Mail, Phone, MessageSquare, User, Link2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface QRTemplatesProps {
  onApplyTemplate: (value: string, type: string) => void;
}

export const QRTemplates = ({ onApplyTemplate }: QRTemplatesProps) => {
  const [wifiData, setWifiData] = useState({ ssid: "", password: "", encryption: "WPA" });
  const [vcardData, setVcardData] = useState({ name: "", email: "", phone: "", org: "" });
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" });
  const [smsData, setSmsData] = useState({ number: "", message: "" });

  const generateWiFi = () => {
    const value = `WIFI:T:${wifiData.encryption};S:${wifiData.ssid};P:${wifiData.password};;`;
    onApplyTemplate(value, "wifi");
  };

  const generateVCard = () => {
    const value = `BEGIN:VCARD
VERSION:3.0
FN:${vcardData.name}
EMAIL:${vcardData.email}
TEL:${vcardData.phone}
ORG:${vcardData.org}
END:VCARD`;
    onApplyTemplate(value, "vcard");
  };

  const generateEmail = () => {
    const value = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    onApplyTemplate(value, "email");
  };

  const generateSMS = () => {
    const value = `sms:${smsData.number}?body=${encodeURIComponent(smsData.message)}`;
    onApplyTemplate(value, "sms");
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">QR Code Templates</h3>
        <p className="text-muted-foreground">Pre-configured templates for common use cases</p>
      </div>

      <Tabs defaultValue="wifi" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="wifi">
            <Wifi className="w-4 h-4 mr-2" />
            WiFi
          </TabsTrigger>
          <TabsTrigger value="vcard">
            <User className="w-4 h-4 mr-2" />
            vCard
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </TabsTrigger>
          <TabsTrigger value="sms">
            <MessageSquare className="w-4 h-4 mr-2" />
            SMS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wifi">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                WiFi Network
              </CardTitle>
              <CardDescription>Generate a QR code for easy WiFi connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
                <Input
                  id="wifi-ssid"
                  value={wifiData.ssid}
                  onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                  placeholder="MyNetwork"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wifi-password">Password</Label>
                <Input
                  id="wifi-password"
                  type="password"
                  value={wifiData.password}
                  onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                  placeholder="password123"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wifi-encryption">Encryption</Label>
                <select
                  id="wifi-encryption"
                  value={wifiData.encryption}
                  onChange={(e) => setWifiData({ ...wifiData, encryption: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">None</option>
                </select>
              </div>
              <Button onClick={generateWiFi} className="w-full">
                Generate WiFi QR Code
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vcard">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Business Card (vCard)
              </CardTitle>
              <CardDescription>Create a digital business card QR code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vcard-name">Full Name</Label>
                <Input
                  id="vcard-name"
                  value={vcardData.name}
                  onChange={(e) => setVcardData({ ...vcardData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vcard-email">Email</Label>
                <Input
                  id="vcard-email"
                  type="email"
                  value={vcardData.email}
                  onChange={(e) => setVcardData({ ...vcardData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vcard-phone">Phone</Label>
                <Input
                  id="vcard-phone"
                  value={vcardData.phone}
                  onChange={(e) => setVcardData({ ...vcardData, phone: e.target.value })}
                  placeholder="+1234567890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vcard-org">Organization</Label>
                <Input
                  id="vcard-org"
                  value={vcardData.org}
                  onChange={(e) => setVcardData({ ...vcardData, org: e.target.value })}
                  placeholder="Company Inc."
                />
              </div>
              <Button onClick={generateVCard} className="w-full">
                Generate vCard QR Code
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Message
              </CardTitle>
              <CardDescription>Generate a QR code that opens an email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-to">Recipient Email</Label>
                <Input
                  id="email-to"
                  type="email"
                  value={emailData.to}
                  onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                  placeholder="recipient@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-subject">Subject</Label>
                <Input
                  id="email-subject"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                  placeholder="Email subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-body">Message</Label>
                <textarea
                  id="email-body"
                  value={emailData.body}
                  onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                  placeholder="Email message"
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                />
              </div>
              <Button onClick={generateEmail} className="w-full">
                Generate Email QR Code
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                SMS Message
              </CardTitle>
              <CardDescription>Create a QR code for sending SMS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sms-number">Phone Number</Label>
                <Input
                  id="sms-number"
                  value={smsData.number}
                  onChange={(e) => setSmsData({ ...smsData, number: e.target.value })}
                  placeholder="+1234567890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-message">Message</Label>
                <textarea
                  id="sms-message"
                  value={smsData.message}
                  onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
                  placeholder="Your message"
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                />
              </div>
              <Button onClick={generateSMS} className="w-full">
                Generate SMS QR Code
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};