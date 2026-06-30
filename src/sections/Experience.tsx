import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const ref = useRef(null);
  const { isDarkMode } = useTheme();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section 
      id="experience" 
      ref={ref}
      className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden bg-[#578cd5] dark:bg-[#1e3450] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] transition-colors duration-500"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('${isDarkMode ? '/assets/backgrounds/dark/Skills-background-dark-mode.jpg' : '/assets/backgrounds/Skills-background-03.png'}')`,
          y: backgroundY,
          scale: 1.2
        }}
      />
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 pt-10 pb-20 relative z-10">
        
        {/* Left Folder - Education & Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          {/* Folder Tab */}
          <div className="w-1/3 h-12 bg-[#eedf83] rounded-t-3xl absolute -top-10 left-0 z-0"></div>
          
          {/* Folder Body */}
          <div className="bg-[#eedf83] rounded-3xl rounded-tl-none p-6 sm:p-8 md:p-10 shadow-xl z-10 relative text-left font-stack text-gray-900">
            <div className="flex flex-col items-center mb-6 mt-2">
              <motion.img 
                src="/assets/cliparts/experience-clip-01.png" 
                alt="Education" 
                className="w-24 h-24 object-contain mb-1" 
                animate={{ y: [0, -8, 0], rotate: [0, 4, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="font-margarine text-[#4c9e30] text-3xl tracking-wide uppercase">Education</h2>
            </div>
            
            <div className="mb-8 px-2 md:px-6">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                <h3 className="font-bold text-xl">Leyte Normal University</h3>
                <span className="font-bold text-base">2022-2026</span>
              </div>
              <p className="text-base font-medium text-gray-700 leading-relaxed">Bachelor of Science in Information Technology</p>
            </div>

            <div className="flex flex-col items-center mb-6 mt-10">
              <motion.img 
                src="/assets/cliparts/experience-clip-02.png" 
                alt="Experience" 
                className="w-24 h-24 object-contain mb-1" 
                animate={{ y: [0, -8, 0], rotate: [0, -4, 2, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="font-margarine text-[#4c9e30] text-3xl tracking-wide uppercase">Experience</h2>
            </div>

            <div className="space-y-8 px-2 md:px-6 pb-4">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="font-bold text-xl">Internship - PAMCO</h3>
                  <span className="font-bold text-base">FEB - MAY 2026</span>
                </div>
                <p className="text-base font-medium text-gray-700 leading-relaxed">LNU Public Affairs and Marketing Communication Office</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="font-bold text-xl">An Lantawan</h3>
                  <span className="font-bold text-base">2023-2025</span>
                </div>
                <p className="text-base font-medium text-gray-700 leading-relaxed">Became part of An Lantawan as a Creatives Staff (Illustrator).</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="font-bold text-xl">DIGITS Creative Committe</h3>
                  <span className="font-bold text-base">2024-2025</span>
                </div>
                <ul className="list-disc pl-5 text-base font-medium text-gray-700 space-y-2 leading-relaxed">
                  <li>Continued as Illustrator in An Lantawan Student Publication.</li>
                  <li>Became part of the Digits Publishing and Creatives Committee serving as:
                    <ul className="list-[circle] pl-5 mt-2 space-y-1">
                      <li>Layout Artist</li>
                      <li>Photojournalist</li>
                      <li>Illustrator</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Folder - Skills & Software */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full relative mt-16 lg:mt-32"
        >
          {/* Folder Tab */}
          <div className="w-1/3 h-12 bg-[#eedf83] rounded-t-3xl absolute -top-10 left-0 z-0"></div>
          
          {/* Folder Body */}
          <div className="bg-[#eedf83] rounded-3xl rounded-tl-none p-6 sm:p-8 md:p-12 shadow-xl z-10 relative text-center">
            
            <h2 className="font-margarine text-[#4c9e30] text-3xl tracking-wide uppercase mb-6 mt-4">Skills</h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['digital arts', 'layout designs', 'photography', 'ui/ux designs', 'prototyping'].map((skill) => (
                <span key={skill} className="bg-[#87b2e8] text-white font-serif italic text-lg px-6 py-1 rounded-full shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="font-margarine text-[#4c9e30] text-3xl tracking-wide uppercase mb-8 mt-10">Software</h2>
            
            <div className="flex flex-wrap justify-center gap-5 px-4 pb-6">
              {[
                { name: 'Lightroom', src: 'Lightroom.png' },
                { name: 'Affinity', src: 'Affinity.png' },
                { name: 'CapCut', src: 'CapCut.png' },
                { name: 'Figma', src: 'Figma.png' },
                { name: 'IbisPaint', src: 'IbisPaint.png' },
                { name: 'Canva', src: 'Canva.png' },
                { name: 'Krita', src: 'Krita.png' },
              ].map((software) => (
                <div key={software.name} className="group relative">
                  <img 
                    src={`/assets/software-logos/${software.src}`} 
                    alt={software.name} 
                    className="w-[3.2rem] h-[3.2rem] object-contain drop-shadow hover:scale-110 transition-transform rounded-xl"
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {software.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Experience;
