import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs sm:text-sm">
          <a href="tel:01753531877" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="h-3 w-3" />
            01753 531877
          </a>
          <a href="mailto:reservations@skyexpresstravel.co.uk" className="hidden sm:block hover:text-accent transition-colors">
            reservations@skyexpresstravel.co.uk
          </a>
          <a href="tel:01162763332" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="h-3 w-3" />
            0116 276 3332
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            Sky<span className="text-accent">Express</span>
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-medium">Travel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                location.pathname === link.to ? "text-primary bg-muted" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover font-semibold">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-3 text-sm font-medium transition-colors hover:bg-muted",
                location.pathname === link.to ? "text-primary bg-muted" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get a Quote
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
