import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinFilled, InstagramFilled, MessageFilled, SendOutlined, CloseOutlined } from '@ant-design/icons';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsContactOpen(false);
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-[#fdf8da] dark:bg-[#111111] transition-colors duration-500 pt-16 md:pt-24 pb-12 md:pb-16 px-6 relative overflow-hidden z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row justify-around items-center md:items-start gap-12 md:gap-16">
        
        {/* Left Side - Quick Links */}
        <div className="flex flex-col items-center md:items-start z-10 text-center md:text-left mt-8">
          <h3 className="font-margarine text-[#cc3838] dark:text-[#f3c734] text-[28px] mb-8 transition-colors">QUICK LINKS</h3>
          <nav className="flex flex-col gap-6 mb-20">
            <a href="#home" className="font-margarine text-[#4c9e30] dark:text-gray-300 hover:text-[#cc3838] dark:hover:text-[#f3c734] text-[19px] transition-colors">HOME</a>
            <a href="#about" className="font-margarine text-[#4c9e30] dark:text-gray-300 hover:text-[#cc3838] dark:hover:text-[#f3c734] text-[19px] transition-colors">ABOUT ME</a>
            <a href="#experience" className="font-margarine text-[#4c9e30] dark:text-gray-300 hover:text-[#cc3838] dark:hover:text-[#f3c734] text-[19px] transition-colors">EXPERIENCE & SKILLS</a>
            <a href="#projects" className="font-margarine text-[#4c9e30] dark:text-gray-300 hover:text-[#cc3838] dark:hover:text-[#f3c734] text-[19px] transition-colors">MY PROJECTS</a>
            <a href="#contact" className="font-margarine text-[#4c9e30] dark:text-gray-300 hover:text-[#cc3838] dark:hover:text-[#f3c734] text-[19px] transition-colors">CONTACT ME</a>
          </nav>

          <div className="text-[#4c9e30] dark:text-gray-400 text-sm font-stack font-medium max-w-[250px] leading-relaxed transition-colors">
            <p>Build with Vite, React, and Tailwind CSS</p>
            <p>© 2026 Lovely Mae Callosa</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Right Side - Contact Card */}
        <div className="relative z-20 w-full max-w-[480px]">
          <div className="bg-[#eedf83] rounded-[32px] p-6 md:p-8 pb-8 md:pb-10 shadow-lg relative">
            
            <div className="flex items-center gap-5 mb-8">
              <img 
                src="/assets/my-pictures/lovely-mae-callosa-contact-profile.jpg" 
                alt="Lovely Mae Callosa" 
                className="w-28 h-28 rounded-3xl object-cover border-[3px] border-black"
              />
              <div className="flex flex-col justify-center">
                <h2 className="font-margarine text-[#cc3838] text-[22px] sm:text-[26px] leading-[1] mb-1 tracking-tight">LOVELY MAE<br/>CALLOSA</h2>
                <p className="font-stack font-bold text-[#4c9e30] text-sm tracking-wide uppercase mt-1">GRAPHIC DESIGNER AND ILLUSTRATOR</p>
              </div>
            </div>

            <button 
              onClick={() => setIsContactOpen(true)}
              className="w-full bg-[#f3b01c] hover:bg-[#e0a015] border-[2px] border-black text-[#cc3838] font-margarine text-[18px] sm:text-[22px] py-3 sm:py-3.5 rounded-[20px] flex items-center justify-center gap-3 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all mb-8"
            >
              <SendOutlined style={{ fontSize: '20px', color: '#cc3838' }} />
              CONTACT NOW
            </button>

            <div className="flex justify-start gap-8 text-[#a33333] ml-6">
              <a href="#" className="hover:text-[#4c9e30] hover:-translate-y-1 transition-all"><LinkedinFilled style={{ fontSize: '26px' }} /></a>
              <a href="#" className="hover:text-[#4c9e30] hover:-translate-y-1 transition-all"><InstagramFilled style={{ fontSize: '26px' }} /></a>
              <a href="#" className="hover:text-[#4c9e30] hover:-translate-y-1 transition-all"><MessageFilled style={{ fontSize: '26px' }} /></a>
            </div>

          </div>

          {/* Character Clipart */}
          <motion.img 
            src="/assets/cliparts/contact-me-clip-03.png" 
            alt="Character Clipart" 
            className="absolute -bottom-[80px] -right-[90px] w-72 md:w-80 drop-shadow-xl z-30 pointer-events-none"
            animate={{ y: [0, -15, 0], rotate: [0, -3, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Contact Form Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isContactOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-white/60 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative border-4 border-bam-yellow"
              >
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-bam-red transition-colors"
                >
                  <CloseOutlined style={{ fontSize: '24px' }} />
                </button>

                <h2 className="font-margarine text-bam-red text-3xl mb-6 text-center">Get in Touch</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-bam-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                    <h3 className="font-margarine text-bam-blue text-2xl mb-3">Message Sent!</h3>
                    <p className="font-mochiy text-gray-600 text-base leading-relaxed">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-mochiy text-bam-blue text-base mb-1.5">Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:border-bam-yellow focus:outline-none font-sans text-base" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block font-mochiy text-bam-blue text-base mb-1.5">Email</label>
                      <input required type="email" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:border-bam-yellow focus:outline-none font-sans text-base" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block font-mochiy text-bam-blue text-base mb-1.5">Message</label>
                      <textarea required rows={4} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:border-bam-yellow focus:outline-none font-sans resize-none text-base leading-relaxed" placeholder="What would you like to discuss?"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-bam-green hover:bg-green-600 text-white font-margarine text-xl py-3 rounded-xl mt-4 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
};

export default Footer;
