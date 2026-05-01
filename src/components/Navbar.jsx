import { Home, User, Briefcase, Code2, Mail, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction for dock visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }
      lastScrollY = currentScrollY;

      // Section active state logic
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'experience', 'contact'];
      let current = '';
      
      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Work', href: '#projects', id: 'projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Layers },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
  ];

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-[99] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
      isVisible ? 'bottom-6 opacity-100 translate-y-0' : '-bottom-24 opacity-0 translate-y-10'
    }`}>
      <nav className="glass-card bg-[#111111]/80 backdrop-blur-xl border border-[#1f1f1f] px-2 py-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex items-center gap-1 sm:gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;
          
          return (
            <a 
              key={link.name}
              href={link.href} 
              className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 group ${
                isActive ? 'bg-[#f59e0b] text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'text-[#a1a1aa] hover:bg-[#1f1f1f] hover:text-white'
              }`}
              title={link.name}
            >
              <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              
              {/* Tooltip */}
              <span className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-[#1f1f1f] border border-[#f59e0b]/20 text-white text-xs font-bold px-3 py-1 rounded shadow-lg pointer-events-none origin-bottom whitespace-nowrap">
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1f1f1f] border-b border-r border-[#f59e0b]/20 rotate-45"></span>
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
