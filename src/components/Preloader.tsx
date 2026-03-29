import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 1000); // Wait for exit animation
        }, 3500); // 3.5 seconds of loading
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] bg-charcoal flex flex-center flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Video Overlay */}
                    <div className="absolute inset-0 opacity-40">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-makeup-close-up-1574-large.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-charcoal/60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <img src="/logo.png" alt="YBP" className="h-32 md:h-40 w-auto filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                        </motion.div>

                        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-rose-gold to-transparent"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="font-body text-[10px] tracking-[0.5em] uppercase text-white mt-6"
                        >
                            Experience Luxury
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
