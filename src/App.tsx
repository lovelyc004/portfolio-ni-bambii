import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-[#f9f5dd] min-h-screen font-stack text-gray-800 selection:bg-bam-yellow selection:text-bam-red">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
