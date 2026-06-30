import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="font-margarine text-bam-red text-2xl tracking-wider font-bold cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        BAM
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="font-happy text-bam-green hover:text-bam-red transition-colors text-lg tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-bam-blue">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
