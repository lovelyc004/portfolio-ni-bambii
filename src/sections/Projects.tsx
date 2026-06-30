import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Folder from '../components/Folder';

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Create arrays for images dynamically based on the provided tree
  const illustrations = Array.from({ length: 19 }, (_, i) => 
    `/assets/creative-projects/Illustrations/illustartion-${(i + 1).toString().padStart(2, '0')}.${[3,13,14,15,17,18,19].includes(i+1) ? 'jpg' : 'png'}`
  );

  const socmed = Array.from({ length: 5 }, (_, i) => 
    `/assets/creative-projects/Social Media Publication/socmed-pubmats-0${i + 1}.${[1,2].includes(i+1) ? 'jpg' : 'png'}`
  );

  const layouts = Array.from({ length: 13 }, (_, i) => 
    `/assets/creative-projects/Layouts/layout-${(i + 1).toString().padStart(2, '0')}.${[1,2,6,7,8].includes(i+1) ? 'jpg' : 'png'}`
  );

  const logos = [
    '/assets/creative-projects/Logo/logo-01.jpg',
    '/assets/creative-projects/Logo/logo-02.png'
  ];

  const photography = Array.from({ length: 21 }, (_, i) => 
    `/assets/creative-projects/Photography/photography-${(i + 1).toString().padStart(2, '0')}.jpg`
  );


  const projects = [
    { title: 'ILLUSTRA\nTIONS', images: illustrations, description: 'A collection of digital illustrations and artworks created using various software.' },
    { title: 'SOCMED\nPUBMATS', images: socmed, description: 'Social media publication materials designed for engagement and clear communication.' },
    { title: 'INFO\nGRAPHIC', images: layouts.slice(0, 4), description: 'Informative graphics designed to simplify complex data.' },
    { title: 'MOBILE APP\nUI', images: layouts.slice(4, 8), description: 'User interface designs for mobile applications focusing on user experience.' },
    { title: 'LOGOS', images: logos, description: 'Brand identities and logo designs crafted for various organizations and events.' },
    { title: 'PHOTO\nGRAPY', images: photography, description: 'A selection of photographic works capturing moments, events, and subjects.' },
    { title: 'BOOK\nCOVERS', images: layouts.slice(8, 13), description: 'Creative book cover designs showcasing typography and visual storytelling.' },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="min-h-screen py-24 flex flex-col items-center justify-start relative overflow-hidden bg-[#78b3eb]"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/assets/backgrounds/my-projects-background-03.png')",
          y: backgroundY,
          scale: 1.2
        }}
      />

      <div className="absolute top-10 w-full flex justify-center z-10">
        <motion.img 
          src="/assets/cliparts/my-projects-header-clip-04.png" 
          alt="My Projects" 
          className="h-40 md:h-48 object-contain" 
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Fallback text if the header clip is missing or doesn't include text */}
        <h1 className="sr-only">My Projects</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full pt-40 md:pt-48 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 justify-items-center">
          {projects.map((project, index) => (
            <Folder 
              key={index}
              title={project.title}
              images={project.images}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
