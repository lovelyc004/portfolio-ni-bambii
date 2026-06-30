import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const ref = useRef(null);
  const { isDarkMode } = useTheme();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-bam-blue dark:bg-[#121212]"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${isDarkMode ? '/assets/backgrounds/dark/hero-section-background-only-dark-mode.jpg' : '/assets/backgrounds/hero-section-background-only.png'}')`,
          y: backgroundY,
          scale: 1.1 
        }}
      />
      
      <motion.div style={{ y: textY }} className="z-10 w-full flex justify-center px-4 md:px-0">
        <motion.img 
          src={isDarkMode ? '/assets/backgrounds/dark/hero-section-portfolio2026-text-only-dark-mode.png' : '/assets/backgrounds/hero-section-portfolio2026-text-only.png'}
          alt="Portfolio 2026"
          className="w-[140%] max-w-[140%] md:w-full md:max-w-full h-auto object-contain"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [10, -5, 10],
          }}
          transition={{ 
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: { duration: 1.2, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
