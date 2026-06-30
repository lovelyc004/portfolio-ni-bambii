import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const ref = useRef(null);
  const { isDarkMode } = useTheme();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden bg-[#e0dcc5] dark:bg-[#252525] z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] transition-colors duration-500"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('${isDarkMode ? '/assets/backgrounds/dark/aboutme_background-02-dark-mode.png' : '/assets/backgrounds/aboutme_background-02.png'}')`,
          y: backgroundY,
          scale: 1.2
        }}
      />
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10">
        
        {/* Left Side - Polaroid Image */}
        <motion.div 
          initial={{ rotate: -10, opacity: 0, x: -50 }}
          whileInView={{ rotate: -5, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-full max-w-[22rem] md:max-w-none md:w-[36rem] transform -rotate-6 hover:rotate-0 transition-all duration-500"
        >
          <img 
            src="/assets/my-pictures/lovely-mae-callosa-polaroid.png" 
            alt="Lovely Mae Callosa" 
            className="w-full h-auto object-cover drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-center md:text-left pt-8"
        >
          <h2 className="font-happy font-bold text-[#1f4a9b] dark:text-[#f3c734] transition-colors duration-500 text-4xl mb-4 -ml-1">Hello, i'm</h2>
          <h1 className="font-margarine text-[#cc3838] dark:text-white transition-colors duration-500 text-5xl md:text-7xl mb-4 leading-[0.9] tracking-tight -ml-1">Lovely Mae Callosa</h1>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <div className="flex flex-col text-[#1f4a9b] dark:text-[#f3c734] transition-colors duration-500 font-happy font-bold text-3xl leading-[1.1] text-left">
              <span>but you can</span>
              <span>call me</span>
            </div>
            <motion.span 
              className="font-happy font-bold text-[#4c9e30] dark:text-[#8be366] transition-colors duration-500 text-5xl md:text-7xl tracking-tighter leading-[0.7]"
              style={{ WebkitTextStroke: isDarkMode ? '3px #8be366' : '3px #4c9e30' }}
              initial={{ scale: 0, y: 50, rotate: -20 }}
              whileInView={{ scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.5, duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              BAM
            </motion.span>
          </div>
          
          <p className="font-happy text-[#1f4a9b] dark:text-gray-300 transition-colors duration-500 text-[17px] md:text-[19px] leading-loose text-justify font-medium px-2 md:px-0 mb-8">
            I am a creative and detail-oriented Information Technology student with experience in graphic design, illustration, layout design, photography, and visual branding. I have contributed to academic and non-academic organizations by creating engaging visual content for publications, events, and promotional campaigns. My goal is to combine creativity and technology to produce impactful designs that effectively communicate messages and enhance user experiences.
          </p>

          <div className="flex justify-center md:justify-start px-2 md:px-0">
            <a 
              href="https://drive.google.com/file/d/1p_MukGZDQWt8rUDpFiYnMO-wvXLbOylk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-[#f3b01c] hover:bg-[#e0a015] border-[2px] border-black text-[#cc3838] font-margarine text-xl md:text-2xl px-8 py-3 rounded-[20px] items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all"
            >
              View my resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
