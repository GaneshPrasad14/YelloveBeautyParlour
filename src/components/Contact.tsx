import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}`;
    window.open(`https://wa.me/919585057358?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Book Your Appointment
          </h2>
          <div className="w-20 h-0.5 gradient-rose mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl gradient-rose flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Near NSK Mahal, Vadakku Madhavi Road,<br />
                  Perambalur, Tamil Nadu - 621212
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="tel:+919585057358"
                className="w-12 h-12 rounded-xl gradient-rose flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5 text-primary-foreground" />
              </a>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Call Us</h3>
                <p className="font-body text-sm text-muted-foreground">+91 95850 57358</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/919585057358"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-primary-foreground transition-transform group-hover:rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="font-body text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </div>

          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Service</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option>Facial</option>
                  <option>Manicure</option>
                  <option>Pedicure</option>
                  <option>Threading</option>
                  <option>Mehendi</option>
                  <option>HD Makeup</option>
                  <option>Glowing Makeup</option>
                  <option>Skin Tone Makeup</option>
                  <option>Bridal Makeup</option>
                  <option>Saree Pre-Pleating</option>
                  <option>Jewel Set Rental</option>
                  <option>Aari Work</option>
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-rose text-primary-foreground py-3.5 rounded-xl font-semibold tracking-wide shadow-rose transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                Book Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
