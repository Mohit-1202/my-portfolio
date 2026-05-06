import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Deliberate, cinematic progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 400);
          setTimeout(() => setIsLoading(false), 1800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">

      {/* Tech Curtains (Vertical Panels) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute top-0 bottom-0 bg-[#0a0a0a] border-r border-[#1f1f1f]/30 transition-transform duration-[1200ms] ease-[cubic-bezier(0.8,0,0.2,1)] z-[100]`}
          style={{
            left: `${(i * 100) / 6}%`,
            width: `${100 / 6}%`,
            transform: isExiting ? `translateY(${i % 2 === 0 ? '-100%' : '100%'})` : 'translateY(0%)',
            transitionDelay: `${i * 100}ms`
          }}
        >
          {/* Subtle Tech Pattern on each panel */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-1/4 left-1/2 w-full h-[1px] bg-[#f59e0b] -rotate-45"></div>
          </div>
        </div>
      ))}

      {/* Main Content (Behind/On top of curtains before exit) */}
      <div className={`relative z-[110] flex flex-col items-center transition-all duration-700 ${isExiting ? 'opacity-0 scale-95 blur-xl' : 'opacity-100 scale-100'}`}>

        {/* Tech Header */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#f59e0b]/50"></span>
            <span className="text-[10px] font-mono text-[#f59e0b] tracking-[0.5em] uppercase">Architecture.Boot</span>
            <span className="w-8 h-[1px] bg-[#f59e0b]/50"></span>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-widest">
              LOKADITYA<span className="text-[#f59e0b] animate-pulse">.</span>
            </h1>
            {/* Glow behind text */}
            <div className="absolute -inset-4 bg-[#f59e0b] opacity-10 blur-[40px] rounded-full"></div>
          </div>
        </div>

        {/* Circular Progress & Percentage */}
        <div className="relative flex flex-col items-center">
          <div className="text-4xl font-display font-bold text-white mb-4">
            {progress}%
          </div>
          <div className="w-48 h-1 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#1f1f1f]">
            <div
              className="h-full bg-[#f59e0b] transition-all duration-500 shadow-[0_0_10px_#f59e0b]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Tech Status Labels */}
          <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-2 font-mono text-[8px] text-white/20 uppercase tracking-widest">
            <div className={progress > 20 ? 'text-[#f59e0b]' : ''}>[ Core_Engine: OK ]</div>
            <div className={progress > 50 ? 'text-[#f59e0b]' : ''}>[ UI_Layout: LOADED ]</div>
            <div className={progress > 75 ? 'text-[#f59e0b]' : ''}>[ Assets_Sync: 100% ]</div>
            <div className={progress > 95 ? 'text-[#f59e0b]' : ''}>[ Ready_To_Ship ]</div>
          </div>
        </div>

      </div>

      {/* Gold Flash Overlay on Exit */}
      <div className={`absolute inset-0 bg-[#f59e0b]/10 z-[120] pointer-events-none transition-opacity duration-1000 ${isExiting ? 'opacity-100' : 'opacity-0'}`} />

    </div>
  );
};

export default Preloader;
