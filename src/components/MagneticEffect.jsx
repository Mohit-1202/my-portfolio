import { useRef, useState } from 'react';

const MagneticEffect = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Magnetic pull strength (0.1 means 10% of the distance to edge)
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block transition-transform duration-300 ease-out cursor-pointer"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {children}
    </div>
  );
};

export default MagneticEffect;
