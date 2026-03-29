import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Heart, Sparkles } from "lucide-react";

const highlights = [
  { icon: Award, title: "Experienced Professionals", desc: "Skilled artists with years of expertise" },
  { icon: Shield, title: "Hygienic & Safe Products", desc: "Only premium, dermatologically tested products" },
  { icon: Heart, title: "Personalized Beauty Care", desc: "Customized treatments for your unique needs" },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Premium services at competitive prices" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-blush/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Why Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Why Choose Yellove
          </h2>
          <div className="w-20 h-0.5 gradient-rose mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-rose mx-auto mb-5 flex items-center justify-center shadow-rose transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
