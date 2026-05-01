import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact, { Footer } from './components/Contact';

function App() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // For the line-drawing animation in Experience, we don't unobserve it here
          // but for reveal animations, it's safe to keep it applied
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal-base, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen text-[#a1a1aa] font-sans selection:bg-[#f59e0b] selection:text-[#080808] relative">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
