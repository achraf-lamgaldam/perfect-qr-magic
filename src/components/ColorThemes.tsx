import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ColorThemesProps {
  onApplyTheme: (fgColor: string, bgColor: string) => void;
}

const themes = [
  { name: "Classic Black", fg: "#000000", bg: "#ffffff" },
  { name: "Ocean Blue", fg: "#0088ff", bg: "#ffffff" },
  { name: "Forest Green", fg: "#22c55e", bg: "#ffffff" },
  { name: "Royal Purple", fg: "#9333ea", bg: "#ffffff" },
  { name: "Sunset Orange", fg: "#ff6b00", bg: "#ffffff" },
  { name: "Ruby Red", fg: "#dc2626", bg: "#ffffff" },
  { name: "Gold Luxury", fg: "#d97706", bg: "#fffbeb" },
  { name: "Mint Fresh", fg: "#10b981", bg: "#ecfdf5" },
  { name: "Pink Passion", fg: "#ec4899", bg: "#fdf2f8" },
  { name: "Cyber Neon", fg: "#06b6d4", bg: "#083344" },
  { name: "Dark Mode", fg: "#ffffff", bg: "#1f2937" },
  { name: "Midnight Blue", fg: "#60a5fa", bg: "#1e3a8a" },
  { name: "Pastel Dream", fg: "#a78bfa", bg: "#faf5ff" },
  { name: "Earth Tones", fg: "#78350f", bg: "#fef3c7" },
  { name: "Monochrome", fg: "#374151", bg: "#f3f4f6" },
];

export const ColorThemes = ({ onApplyTheme }: ColorThemesProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Color Themes</h3>
        <p className="text-muted-foreground">Choose from pre-designed color combinations</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {themes.map((theme) => (
          <Card
            key={theme.name}
            className="cursor-pointer hover:shadow-elegant transition-all hover:-translate-y-1"
            onClick={() => onApplyTheme(theme.fg, theme.bg)}
          >
            <CardContent className="p-4 space-y-3">
              <div className="aspect-square rounded-lg border border-border/50 overflow-hidden">
                <div className="w-full h-1/2" style={{ backgroundColor: theme.fg }} />
                <div className="w-full h-1/2" style={{ backgroundColor: theme.bg }} />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm text-foreground">{theme.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {theme.fg} / {theme.bg}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};