import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.47 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.48 PM.jpeg";
import img3 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.49 PM.jpeg";
import img4 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.50 PM (1).jpeg";
import img5 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.50 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.51 PM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.51 PM (2).jpeg";
import img8 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.51 PM.jpeg";
import img9 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.52 PM (1).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.52 PM (2).jpeg";
import img11 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.52 PM.jpeg";
import img12 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.53 PM (1).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.53 PM (2).jpeg";
import img14 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.53 PM.jpeg";
import img15 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.54 PM (1).jpeg";
import img16 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.54 PM (2).jpeg";
import img17 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.54 PM.jpg";
import img18 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.55 PM (1).jpeg";
import img19 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.55 PM (2).jpeg";
import img20 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.55 PM.jpeg";
import img21 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.56 PM (1).jpeg";
import img22 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.56 PM (2).jpeg";
import img23 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.56 PM.jpeg";
import img24 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.57 PM (2).jpeg";
import img25 from "@/assets/WhatsApp Image 2026-03-29 at 6.07.57 PM.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25
];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Work & Transformations
          </h2>
          <div className="w-20 h-0.5 gradient-rose mx-auto mt-4" />
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img}
                alt={`Beauty work gallery image ${i + 1} - Yellove Beauty Parlour`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                <div className="glass-dark px-4 py-2 rounded-full border border-primary-foreground/20 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary-foreground font-body text-xs tracking-widest uppercase font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              {/* Subtle glass border on top */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-rose-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox]}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
