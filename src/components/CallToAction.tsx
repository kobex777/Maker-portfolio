import { motion } from 'framer-motion';

export const CallToAction = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full min-h-screen flex items-center justify-center px-6 relative z-10 bg-day text-night overflow-hidden"
        >
            <div className="max-w-4xl mx-auto text-center relative">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-serif opacity-10 select-none pointer-events-none"
                >
                    "
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-8">
                        "I taught myself everything on this page with just a computer and curiosity. Imagine what I could do with your faculty and resources. I’m ready to build the future together with you in the Class of 2030"
                    </p>

                    <div className="w-16 h-[1px] bg-night/20 mx-auto mb-6" />

                    <p className="font-mono text-sm tracking-widest uppercase opacity-60">
                        — Bryan Munguia
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};
