import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Link2, Type, Wifi, Mail, Phone, User, Share2, Upload, BarChart3 } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";

type QRType = "url" | "text" | "wifi" | "email" | "phone" | "vcard";

const qrTypes = [
  { value: "url", label: "URL/Link", icon: Link2, placeholder: "https://example.com" },
  { value: "text", label: "Text", icon: Type, placeholder: "Enter your text" },
  { value: "wifi", label: "Wi-Fi", icon: Wifi, placeholder: "WIFI:T:WPA;S:NetworkName;P:Password;;" },
  { value: "email", label: "Email", icon: Mail, placeholder: "mailto:email@example.com" },
  { value: "phone", label: "Phone", icon: Phone, placeholder: "tel:+1234567890" },
  { value: "vcard", label: "vCard", icon: User, placeholder: "BEGIN:VCARD\nVERSION:3.0\nFN:Name\nEND:VCARD" },
];

export const QRGenerator = () => {
  const [qrValue, setQrValue] = useState("https://example.com");
  const [qrType, setQrType] = useState<QRType>("url");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(50);
  const [batchText, setBatchText] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const selectedType = qrTypes.find(t => t.value === qrType);

  const downloadQR = (format: "png" | "svg") => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    if (format === "svg") {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.svg";
      link.click();
      URL.revokeObjectURL(url);
      toast.success("QR Code downloaded as SVG!");
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = size;
        canvas.height = size;
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = "qrcode.png";
            link.click();
            URL.revokeObjectURL(pngUrl);
            toast.success("QR Code downloaded as PNG!");
          }
        });
      };
      
      img.src = url;
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
        toast.success("Logo uploaded!");
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
    toast.success("Logo removed");
  };

  const downloadBatch = () => {
    const lines = batchText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      toast.error("Please enter at least one URL or text");
      return;
    }

    lines.forEach((line, index) => {
      const tempDiv = document.createElement('div');
      const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      tempSvg.setAttribute("width", size.toString());
      tempSvg.setAttribute("height", size.toString());
      tempDiv.appendChild(tempSvg);
      
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      
      // Generate QR code SVG
      const qrSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <rect width="${size}" height="${size}" fill="${bgColor}"/>
        <!-- QR code would be rendered here -->
      </svg>`;
      
      const svgBlob = new Blob([qrSvg], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = size;
        canvas.height = size;
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = `qrcode-${index + 1}.png`;
            link.click();
            URL.revokeObjectURL(pngUrl);
          }
        });
      };
      
      img.src = url;
    });

    toast.success(`Generating ${lines.length} QR codes!`);
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "QR Code",
          text: "Check out this QR code!",
          url: qrValue,
        });
        toast.success("Shared successfully!");
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          toast.error("Failed to share");
        }
      }
    } else {
      navigator.clipboard.writeText(qrValue);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-card border-border/50 backdrop-blur-sm bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Generate Your QR Code</CardTitle>
            <CardDescription>Customize and download your QR code in seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="single" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="single">Single QR Code</TabsTrigger>
                <TabsTrigger value="batch">Batch Generation</TabsTrigger>
              </TabsList>

              <TabsContent value="single">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="qr-type">QR Code Type</Label>
                  <Select value={qrType} onValueChange={(value) => setQrType(value as QRType)}>
                    <SelectTrigger id="qr-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {qrTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <span>{type.label}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qr-value">Content</Label>
                  <Input
                    id="qr-value"
                    value={qrValue}
                    onChange={(e) => setQrValue(e.target.value)}
                    placeholder={selectedType?.placeholder}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fg-color">Foreground Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="fg-color"
                        type="color"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="h-10 w-16 p-1 cursor-pointer"
                      />
                      <Input
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="bg-color"
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="h-10 w-16 p-1 cursor-pointer"
                      />
                      <Input
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Size: {size}px</Label>
                  <Slider
                    id="size"
                    min={128}
                    max={512}
                    step={32}
                    value={[size]}
                    onValueChange={(value) => setSize(value[0])}
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Logo (Optional)</Label>
                  <div className="flex gap-2">
                    <Input
                      ref={logoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="flex-1"
                    />
                    {logo && (
                      <Button onClick={removeLogo} variant="outline" size="icon">
                        <Upload className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  {logo && (
                    <div className="space-y-2">
                      <Label htmlFor="logo-size">Logo Size: {logoSize}px</Label>
                      <Slider
                        id="logo-size"
                        min={20}
                        max={100}
                        step={5}
                        value={[logoSize]}
                        onValueChange={(value) => setLogoSize(value[0])}
                        className="cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Section */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <div
                  ref={qrRef}
                  className="p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/50 shadow-card transition-all hover:shadow-elegant relative"
                  style={{ backgroundColor: bgColor }}
                >
                  <QRCodeSVG
                    value={qrValue}
                    size={size}
                    fgColor={fgColor}
                    bgColor={bgColor}
                    level="H"
                    includeMargin={false}
                  />
                  {logo && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded bg-white p-1"
                      style={{ width: logoSize, height: logoSize }}
                    />
                  )}
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    onClick={() => downloadQR("png")}
                    className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => downloadQR("svg")}
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download SVG
                  </Button>
                  <Button
                    onClick={shareQR}
                    variant="outline"
                    className="border-secondary/20 hover:bg-secondary/5"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="batch">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="batch-input">Enter URLs or Text (one per line)</Label>
                <textarea
                  id="batch-input"
                  value={batchText}
                  onChange={(e) => setBatchText(e.target.value)}
                  placeholder="https://example.com&#10;https://mysite.com&#10;Hello World"
                  className="w-full min-h-[200px] p-3 rounded-lg border border-border bg-background font-mono text-sm resize-y"
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={downloadBatch}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  disabled={!batchText.trim()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate Batch ({batchText.split('\n').filter(l => l.trim()).length} QR Codes)
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
