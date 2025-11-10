import { Link, useLocation } from "react-router-dom";
import { QrCode, Home, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              QR Master
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/generator" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/generator">
                <QrCode className="w-4 h-4 mr-2" />
                Generator
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/analytics" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/analytics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};