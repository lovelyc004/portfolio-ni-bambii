import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FolderProps {
  title: string;
  images: string[];
  description?: string;
}

const Folder = ({ title, images, description }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Folder UI */}
      <motion.div 
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
          <span className="absolute font-mochiy text-bam-blue text-sm">View Project</span>
        </div>

        {/* Front of folder */}
        <div className="absolute inset-0 bg-[#f3c734] rounded-xl rounded-tl-none shadow-lg z-20 flex items-center justify-center p-4 text-center transform group-hover:rotate-2 transition-transform duration-300">
          <h3 className="font-stack font-extrabold text-[#4c9e30] text-2xl uppercase tracking-tight drop-shadow-sm leading-tight whitespace-pre-wrap">{title}</h3>
        </div>
        {/* Tab front */}
        <div className="absolute -top-6 left-0 w-1/3 h-8 bg-[#f3c734] rounded-t-xl z-20"></div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#f9f5dd] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border-4 border-bam-yellow"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b-2 border-bam-yellow/30 flex justify-between items-center bg-white/50 backdrop-blur-md">
                <h2 className="font-margarine text-bam-green text-2xl">{title}</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-bam-red text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                {description && <p className="font-mochiy text-gray-700 mb-6">{description}</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((img, i) => (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="rounded-xl overflow-hidden shadow-md group relative aspect-square bg-white"
                    >
                      <img src={img} alt={`${title} image ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                  ))}
                  {images.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500 font-mochiy">
                      No images provided for this project.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Folder;
