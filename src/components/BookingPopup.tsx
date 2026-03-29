import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram",
    "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
    "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
    "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
    "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur",
    "Vellore", "Viluppuram", "Virudhunagar"
].sort();

const services = [
    "Bridal Silver Package", "Bridal Gold Package", "Bridal Platinum Package",
    "Facial", "Manicure", "Pedicure", "Threading", "Mehendi",
    "HD Makeup", "Glowing Makeup", "Skin Tone Makeup",
    "Saree Pre-Pleating", "Jewel Set Rental", "Aari Work", "Other"
];

import { useBooking } from "@/contexts/BookingContext";

const BookingPopup = () => {
    const { isOpen, closeBooking, openBooking, selectedService } = useBooking();
    const [form, setForm] = useState({
        name: "",
        service: "",
        number: "",
        description: "",
        district: "",
        date: ""
    });

    useEffect(() => {
        if (selectedService) {
            setForm(prev => ({ ...prev, service: selectedService }));
        }
    }, [selectedService]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) openBooking();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `New Appointment Request:\nName: ${form.name}\nService: ${form.service}\nPhone: ${form.number}\nDistrict: ${form.district}\nDate: ${form.date}\nDescription: ${form.description}`;
        window.open(`https://wa.me/919585057358?text=${encodeURIComponent(msg)}`, "_blank");
        closeBooking();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-ivory rounded-3xl shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={closeBooking}
                        className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/5 text-charcoal hover:bg-charcoal/10 transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="bg-gradient-to-r from-rose-gold to-rose-gold-light py-6 md:py-8 px-6 md:px-8 text-primary-foreground text-center">
                        <h2 className="font-heading text-xl md:text-3xl font-bold mb-1 md:mb-2">Book Your Session</h2>
                        <p className="font-body text-[10px] md:text-sm opacity-90 tracking-wide uppercase">Premium Beauty Services</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-3 md:space-y-4 max-h-[65vh] md:max-h-[70vh] overflow-y-auto">
                        <div>
                            <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">Full Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div>
                                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">Service</label>
                                <select
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm"
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                >
                                    <option value="">Select Service</option>
                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">District</label>
                                <select
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm"
                                    value={form.district}
                                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                                >
                                    <option value="">Select District</option>
                                    {districts.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div>
                                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="Number"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm"
                                    value={form.number}
                                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">Preferred Date</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm"
                                    value={form.date}
                                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 ml-1">Description (Optional)</label>
                            <textarea
                                placeholder="Any specific requirements?"
                                rows={2}
                                className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold outline-none transition-all font-body text-sm resize-none"
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full gradient-rose text-primary-foreground py-3.5 md:py-4 rounded-xl font-bold tracking-widest uppercase shadow-rose flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300"
                        >
                            <Send size={16} />
                            Request Booking
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingPopup;
