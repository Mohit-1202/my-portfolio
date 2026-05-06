import { Code, Server, Smartphone, Globe } from 'lucide-react';
import AboutImg from '../assets/About_img.jpg';

const About = () => {
  return (
    <section id="about" className="relative lg:sticky lg:top-0 z-20 min-h-screen flex items-center bg-[#080808] py-32 border-t border-[#1f1f1f] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-left text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              My <span className="text-[#f59e0b]">Story</span>
            </h2>
            <div className="w-24 h-1 bg-[#f59e0b] rounded-full mb-8 mx-auto lg:mx-0"></div>
            
            <div className="space-y-6 text-lg text-[#a1a1aa] leading-relaxed">
              <p>
                I'm a passionate Senior Full Stack Developer who loves bridging the gap between elegant design and robust engineering. For over 5 years, I've been helping startups and enterprises turn complex problems into scalable digital solutions.
              </p>
              <p>
                Whether I'm architecting a reliable backend in Node.js, crafting a buttery-smooth React application, or fine-tuning database queries, my core philosophy remains the same: <span className="text-white font-medium">Build things that users love and developers respect.</span>
              </p>
              <p>
                I thrive in agile environments where I can take full ownership of the product lifecycle—from the initial whiteboard sketches all the way to deployment and beyond.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-5 rounded-xl border border-[#1f1f1f] hover:border-[#f59e0b]/50 transition-colors flex flex-col items-center lg:items-start">
                <Globe className="text-[#f59e0b] mb-3" size={28} />
                <h4 className="text-white font-bold mb-1">Frontend Engineering</h4>
                <p className="text-sm text-[#a1a1aa]">React, Vue, Tailwind CSS</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-[#1f1f1f] hover:border-[#f59e0b]/50 transition-colors flex flex-col items-center lg:items-start">
                <Server className="text-[#f59e0b] mb-3" size={28} />
                <h4 className="text-white font-bold mb-1">Backend & Cloud</h4>
                <p className="text-sm text-[#a1a1aa]">Node.js, AWS, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-right relative">
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-card border border-[#1f1f1f] p-2 sm:p-4">
              <div className="w-full aspect-[4/5] bg-[#111111] rounded-xl flex items-center justify-center border border-[#1f1f1f] relative overflow-hidden group">
                <img 
                  src={AboutImg} 
                  alt="Lokaditya Mishra" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4 rounded-lg backdrop-blur-md border border-[#f59e0b]/20 bg-[#080808]/80">
                    <p className="text-sm font-mono text-[#f59e0b] mb-1">{"<Location />"}</p>
                    <p className="text-white font-bold">Mumbai, India</p>
                    <p className="text-xs text-[#a1a1aa] mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-[#f59e0b] rounded-full blur-[100px] opacity-20"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
