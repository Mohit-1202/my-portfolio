import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkPointer = () => {
      setIsDesktop(
        window.matchMedia('(pointer: fine)').matches && 
        window.innerWidth >= 768
      );
    };
    
    checkPointer();
    window.addEventListener('resize', checkPointer);
    return () => window.removeEventListener('resize', checkPointer);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Small dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#f59e0b] rounded-full pointer-events-none z-[9999] transition-transform duration-75 flex items-center justify-center mix-blend-screen"
        style={{ 
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isPointer ? 2.5 : 1})`,
          boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)'
        }}
      />
      {/* Trailing Glow */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out mix-blend-screen opacity-40"
        style={{ 
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.5 : 1})`,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(245, 158, 11, 0) 70%)'
        }}
      />
      {/* Torch Spotlight */}
      <div 
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-transform duration-100 ease-linear mix-blend-screen opacity-[0.07]"
        style={{ 
          transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 1) 0%, rgba(245, 158, 11, 0) 70%)',
          filter: 'blur(40px)'
        }}
      />
    </>
  );
};

export default CustomCursor;
