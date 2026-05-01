import { useEffect, useState } from 'react';
import MyImage from '../assets/My_Image.jpg';
import { ArrowRight, Download } from 'lucide-react';
import MagneticEffect from './MagneticEffect';

const Hero = () => {
  const [projects, setProjects] = useState(0);
  const [exp, setExp] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => setProjects(p => p < 20 ? p + 1 : 20), 50);
    const timer2 = setInterval(() => setExp(e => e < 5 ? e + 1 : 5), 500); 
    const timer3 = setInterval(() => setClients(c => c < 15 ? c + 1 : 15), 100); 
    
    return () => { clearInterval(timer1); clearInterval(timer2); clearInterval(timer3); };
  }, []);

  return (
    <section id="home" className="relative lg:sticky lg:top-0 min-h-screen z-10 flex items-center justify-center overflow-hidden bg-[#080808] pt-32 pb-20 lg:py-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-[#f59e0b] rounded-full opacity-15"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float-avatar ${Math.random() * 4 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            
            <div className="reveal-base animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse-glow" />
              <span className="text-[#f59e0b] text-sm font-medium tracking-wide">Available for Collaboration</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6">
              <span className="block animate-cinematic" style={{ animationDelay: '0.1s' }}>Crafting</span>
              <span className="block animate-cinematic text-[#f59e0b] text-glow" style={{ animationDelay: '0.4s' }}>Premium Digital</span>
              <span className="block animate-cinematic" style={{ animationDelay: '0.7s' }}>Experiences.</span>
            </h1>
            
            <p className="text-xl text-[#a1a1aa] max-w-xl leading-relaxed text-balance reveal-base animate-fade-up" style={{ animationDelay: '0.4s' }}>
              I'm Lokaditya Mishra, a Senior Full Stack Developer with <span className="text-white font-bold">5+ years of experience</span>. I specialize in building world-class web applications, high-performance mobile apps, and scalable cloud architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-cinematic mb-16 mt-10" style={{ animationDelay: '0.9s' }}>
              <MagneticEffect>
                <a 
                  href="#projects" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f59e0b] text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticEffect>
              
              <MagneticEffect>
                <a 
                  href="/resume.pdf" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] border border-[#1f1f1f] text-white rounded-full font-bold text-lg hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all duration-300 hover:scale-105"
                >
                  <Download className="group-hover:-translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </MagneticEffect>
            </div>

            <div className="flex flex-wrap gap-8 reveal-base animate-fade-up border-t border-[#1f1f1f] pt-8 w-full" style={{ animationDelay: '0.8s' }}>
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-1">{projects}+</h4>
                <p className="text-sm text-[#a1a1aa]">Shipped Projects</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-1">{exp}+</h4>
                <p className="text-sm text-[#a1a1aa]">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-1">{clients}+</h4>
                <p className="text-sm text-[#a1a1aa]">Live Clients</p>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0 reveal-base animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              
              <div className="absolute inset-0 border border-[#f59e0b] rounded-full opacity-0" style={{ animation: 'radar-ring 4s infinite ease-out' }}></div>
              <div className="absolute inset-0 border border-[#f59e0b] rounded-full opacity-0" style={{ animation: 'radar-ring 4s infinite ease-out 1.3s' }}></div>
              <div className="absolute inset-0 border border-[#f59e0b] rounded-full opacity-0" style={{ animation: 'radar-ring 4s infinite ease-out 2.6s' }}></div>
              
              <div className="relative z-10 w-full h-full animate-float-avatar rounded-full overflow-hidden border-4 border-[#1f1f1f] shadow-[0_0_50px_rgba(245,158,11,0.2)] bg-[#111111]">
                <img 
                  src={MyImage} 
                  alt="Lokaditya Mishra" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Sticky Fade out layer */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#080808] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
