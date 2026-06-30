import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FolderProps {
  title: string;
  images: string[];
  description?: string;
}

const Folder = ({ title, images, description }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Scroll logic for the carousel
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Folder UI */}
      <motion.div 
        key="folder-icon"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative w-64 h-48 cursor-pointer mx-auto group"
      >
        {/* Back of folder */}
        <div className="absolute inset-0 bg-[#e0b020] rounded-xl rounded-tl-none shadow-md transform group-hover:-rotate-2 transition-transform duration-300"></div>
        {/* Tab back */}
        <div className="absolute -top-6 left-0 w-1/3 h-8 bg-[#e0b020] rounded-t-xl"></div>
        
        {/* Paper peeking out on hover */}
        <div className="absolute inset-2 bg-white rounded shadow-sm transform translate-y-2 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center overflow-hidden">
          {images.length > 0 && <img src={images[0]} alt="preview" className="w-full h-full object-cover opacity-50 blur-[2px]" />}
          <span className="absolute font-mochiy text-bam-blue text-sm px-2 py-1 bg-white/80 rounded">View Project</span>
        </div>

        {/* Front of folder */}
        <div className="absolute inset-0 bg-[#f3c734] rounded-xl rounded-tl-none shadow-lg z-20 flex items-center justify-center p-4 text-center transform group-hover:rotate-2 transition-transform duration-300">
          <h3 className="font-stack font-extrabold text-[#4c9e30] text-2xl uppercase tracking-tight drop-shadow-sm leading-tight whitespace-pre-wrap">{title}</h3>
        </div>
        {/* Tab front */}
        <div className="absolute -top-6 left-0 w-1/3 h-8 bg-[#f3c734] rounded-t-xl z-20"></div>
      </motion.div>

      {/* Modal Popup */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-white/60 backdrop-blur-md overscroll-none"
              onClick={() => setIsOpen(false)}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[90vw] md:max-w-7xl h-[60vh] md:h-[50vh] bg-[#f9f5dd] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f3c734] flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6 border-b-2 border-[#f3c734]/30 bg-white/50 shrink-0 backdrop-blur-sm">
                  <div>
                    <h2 className="font-margarine text-[#4c9e30] text-2xl md:text-3xl mb-1">{title.replace('\n', ' ')}</h2>
                    {description && <p className="font-mochiy text-[#cc3838] text-xs md:text-sm max-w-2xl leading-relaxed">{description}</p>}
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-3 bg-white text-[#cc3838] rounded-full shadow-sm border border-[#f3c734]/30 hover:bg-[#cc3838] hover:text-white transition-all ml-4 shrink-0 hover:scale-105 active:scale-95"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Carousel Content */}
                <div className="relative w-full flex-1 flex flex-col justify-center group/carousel bg-transparent overflow-hidden">
                  {/* Scroll Controls */}
                  {images.length > 0 && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); scrollLeft(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 text-[#4c9e30] rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-[#f3c734] hover:text-[#cc3838] shadow-lg hidden md:block border-2 border-[#f3c734]/50 hover:scale-105 active:scale-95"
                      >
                        <ChevronLeft size={32} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); scrollRight(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 text-[#4c9e30] rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-[#f3c734] hover:text-[#cc3838] shadow-lg hidden md:block border-2 border-[#f3c734]/50 hover:scale-105 active:scale-95"
                      >
                        <ChevronRight size={32} />
                      </button>
                    </>
                  )}

                  {/* Scrollable Container */}
                  <div 
                    ref={containerRef}
                    className="flex overflow-x-auto gap-8 px-6 py-6 h-full items-center snap-x snap-mandatory [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-[#f3c734]/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:mx-6 [&::-webkit-scrollbar-thumb]:bg-[#f3c734] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#e0b020]"
                    data-lenis-prevent="true"
                  >
                    {images.map((img, i) => (
                      <div 
                        key={i} 
                        className="shrink-0 snap-center rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white flex items-center justify-center h-full max-h-[95%] p-2"
                      >
                        <img 
                          src={img} 
                          alt={`${title.replace('\n', ' ')} image ${i + 1}`} 
                          className="h-full w-auto max-w-[85vw] object-contain rounded-lg" 
                        />
                      </div>
                    ))}
                    
                    {images.length === 0 && (
                      <div className="w-full text-center text-[#4c9e30] font-mochiy text-lg">
                        No images provided for this project.
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Folder;
