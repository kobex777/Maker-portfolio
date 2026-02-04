import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.section
            ref={ref}
            style={{ y, opacity }}
            className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6"
        >

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-800/20 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 text-center flex flex-col items-center max-w-4xl mix-blend-screen">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-sans text-day/60 tracking-[0.2em] text-sm md:text-base mb-6 uppercase"
                >
                    The Portfolio of
                </motion.p>

                <motion.h1
                    className="text-6xl md:text-9xl font-serif text-day mb-8 leading-tight"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Bryan Munguia
                </motion.h1>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="w-[1px] bg-day/30 mb-6"
                />

                <motion.p
                    className="text-xl md:text-2xl font-serif italic text-day/80 max-w-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Engineering dreams into Reality
                </motion.p>
            </div>

            <motion.div
                className="absolute bottom-12 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-day/50">Scroll to Explore</span>
                <motion.div
                    className="w-[1px] h-12 bg-day/20 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-day"
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </motion.div>

        </motion.section>
    );
};


