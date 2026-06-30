import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/backgrounds/Skills-background-03.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-stretch justify-center gap-12 pt-10">
        
        {/* Left Folder - Education & Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          {/* Folder Tab */}
          <div className="w-1/3 h-12 bg-bam-yellow rounded-t-2xl absolute -top-10 left-0 z-0 border-b-0"></div>
          
          {/* Folder Body */}
          <div className="bg-bam-yellow rounded-2xl rounded-tl-none p-8 md:p-12 shadow-xl h-full z-10 relative text-left">
            <div className="flex flex-col items-center mb-8">
              <img src="/assets/cliparts/experience-clip-01.png" alt="Education" className="w-24 h-24 object-contain mb-2" />
              <h2 className="font-margarine text-bam-green text-3xl tracking-widest uppercase">Education</h2>
            </div>
            
            <div className="mb-10">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2 border-b border-bam-green/30 pb-2">
                <h3 className="font-bold text-xl text-bam-blue">Leyte Normal University</h3>
                <span className="font-bold text-lg text-bam-blue">2022-2026</span>
              </div>
              <p className="text-gray-700">Bachelor of Science in Information Technology</p>
            </div>

            <div className="flex flex-col items-center mb-8 mt-12">
              <img src="/assets/cliparts/experience-clip-02.png" alt="Experience" className="w-24 h-24 object-contain mb-2" />
              <h2 className="font-margarine text-bam-green text-3xl tracking-widest uppercase">Experience</h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl text-bam-blue">Internship - PAMCO</h3>
                  <span className="font-bold text-md text-bam-blue">FEB - MAY 2026</span>
                </div>
                <p className="text-gray-700 text-sm">LNU Public Affairs and Marketing Communication Office</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl text-bam-blue">An Lantawan</h3>
                  <span className="font-bold text-md text-bam-blue">2023-2025</span>
                </div>
                <p className="text-gray-700 text-sm">Became part of An Lantawan as a Creatives Staff (Illustrator).</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl text-bam-blue">DIGITS Creative Committe</h3>
                  <span className="font-bold text-md text-bam-blue">2024-2025</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                  <li>Continued as Illustrator in An Lantawan Student Publication.</li>
                  <li>Became part of the Digits Publishing and Creatives Committee serving as:
                    <ul className="list-[circle] pl-5 mt-1 space-y-1">
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
          className="flex-1 relative"
        >
          {/* Folder Tab */}
          <div className="w-1/3 h-12 bg-bam-yellow rounded-t-2xl absolute -top-10 left-0 z-0"></div>
          
          {/* Folder Body */}
          <div className="bg-bam-yellow rounded-2xl rounded-tl-none p-8 md:p-12 shadow-xl h-full z-10 relative text-center">
            
            <h2 className="font-margarine text-bam-green text-3xl tracking-widest uppercase mb-10 mt-8">Skills</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['digital arts', 'layout designs', 'photography', 'ui/ux designs', 'prototyping'].map((skill) => (
                <span key={skill} className="bg-blue-400 text-white font-mochiy text-lg px-6 py-2 rounded-full shadow-sm hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="font-margarine text-bam-green text-3xl tracking-widest uppercase mb-10 mt-12">Software</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
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
                    className="w-16 h-16 object-contain drop-shadow-md hover:scale-110 transition-transform bg-black rounded-xl"
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
