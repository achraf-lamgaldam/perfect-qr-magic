import { useState, useRef, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Upload, Share2, Trash2, History as HistoryIcon, Palette } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { QRTemplates } from "@/components/QRTemplates";
import { QRHistory } from "@/components/QRHistory";
import { ColorThemes } from "@/components/ColorThemes";

interface QRHistoryItem {
  id: string;
  value: string;
  type: string;
  fgColor: string;
  bgColor: string;
  timestamp: number;
}

export const EnhancedQRGenerator = () => {
  const [qrValue, setQrValue] = useState("https://example.com");
  const [qrType, setQrType] = useState("url");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(50);
  const [batchText, setBatchText] = useState("");
  const [history, setHistory] = useState<QRHistoryItem[]>([]);
  const qrRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("qr-history");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to load history:", e);
      }
    }
  }, []);

  // Save to history
  const saveToHistory = () => {
    const newItem: QRHistoryItem = {
      id: Date.now().toString(),
      value: qrValue,
      type: qrType,
      fgColor,
      bgColor,
      timestamp: Date.now()
    };
    const updatedHistory = [newItem, ...history].slice(0, 20); // Keep last 20
    setHistory(updatedHistory);
    localStorage.setItem("qr-history", JSON.stringify(updatedHistory));
    toast.success("Saved to history!");
  };

  const loadFromHistory = (item: QRHistoryItem) => {
    setQrValue(item.value);
    setQrType(item.type);
    setFgColor(item.fgColor);
    setBgColor(item.bgColor);
    toast.success("Loaded from history!");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("qr-history");
    toast.success("History cleared!");
  };

  const applyTemplate = (value: string, type: string) => {
    setQrValue(value);
    setQrType(type);
  };

  const applyColorTheme = (fg: string, bg: string) => {
    setFgColor(fg);
    setBgColor(bg);
    toast.success("Theme applied!");
  };

  const downloadQR = (format: "png" | "svg") => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    saveToHistory(); // Auto-save when downloading

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
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-card border-border/50 backdrop-blur-sm bg-card/95">
          <CardHeader>
            <CardTitle className="text-3xl">QR Code Generator</CardTitle>
            <CardDescription>Create, customize, and download professional QR codes</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="generator" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="generator">Generator</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="themes">Color Themes</TabsTrigger>
                <TabsTrigger value="history">
                  <HistoryIcon className="w-4 h-4 mr-2" />
                  History ({history.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generator">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="qr-value">Content</Label>
                      <Input
                        id="qr-value"
                        value={qrValue}
                        onChange={(e) => setQrValue(e.target.value)}
                        placeholder="Enter URL, text, or data"
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
                            <Trash2 className="w-4 h-4" />
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
                      className="p-8 rounded-2xl border border-border/50 shadow-card transition-all hover:shadow-elegant relative"
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

              <TabsContent value="templates">
                <QRTemplates onApplyTemplate={applyTemplate} />
              </TabsContent>

              <TabsContent value="themes">
                <ColorThemes onApplyTheme={applyColorTheme} />
              </TabsContent>

              <TabsContent value="history">
                <QRHistory
                  history={history}
                  onLoadItem={loadFromHistory}
                  onClearHistory={clearHistory}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};