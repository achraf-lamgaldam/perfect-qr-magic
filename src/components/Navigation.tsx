import { QrCode, Home, BarChart3, Menu, HelpCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 group"
            onClick={() => (window.location.href = "/")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              QR Master
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <div onClick={() => (window.location.href = "/")}>
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </div>
              </Button>
              <Button
                variant={
                  location.pathname === "/generator" ? "default" : "ghost"
                }
                size="sm"
                asChild
              >
                <div onClick={() => (window.location.href = "generator")}>
                  <QrCode className="w-4 h-4 mr-2" />
                  Generator
                </div>
              </Button>
              <Button
                variant={
                  location.pathname === "/analytics" ? "default" : "ghost"
                }
                size="sm"
                asChild
              >
                <div onClick={() => (window.location.href = "analytics")}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </div>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4 mr-2" />
                    More
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <div
                      className="cursor-pointer"
                      onClick={() => (window.location.href = "how-it-works")}
                    >
                      How It Works
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div
                      className="cursor-pointer"
                      onClick={() => (window.location.href = "faq")}
                    >
                      FAQ
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div
                      className="cursor-pointer"
                      onClick={() => (window.location.href = "about")}
                    >
                      About Us
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div
                      className="cursor-pointer"
                      onClick={() => (window.location.href = "contact")}
                    >
                      Contact
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "/")}
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "generator")}
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    Generator
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "analytics")}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "how-it-works")}
                  >
                    How It Works
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "faq")}
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    FAQ
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "about")}
                  >
                    About Us
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => (window.location.href = "contact")}
                  >
                    Contact
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
