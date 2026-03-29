import { motion } from "framer-motion";
import { useBooking } from "@/contexts/BookingContext";
import heroImage from "@/assets/hero-beauty.png";

const Hero = () => {
  const { openBooking } = useBooking();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with zoom animation */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Yellove Beauty Parlour - Premium bridal and beauty services in Perambalur"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Shimmer particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-light/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-rose-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Welcome to Yellove Beauty Parlour
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-primary-foreground">Enhance Your</span>
            <br />
            <span className="text-gradient-gold">Natural Beauty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-body text-primary-foreground/80 text-base md:text-lg mb-10 max-w-lg"
          >
            Luxury Beauty Services | Bridal Makeup | Skin & Hair Care
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => openBooking()}
              className="gradient-rose text-primary-foreground px-8 py-3.5 rounded-full font-semibold tracking-wide shadow-rose transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="#services"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/70"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
