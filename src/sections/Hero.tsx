import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-end pb-10 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/backgrounds/home-background-01.png')" }}
    >
      {/* If the background doesn't include the Portfolio 2026 text, we would add it here. 
          Assuming it does include the art based on the prompt's provided assets, we just add the dock. */}
          
      {/* Interactive Dock */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex gap-4 shadow-xl z-10"
      >
        <DockIcon icon="🏠" label="Home" href="#home" />
        <DockIcon icon="👤" label="About" href="#about" />
        <DockIcon icon="📁" label="Projects" href="#projects" />
        <DockIcon icon="✉️" label="Contact" href="#contact" />
      </motion.div>
    </section>
  );
};

const DockIcon = ({ icon, label, href }: { icon: string; label: string; href: string }) => {
  return (
    <a 
      href={href}
      className="relative group flex flex-col items-center justify-center w-14 h-14 bg-white/50 hover:bg-white rounded-xl transition-all duration-300 hover:scale-125 origin-bottom"
    >
      <span className="text-2xl">{icon}</span>
      <span className="absolute -top-10 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
};

export default Hero;
