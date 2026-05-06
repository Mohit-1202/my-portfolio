import { useEffect, useRef } from 'react';

const Experience = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('h-full');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Orbitra Technologies",
      date: "Nov 2025 – Present",
      bullets: [
        "Architected end-to-end system design and scalable cloud infrastructure",
        "Leading full-stack web & mobile development with React.js, Node.js, React Native",
        "Managing and mentoring a team 2 developers",
        "AWS deployments, Docker, CI/CD pipelines"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Alobha Technologies",
      date: "Dec 2024 – Nov 2025, Mumbai",
      bullets: [
        "Built scalable web apps and RESTful APIs",
        "Implemented JWT authentication workflows"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Remote",
      date: "Ongoing",
      bullets: [
        "20+ client projects delivered across domains"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-[60] min-h-screen border-t border-[#1f1f1f] bg-[#080808] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-24 reveal-base">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Where I've Worked</h2>
          <div className="w-24 h-1 bg-[#f59e0b] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central Animated Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1f1f1f] -translate-x-1/2"></div>
          {/* Animated Gold Fill */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 w-[2px] bg-[#f59e0b] -translate-x-1/2 transition-all duration-[2000ms] ease-out h-0"
          ></div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start justify-between group">

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-[#f59e0b] -translate-x-1/2 shadow-[0_0_10px_rgba(245,158,11,0.8)] border-4 border-[#080808] z-10 scale-0 transition-transform duration-500 group-[.is-visible]:scale-100"></div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-2' : 'order-1'}`}></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 flex flex-col items-center md:items-start text-center ${isEven ? 'order-1 md:items-end md:text-right md:pr-12 reveal-left' : 'order-2 md:pl-12 reveal-right md:text-left'}`}>
                    <div className={`glass-card p-8 rounded-2xl hover:border-[#f59e0b] transition-colors duration-300 relative`}>
                      <span className="text-[#f59e0b] text-sm font-bold tracking-wider uppercase block mb-3">{exp.date}</span>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-[#92400e] font-medium mb-6">{exp.company}</h4>

                      <ul className={`space-y-3 text-[#a1a1aa] flex flex-col items-center ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start justify-center md:justify-start gap-2">
                            <span className={`text-[#f59e0b] mt-1 ${isEven ? 'md:hidden' : ''}`}>▹</span>
                            <span className="flex-1">{bullet}</span>
                            <span className={`text-[#f59e0b] mt-1 hidden ${isEven ? 'md:inline-block' : ''}`}>◃</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
