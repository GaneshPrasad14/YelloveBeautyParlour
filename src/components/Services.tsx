import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useBooking } from "@/contexts/BookingContext";
import fac from "@/assets/fac.jpg";
import meni from "@/assets/meni.jpg";
import pedi from "@/assets/pedi.jpg";
import thread from "@/assets/thread.jpg";
import mehndi from "@/assets/mehndi.jpg";
import hdMakeup from "@/assets/hd makeup.jpg";
import glowing from "@/assets/glowing.jpg";
import skintone from "@/assets/skintone.jpg";
import spp from "@/assets/spp.jpg";
import jewelset from "@/assets/jewelset.jpg";
import aariwork from "@/assets/aariwork.jpg";

const services = [
  {
    name: "Facial",
    desc: "Rejuvenating facials for radiant, glowing skin",
    img: fac
  },
  {
    name: "Manicure",
    desc: "Elegant nail art & luxurious hand care",
    img: meni
  },
  {
    name: "Pedicure",
    desc: "Premium pedicure for soft, beautiful feet",
    img: pedi
  },
  {
    name: "Threading",
    desc: "Precise eyebrow shaping & grooming",
    img: thread
  },
  {
    name: "Mehendi",
    desc: "Intricate henna designs for every occasion",
    img: mehndi
  },
  {
    name: "HD Makeup",
    desc: "Flawless HD finish for a camera-ready look",
    img: hdMakeup
  },
  {
    name: "Glowing Makeup",
    desc: "Luminous dewy skin with radiant finish",
    img: glowing
  },
  {
    name: "Skin Tone Makeup",
    desc: "Perfectly matched to your natural skin tone",
    img: skintone
  },
  {
    name: "Saree Pre-Pleating",
    desc: "Expert saree draping for a perfect silhouette",
    img: spp
  },
  {
    name: "Jewel Set Rental",
    desc: "Exquisite bridal jewelry sets for rent",
    img: jewelset
  },
  {
    name: "Aari Work",
    desc: "Beautiful hand-embroidered aari designs",
    img: aariwork
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { openBooking } = useBooking();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative rounded-2xl overflow-hidden card-lift cursor-pointer"
      onClick={() => openBooking(service.name)}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={service.img}
          alt={`${service.name} service at Yellove Beauty Parlour Perambalur`}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent flex flex-col justify-end p-5 transition-colors duration-500 group-hover:from-rose-gold/90">
        <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">{service.name}</h3>
        <p className="font-body text-xs text-primary-foreground/75 mb-3">{service.desc}</p>
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          Book Now →
        </span>
      </div>
      {/* Glow overlay on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="section-padding bg-ivory">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Premium Services
          </h2>
          <div className="w-20 h-0.5 gradient-rose mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
