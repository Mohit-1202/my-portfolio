import { Globe, Smartphone, Cloud, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-[#f59e0b] mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />,
      title: "Web Applications",
      desc: "Full-stack web apps with React.js, Node.js & MongoDB — responsive, fast, and production-ready.",
      delay: "0.1s"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#f59e0b] mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />,
      title: "Mobile Apps",
      desc: "Cross-platform iOS & Android apps using React Native, built for performance and smooth UX.",
      delay: "0.2s"
    },
    {
      icon: <Cloud className="w-10 h-10 text-[#f59e0b] mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />,
      title: "Cloud & DevOps",
      desc: "AWS deployment, Docker containerization, and CI/CD pipelines for reliable, scalable infrastructure.",
      delay: "0.3s"
    },
    {
      icon: <Layout className="w-10 h-10 text-[#f59e0b] mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />,
      title: "UI/UX to Code",
      desc: "Pixel-perfect implementation from Figma designs using Tailwind CSS — no detail overlooked.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-32 relative z-30 min-h-screen flex items-center border-t border-[#1f1f1f] bg-[#080808] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-24 reveal-base">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">What I Build</h2>
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#f59e0b] scale-x-0 origin-left transition-transform duration-1000 delay-300 group-[.is-visible]:scale-x-100"></div>
          </div>
          <p className="text-xl text-[#a1a1aa] leading-relaxed">
            End-to-end development — from idea to deployed product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto perspective-1000">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover-glow reveal-base"
              style={{ transitionDelay: service.delay }}
            >
              {service.icon}
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
