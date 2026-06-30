import { motion } from 'framer-motion';

const Taskbar = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      className="sticky bottom-6 z-[60] flex justify-center w-full pointer-events-none px-4"
    >
      <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-3 flex gap-4 shadow-2xl pointer-events-auto">
        <DockIcon icon="🏠" label="Home" href="#home" />
        <DockIcon icon="👤" label="About" href="#about" />
        <DockIcon icon="📁" label="Projects" href="#projects" />
        <DockIcon icon="✉️" label="Contact" href="#contact" />
      </div>
    </motion.div>
  );
};

const DockIcon = ({ icon, label, href }: { icon: string; label: string; href: string }) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="relative group flex flex-col items-center justify-center w-14 h-14 bg-white/60 hover:bg-white rounded-xl transition-all duration-300 hover:scale-125 origin-bottom shadow-sm hover:shadow-md"
    >
      <span className="text-2xl">{icon}</span>
      <span className="absolute -top-10 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
};

export default Taskbar;
