import { useState } from 'react';
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
    <footer id="contact" className="bg-[#f9f5dd] pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left Side - Quick Links */}
        <div className="flex flex-col items-center md:items-start z-10 text-center md:text-left">
          <h3 className="font-margarine text-bam-red text-2xl mb-6">QUICK LINKS</h3>
          <nav className="flex flex-col gap-4 mb-16">
            <a href="#home" className="font-margarine text-bam-green hover:text-bam-red text-lg transition-colors">HOME</a>
            <a href="#about" className="font-margarine text-bam-green hover:text-bam-red text-lg transition-colors">ABOUT ME</a>
            <a href="#experience" className="font-margarine text-bam-green hover:text-bam-red text-lg transition-colors">EXPERIENCE & SKILLS</a>
            <a href="#projects" className="font-margarine text-bam-green hover:text-bam-red text-lg transition-colors">MY PROJECTS</a>
            <a href="#contact" className="font-margarine text-bam-green hover:text-bam-red text-lg transition-colors">CONTACT ME</a>
          </nav>

          <div className="text-bam-green text-sm mt-auto font-mochiy max-w-[250px]">
            <p>Build with Vite, React, and Tailwind CSS</p>
            <p className="mt-1">© 2026 Lovely Mae Callosa</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Right Side - Contact Card */}
        <div className="relative z-20 w-full max-w-md">
          <div className="bg-[#f0df8e] rounded-3xl p-8 pb-16 shadow-lg border border-yellow-200">
            
            <div className="flex items-center gap-6 mb-8">
              <img 
                src="/assets/my-pictures/lovely-mae-callosa-contact-profile.jpg" 
                alt="Lovely Mae Callosa" 
                className="w-24 h-24 rounded-2xl object-cover border-4 border-black"
              />
              <div>
                <h2 className="font-margarine text-bam-red text-2xl leading-tight mb-1">LOVELY MAE<br/>CALLOSA</h2>
                <p className="font-mochiy text-bam-green text-[10px] tracking-wider uppercase">GRAPHIC DESIGNER AND ILLUSTRATOR</p>
              </div>
            </div>

            <button 
              onClick={() => setIsContactOpen(true)}
              className="w-full bg-[#f2cc3a] hover:bg-yellow-500 border-2 border-black text-bam-red font-margarine text-xl py-3 rounded-full flex items-center justify-center gap-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all mb-8"
            >
              <SendOutlined style={{ fontSize: '20px' }} />
              CONTACT NOW
            </button>

            <div className="flex justify-start gap-6 text-bam-red ml-4">
              <a href="#" className="hover:text-bam-green hover:-translate-y-1 transition-all"><LinkedinFilled style={{ fontSize: '28px' }} /></a>
              <a href="#" className="hover:text-bam-green hover:-translate-y-1 transition-all"><InstagramFilled style={{ fontSize: '28px' }} /></a>
              <a href="#" className="hover:text-bam-green hover:-translate-y-1 transition-all"><MessageFilled style={{ fontSize: '28px' }} /></a>
            </div>

          </div>

          {/* Character Clipart */}
          <img 
            src="/assets/cliparts/contact-me-clip-03.png" 
            alt="Character Clipart" 
            className="absolute -bottom-16 -right-16 w-56 drop-shadow-xl z-30"
          />
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
                  <h3 className="font-margarine text-bam-blue text-2xl mb-2">Message Sent!</h3>
                  <p className="font-mochiy text-gray-600 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mochiy text-bam-blue text-sm mb-1">Name</label>
                    <input required type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-bam-yellow focus:outline-none font-sans" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block font-mochiy text-bam-blue text-sm mb-1">Email</label>
                    <input required type="email" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-bam-yellow focus:outline-none font-sans" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block font-mochiy text-bam-blue text-sm mb-1">Message</label>
                    <textarea required rows={4} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-bam-yellow focus:outline-none font-sans resize-none" placeholder="What would you like to discuss?"></textarea>
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
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
