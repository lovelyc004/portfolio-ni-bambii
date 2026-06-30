import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Taskbar from './components/Taskbar';

import Lenis from 'lenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth, slower scrolling
    const lenis = new Lenis({
      duration: 2.0,           // Makes the scroll animation take longer (default 1.2)
      wheelMultiplier: 0.5,    // Requires twice as much physical mouse wheel movement
      touchMultiplier: 1.0,    // Makes touch dragging feel heavier (default 2)
      lerp: 0.05               // Slower interpolation for a 'heavier' feel
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#f9f5dd] flex flex-col items-center justify-center"
          >
            <motion.img 
              src="/bam.png" 
              alt="Loading..."
              className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-xl"
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#f9f5dd] min-h-screen font-stack text-gray-800 selection:bg-bam-yellow selection:text-bam-red">
        <Navbar />
        
        {/* Wrapper to contain the sticky taskbar */}
        <div className="grid">
          <main className="col-start-1 row-start-1">
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
          <div className="col-start-1 row-start-1 flex flex-col justify-end pointer-events-none pb-12">
            <Taskbar />
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
