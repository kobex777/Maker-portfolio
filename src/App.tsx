import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { GalaxyBackground } from './components/GalaxyBackground';

import { Certifications } from './components/Certifications';
import { CallToAction } from './components/CallToAction';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen font-sans" ref={containerRef}>

      <GalaxyBackground />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-0"
      >
        <Hero />
      </motion.div>

      <div className="h-screen w-full relative z-0 pointer-events-none" />

      <div className="relative z-10 w-full">
        <ProjectGallery />
        <Certifications />
        <CallToAction />
      </div>

    </div>
  )
}

export default App
