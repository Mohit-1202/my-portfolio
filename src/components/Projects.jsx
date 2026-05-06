import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from './Image';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('#projects .reveal-base, #projects .reveal-left, #projects .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isExpanded]);

  const allProjects = [
    // {
    //   id: "01",
    //   name: "AI Itinerary & Video Engine",
    //   desc: "An advanced Generative AI tool that extracts complex travel itineraries from unstructured input and automatically synthesizes promotional videos using AI-driven visual assets.",
    //   tech: ["Generative AI", "LLMs", "Node.js", "Video API"],
    //   link: "#",
    //   github: null,
    //   img: "/Images/project_images/TubeVerse_img/TubeVerse_lg.jpg" // Placeholder for now
    // },
    // {
    //   id: "02",
    //   name: "FleetTrace Pro",
    //   desc: "Enterprise-grade live location tracking system built for large-scale logistics. Features real-time synchronization with WebSockets and precise geospatial mapping.",
    //   tech: ["Socket.io", "Google Maps API", "Node.js", "React Native"],
    //   link: "#",
    //   github: null,
    //   img: "/Images/project_images/NewsMonkey_img/NewsMonkeylg_img.png" // Placeholder for now
    // },
    {
      id: "01",
      name: "TubeVerse",
      desc: "A YouTube-like web application developed using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Users can watch, like, comment, and subscribe to channels.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://tube-verse.vercel.app/",
      github: "https://github.com/Mohit-1202/QuickTasks",
      img: "/Images/project_images/TubeVerse_img/TubeVerse_lg.jpg"
    },
    {
      id: "02",
      name: "QuickTasks",
      desc: "A MERN stack task management app that lets users create, update, delete, and track tasks with ease.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://quick-tasks-hazel.vercel.app/",
      github: "https://github.com/Mohit-1202/QuickTasks",
      img: "/Images/project_images/QuickTasks_img/QuickTasks_lg.jpg"
    },
    {
      id: "03",
      name: "Eshop",
      desc: "An e-commerce website for selling electronic products focused on creating a user-friendly interface.",
      tech: ["React.js", "Tailwind CSS"],
      link: "https://eshop-1202.netlify.app/",
      github: "https://github.com/Mohit-1202/Eshop_web",
      img: "/Images/project_images/Eshop_img/Eshoplg_img.png"
    },
    // {
    //   id: "06",
    //   name: "Portfolio",
    //   desc: "Portfolio app built with React and Tailwind CSS, showcasing my projects and skills.",
    //   tech: ["React.js", "Tailwind CSS"],
    //   link: "https://myportfolio1202.netlify.app/",
    //   github: "https://github.com/Mohit-1202/My_Portfolio",
    //   img: "/Images/project_images/Portfolio_img/Portfoliolg_img.png"
    // },
    // {
    //   id: "07",
    //   name: "News Monkey",
    //   desc: "News app providing real-time updates and user-friendly design.",
    //   tech: ["React.js", "Bootstrap"],
    //   link: "https://printifyui.netlify.app/",
    //   github: "https://github.com/Mohit-1202/printify",
    //   img: "/Images/project_images/NewsMonkey_img/NewsMonkeylg_img.png"
    // },
    // {
    //   id: "08",
    //   name: "TextUtils",
    //   desc: "Text manipulation utility application.",
    //   tech: ["React.js", "Tailwind CSS"],
    //   link: "https://my-textutils12.netlify.app/",
    //   github: "https://github.com/Mohit-1202/TextUtils-React",
    //   img: "/Images/project_images/TextUtils_img/TextUtilslg_img.png"
    // },
    // {
    //   id: "09",
    //   name: "Amazon Clone",
    //   desc: "Amazon clone built with HTML, CSS, and JS featuring responsive design and key features.",
    //   tech: ["HTML", "CSS", "JS"],
    //   link: "https://amazonclone-1202.netlify.app/",
    //   github: "https://github.com/Mohit-1202/Amazon_clone_project",
    //   img: "/Images/project_images/Amazon_img/amazon_img.png"
    // },
    // {
    //   id: "10",
    //   name: "RedWolf",
    //   desc: "A UI clone of the RedWolf merchandise store.",
    //   tech: ["HTML", "CSS"],
    //   link: "https://redwolfclone12.netlify.app/",
    //   github: "https://github.com/Mohit-1202/Redwolf_UI_Clone",
    //   img: "/Images/project_images/Redwolf_img/redwolf_img.png"
    // },
    // {
    //   id: "11",
    //   name: "Treasure Hunt",
    //   desc: "A game developed using C# and Unity, showcasing skills in game design and programming.",
    //   tech: ["Unity", "C#"],
    //   link: "https://printifyui.netlify.app/",
    //   github: "https://github.com/Mohit-1202/printify",
    //   img: "/Images/project_images/TreasureHunt_img/game_img.png"
    // },
    {
      id: "04",
      name: "Hotel Midtown",
      desc: "Luxury hotel located in Gangtok. Offers modern design, refined comfort, high-speed Wi-Fi, and in-house dining.",
      tech: ["Client Project", "Hospitality"],
      link: "https://gangtokmidtown.com/",
      github: null,
      img: "/Images/project_images/MidTown_img/MidTownlg_img.png"
    },
    {
      id: "05",
      name: "ANJ Group",
      desc: "Infrastructure & Urban Planning company with 25+ years experience. Delivered major projects including City Development Plans and Tourism Circuits.",
      tech: ["Client Project", "Corporate Portfolio"],
      link: "https://anjgroup.org",
      github: null,
      img: "/Images/project_images/Anj_img/Anjlg_img 10.28.40 AM.png"
    },
    {
      id: "06",
      name: "SketchSync",
      desc: "Collaborative real-time drawing canvas with auto-save.",
      tech: ["React.js", "Fabric.js", "Firebase"],
      link: "https://sketch-sync-theta.vercel.app",
      github: null,
      img: "/Images/project_images/SketchSync_img/SketchSynclg_img.png"
    },
    {
      id: "07",
      name: "Hygienx",
      desc: "Next-generation hygiene solutions company delivering eco-friendly, lab-tested products for homes, hotels, and healthcare.",
      tech: ["Client Project", "E-commerce"],
      link: "https://hygienx.in",
      github: null,
      img: "/Images/project_images/Hygienx_img/hygienxlg_img 10.29.41 AM.png"
    },
    {
      id: "08",
      name: "Falcon Office Solutions",
      desc: "Trusted leader in cleaning and hygiene solutions providing customized, eco-friendly facility management strategies.",
      tech: ["Client Project", "Corporate Website"],
      link: "https://falconofficesolutions.com",
      github: null,
      img: "/Images/project_images/falcon_img/falconlg_img.png"
    },
    {
      id: "09",
      name: "Aurinko Alpha Advantage Fund",
      desc: "SEBI-registered Alternative Investment Fund offering multi-strategy investment solutions for superior risk-adjusted returns.",
      tech: ["Client Project", "Financial Portal"],
      link: "#",
      github: null,
      img: "/Images/project_images/aurinko_img/aurinkolg_img.png"
    },
    {
      id: "10",
      name: "Mumbadevi Industries",
      desc: "Premier printing industry name since 2004, providing high-end quality print services with advanced industrial craftsmanship.",
      tech: ["Client Project", "Corporate Portfolio"],
      link: "#",
      github: null,
      img: "/Images/project_images/mumbadevi_img/mumbadevilg_img.png"
    },
    {
      id: "11",
      name: "iNotebook",
      desc: "A full-stack web application developed using MongoDB and Node.js. Users can create an account, log in, and add notes from anywhere, anytime.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://inotebook-1ogq.onrender.com/",
      github: "https://github.com/Mohit-1202/iNotebook",
      img: "/Images/project_images/iNotebook_img/iNotebook_lg.png"
    },
  ];

  const displayedProjects = isExpanded ? allProjects : allProjects.slice(0, 5);

  return (
    <section id="projects" className="py-32 relative z-40 min-h-screen border-t border-[#1f1f1f] bg-[#080808] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-24 reveal-base text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Work I've Shipped</h2>
          <div className="w-24 h-1 bg-[#f59e0b] rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="space-y-32 mb-24">
          {displayedProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                {/* Text Content */}
                <div className={`w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  <span className="text-[120px] font-display font-bold text-[#1f1f1f] leading-none absolute -z-10 -mt-16 -ml-4 opacity-50 select-none">
                    {project.id}
                  </span>
                  <h3 className="text-4xl font-display font-bold text-white mb-4 relative z-10">{project.name}</h3>
                  <div className="glass-card p-6 rounded-xl mb-6 relative z-10">
                    <p className="text-[#a1a1aa] text-lg leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 relative z-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded text-sm font-medium text-[#f59e0b]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-6 relative z-10">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-bold hover:text-[#f59e0b] transition-colors group"
                      >
                        Live Demo
                        <span className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ExternalLink size={20} />
                        </span>
                      </a>
                    )}
                    {/* {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#a1a1aa] font-medium hover:text-white transition-colors group"
                      >
                        GitHub
                        <span className="transform transition-transform group-hover:-translate-y-1">
                          <Code size={20} />
                        </span>
                      </a>
                    )} */}
                  </div>
                </div>

                {/* Browser Mockup with Image */}
                <div className={`w-full lg:w-1/2 perspective-1000 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className={`relative group w-full aspect-video transition-all duration-700 preserve-3d hover:z-20 ${isEven ? 'hover:[transform:rotateY(-5deg)_scale(1.02)]' : 'hover:[transform:rotateY(5deg)_scale(1.02)]'}`}>

                    {/* Glow behind mockup */}
                    <div className="absolute inset-0 bg-[#f59e0b]/20 blur-[50px] rounded-full group-hover:bg-[#f59e0b]/40 transition-colors duration-700"></div>

                    {/* CSS Window Frame with Image */}
                    <div className="absolute inset-0 bg-[#080808] border border-[#1f1f1f] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col group-hover:border-[#f59e0b]/50 transition-colors duration-500">
                      {/* Window Header */}
                      <div className="h-8 bg-[#111111] border-b border-[#1f1f1f] flex items-center px-4 gap-2 flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                        <div className="flex-1 mx-4 bg-[#080808] h-4 rounded border border-[#1f1f1f]"></div>
                      </div>
                      {/* Window Content (Image) */}
                      <div className="flex-1 w-full relative">
                        {/* We use a standard img tag; if the path is invalid it will fallback using onError */}
                        <Image
                          src={`${import.meta.env.BASE_URL}${project.img.startsWith('/') ? project.img.slice(1) : project.img}`}
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Dark overlay that fades on hover */}
                      <div className="absolute inset-x-0 bottom-0 top-8 bg-gradient-to-t from-[#080808] to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-20 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="relative text-center z-20 reveal-base">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#f59e0b] text-[#f59e0b] font-bold text-lg hover:bg-[#f59e0b] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] bg-[#080808]"
          >
            {isExpanded ? (
              <>View Less <ChevronUp size={20} /></>
            ) : (
              <>View More Projects <ChevronDown size={20} /></>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
