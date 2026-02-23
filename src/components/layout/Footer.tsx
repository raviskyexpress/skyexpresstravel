import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Sky<span className="text-accent">Express</span> Travel
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted by thousands for over 25 years. We specialize in providing affordable, premium travel services with cultural expertise and personalized care.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/services" className="hover:text-accent transition-colors">Airline Tickets</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Visa Services</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Tour Packages</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Sikh Tours to Pakistan</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <a href="tel:01753531877" className="hover:text-accent transition-colors block">01753 531877</a>
                  <a href="tel:01162763332" className="hover:text-accent transition-colors block">0116 276 3332</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a href="mailto:reservations@skyexpresstravel.co.uk" className="hover:text-accent transition-colors break-all">
                  reservations@skyexpresstravel.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>6-8 High Street, Slough SL1 1EE, UK</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>143 Green Lane Road, Leicester LE5 ETQ, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} SkyExpress Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
