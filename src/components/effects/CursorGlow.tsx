import React, { useEffect, useState, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp loop
    const updateGlowPosition = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(updateGlowPosition);
    };

    animFrameId.current = requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute top-0 left-0 -ml-[250px] -mt-[250px] w-[500px] h-[500px] rounded-full opacity-60 mix-blend-screen transition-opacity duration-300 pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};
