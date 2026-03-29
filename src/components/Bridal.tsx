import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Star, Gem } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";
import bridalImage from "@/assets/bridal.jpg";

const packages = [
  {
    name: "Silver",
    price: "3,999",
    icon: Star,
    features: ["HD Bridal Makeup", "Basic Hairstyling", "Saree Draping"],
    highlight: false,
  },
  {
    name: "Gold",
    price: "4,999",
    icon: Crown,
    features: ["Glowing Bridal Makeup", "Premium Hairstyling", "Saree Draping", "Jewellery Setup", "Pre-Bridal Facial"],
    highlight: true,
  },
  {
    name: "Platinum",
    price: "6,999",
    icon: Gem,
    features: ["Skin Tone HD Makeup", "Celebrity Hairstyling", "Saree Draping", "Full Jewellery Setup", "3-Day Pre-Bridal Package", "Mehendi"],
    highlight: false,
  },
];

const Bridal = () => {
  const { openBooking } = useBooking();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bridal" className="relative py-20 md:py-28 overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(40, 60%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(355, 30%, 40%) 0%, transparent 40%)`
      }} />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-gold-light text-sm tracking-[0.3em] uppercase mb-3">Special Occasion</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Bridal <span className="text-gradient-gold">Packages</span>
          </h2>
          <div className="w-20 h-0.5 gradient-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-gold">
              <img
                src={bridalImage}
                alt="Bridal makeup transformation at Yellove Beauty Parlour"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full gradient-gold opacity-20 blur-2xl" />
          </motion.div>

          {/* Right - Packages */}
          <div className="space-y-6 max-w-md mx-auto lg:mx-0 w-full">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className={`rounded-2xl p-6 transition-all duration-300 ${pkg.highlight
                  ? "glass-dark border border-gold/30 shadow-gold"
                  : "glass-dark border border-primary-foreground/10"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <pkg.icon className={`w-6 h-6 ${pkg.highlight ? "text-gold" : "text-rose-gold-light"}`} />
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground">{pkg.name} Package</h3>
                  {pkg.highlight && (
                    <span className="ml-auto text-[10px] font-body font-bold tracking-widest uppercase gradient-gold text-charcoal px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <p className="font-heading text-2xl font-bold text-gold mb-4 tracking-tight">
                  ₹{pkg.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openBooking(`Bridal ${pkg.name} Package`)}
                  className={`w-full py-2.5 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-300 ${pkg.highlight
                    ? "gradient-gold text-charcoal shadow-gold hover:shadow-lg"
                    : "border border-gold/40 text-gold hover:bg-gold/10"
                    }`}
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridal;
