import { motion } from 'framer-motion';

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/backgrounds/aboutme_background-02.png')" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* Left Side - Polaroid Image */}
        <motion.div 
          initial={{ rotate: -10, opacity: 0, x: -50 }}
          whileInView={{ rotate: -5, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative bg-white p-4 pb-16 shadow-2xl w-72 md:w-96 transform -rotate-6 hover:rotate-0 transition-all duration-500"
        >
          {/* Paperclip placeholder (could use an absolute positioned image if we had a specific paperclip asset) */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-24 border-4 border-gray-400 rounded-full border-b-0 opacity-50 z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }}></div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-16 border-4 border-gray-300 rounded-full z-20" style={{ clipPath: 'polygon(0 30%, 100% 30%, 100% 100%, 0 100%)' }}></div>
          
          <img 
            src="/assets/my-pictures/lovely-mae-callosa-polaroid.png" 
            alt="Lovely Mae Callosa" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Side - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="font-margarine text-bam-blue text-4xl mb-2">Hello, I'm</h2>
          <h1 className="font-margarine text-bam-red text-5xl md:text-7xl mb-2">Lovely Mae Callosa</h1>
          <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-4 mb-6">
            <span className="font-margarine text-bam-blue text-3xl">but you can call me</span>
            <span className="font-happy text-bam-green text-7xl md:text-9xl tracking-tight leading-none">BAM</span>
          </div>
          
          <p className="font-mochiy text-bam-blue text-lg leading-relaxed text-justify">
            I am a creative and detail-oriented Information Technology student with experience in graphic design, illustration, layout design, photography, and visual branding. I have contributed to academic and non-academic organizations by creating engaging visual content for publications, events, and promotional campaigns. My goal is to combine creativity and technology to produce impactful designs that effectively communicate messages and enhance user experiences.
          </p>
          
          <div className="mt-10">
            <a href="/assets/resume.pdf" download className="inline-block bg-bam-yellow hover:bg-yellow-500 text-bam-blue font-bold font-margarine text-xl px-8 py-3 rounded-full shadow-[4px_4px_0px_rgba(50,96,168,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(50,96,168,1)] transition-all">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
