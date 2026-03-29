import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya R.",
    text: "Absolutely loved the makeup! Very professional and friendly service. My bridal look was exactly what I dreamed of.",
    rating: 5,
  },
  {
    name: "Kavitha S.",
    text: "The best beauty parlour in Perambalur! Their HD makeup is stunning and lasts all day. Highly recommended!",
    rating: 5,
  },
  {
    name: "Deepika M.",
    text: "Amazing mehendi designs and wonderful saree draping service. Made my engagement day truly special.",
    rating: 5,
  },
  {
    name: "Anitha K.",
    text: "I've been coming here for years. The facial treatments are incredible and the staff is so caring and skilled.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-blush/30">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-body text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-20 h-0.5 gradient-rose mx-auto mt-4" />
        </motion.div>

        <div className="relative overflow-hidden min-h-[200px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: i === current ? 1 : 0,
                x: i === current ? 0 : i > current ? 100 : -100,
              }}
              transition={{ duration: 0.6 }}
              className={`text-center ${i === current ? "" : "absolute inset-0 pointer-events-none"}`}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-lg md:text-xl text-foreground/80 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-heading text-lg font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-rose-gold w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
