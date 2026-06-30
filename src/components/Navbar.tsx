import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'EXPERIENCE & SKILLS', href: '#experience' },
    { name: 'MY PROJECTS', href: '#projects' },
    { name: 'CONTACT ME', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Progressive Blur Background */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none -z-10 bg-gradient-to-b from-white/20 dark:from-black/40 to-transparent backdrop-blur-2xl transition-colors duration-500"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' 
        }}
      ></div>

      {/* Logo */}
      <div className="cursor-pointer z-10" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <motion.img 
          src="/bam.png" 
          alt="BAM" 
          className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'} drop-shadow-md`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        />
      </div>

      {/* Right Side: Links & Controls */}
      <div className="flex items-center gap-4 md:gap-6 z-10">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="font-happy text-bam-blue dark:text-[#f9f5dd] hover:text-bam-red dark:hover:text-bam-yellow transition-all duration-200 text-lg tracking-wide hover:font-bold hover:scale-105 drop-shadow-sm hover:drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-bam-blue dark:text-bam-yellow p-1">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 ml-2 rounded-full bg-white/50 dark:bg-black/50 text-bam-blue dark:text-bam-yellow shadow-sm hover:scale-110 active:scale-95 transition-all"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <Moon size={22} fill="currentColor" /> : <Sun size={22} fill="currentColor" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col items-center py-6 gap-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="font-happy text-bam-green text-xl w-full text-center hover:text-bam-red"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
