const Skills = () => {
  const groups = [
    { label: "Frontend", skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "TypeScript", "Next.js"] },
    { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"] },
    { label: "AI & Real-time", skills: ["Generative AI", "LLMs", "Prompt Engineering", "WebSockets", "Socket.io"] },
    { label: "Mobile", skills: ["React Native", "iOS", "Android"] },
    { label: "Database", skills: ["MongoDB", "PostgreSQL", "Firebase"] },
    { label: "Cloud", skills: ["AWS", "Docker", "CI/CD", "Vercel"] },
    { label: "Architecture & Tools", skills: ["System Design", "Microservices", "Figma", "Postman", "Google Maps API"] }
  ];

  return (
    <section id="skills" className="py-32 relative z-50 min-h-screen flex items-center border-t border-[#1f1f1f] bg-[#080808] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-20 reveal-base">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">My Stack</h2>
          <div className="w-24 h-1 bg-[#f59e0b] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col items-center gap-6">
              {/* Divider Label */}
              <div className="flex items-center gap-4 w-full max-w-lg mx-auto reveal-base" style={{ transitionDelay: `${groupIdx * 0.1}s` }}>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f59e0b]/30"></div>
                <span className="text-[#f59e0b] font-display font-bold text-sm tracking-widest uppercase">{group.label}</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f59e0b]/30"></div>
              </div>
              
              {/* Tag Cloud */}
              <div className="flex flex-wrap justify-center gap-4 w-full reveal-base" style={{ transitionDelay: `${groupIdx * 0.15}s` }}>
                {group.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="px-6 py-3 bg-[#111111] border border-[#1f1f1f] rounded-full text-white font-medium shadow-lg hover:border-[#f59e0b] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:text-[#f59e0b] transition-all duration-300 hover:scale-110 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
