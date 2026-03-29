import { MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal py-12 px-4 border-t border-primary-foreground/5">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6">
            <img src="/logo.png" alt="Yellove Beauty Logo" className="h-24 w-auto transition-transform duration-500 hover:scale-105" />
          </div>
          <p className="font-body text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
            Premium beauty services in Perambalur. Your destination for luxury bridal makeup, skincare, and beauty transformations.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-6 tracking-wide">Quick Links</h4>
          <div className="space-y-3">
            {["Home", "Services", "Bridal", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block font-body text-sm text-primary-foreground/50 hover:text-rose-gold-light transition-all duration-300 transform hover:translate-x-1"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-6 tracking-wide">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-rose-gold-light mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-primary-foreground/60 max-w-[220px]">
                Near NSK Mahal, Vadakku Madhavi Road, Perambalur, TN - 621212
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-5 h-5 text-rose-gold-light flex-shrink-0" />
              <a
                href="https://wa.me/919585057358"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary-foreground/60 hover:text-emerald-400 transition-colors"
              >
                +91 95850 57358
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30">
          © {new Date().getFullYear()} Yellove Beauty Parlour, Perambalur. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
