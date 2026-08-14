import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, RotateCcw, MousePointer } from 'lucide-react';

interface TechBall {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  mass: number;
}

const TECH_ITEMS = [
  { name: 'React', color: '#0e2338', textColor: '#38bdf8', borderColor: '#38bdf8', glowColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'TypeScript', color: '#162238', textColor: '#60a5fa', borderColor: '#3b82f6', glowColor: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Firebase', color: '#2a1a08', textColor: '#fbbf24', borderColor: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.4)' },
  { name: 'Gemini AI', color: '#20123a', textColor: '#c084fc', borderColor: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.4)' },
  { name: 'Tailwind CSS', color: '#09252c', textColor: '#22d3ee', borderColor: '#06b6d4', glowColor: 'rgba(6, 182, 212, 0.4)' },
  { name: 'Vite', color: '#241436', textColor: '#e879f9', borderColor: '#c026d3', glowColor: 'rgba(192, 38, 211, 0.4)' },
  { name: 'Python', color: '#112233', textColor: '#38bdf8', borderColor: '#0284c7', glowColor: 'rgba(2, 132, 199, 0.4)' },
  { name: 'JavaScript', color: '#262208', textColor: '#facc15', borderColor: '#eab308', glowColor: 'rgba(234, 179, 8, 0.4)' },
  { name: 'Three.js', color: '#1a1a24', textColor: '#e2e8f0', borderColor: '#94a3b8', glowColor: 'rgba(148, 163, 184, 0.4)' },
  { name: 'MySQL', color: '#0c2233', textColor: '#38bdf8', borderColor: '#0369a1', glowColor: 'rgba(3, 105, 161, 0.4)' },
  { name: 'Node.js', color: '#0d2818', textColor: '#4ade80', borderColor: '#22c55e', glowColor: 'rgba(34, 197, 94, 0.4)' },
  { name: 'C / C++', color: '#181e2b', textColor: '#93c5fd', borderColor: '#3b82f6', glowColor: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Java', color: '#2c140d', textColor: '#fb923c', borderColor: '#ea580c', glowColor: 'rgba(234, 88, 12, 0.4)' },
  { name: 'Cloudflare', color: '#28170c', textColor: '#fdba74', borderColor: '#f97316', glowColor: 'rgba(249, 115, 22, 0.4)' },
  { name: 'Git & GitHub', color: '#1a1a1f', textColor: '#f1f5f9', borderColor: '#64748b', glowColor: 'rgba(100, 116, 139, 0.4)' },
  { name: 'REST APIs', color: '#13241b', textColor: '#34d399', borderColor: '#10b981', glowColor: 'rgba(16, 185, 129, 0.4)' },
];

export const GravityPhysicsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<TechBall[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isInside: boolean }>({ x: -1000, y: -1000, isInside: false });
  const animFrameId = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [ballCount, setBallCount] = useState(0);

  // Initialize and spawn physics balls
  const initBalls = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const isMobile = width < 640;
    const baseRadius = isMobile ? 32 : 42;

    const newBalls: TechBall[] = TECH_ITEMS.map((item, i) => {
      const radius = baseRadius + (i % 3 === 0 ? 6 : i % 3 === 1 ? -4 : 0);
      return {
        x: Math.random() * (width - radius * 2) + radius,
        y: -50 - i * 45, // Staggered drop from top
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1,
        radius,
        name: item.name,
        color: item.color,
        textColor: item.textColor,
        borderColor: item.borderColor,
        glowColor: item.glowColor,
        mass: radius * 0.1,
      };
    });

    ballsRef.current = newBalls;
    setBallCount(newBalls.length);
  };

  // Viewport intersection observer to freeze physics when scrolled away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Canvas size and physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      initBalls();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Physics animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();

    const updatePhysics = (time: number) => {
      if (!isVisible) {
        animFrameId.current = requestAnimationFrame(updatePhysics);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Delta time clamping to prevent physics explosions
      const dt = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const gravity = 480; // Downward gravity acceleration
      const bounceRestitution = 0.68;
      const friction = 0.985;
      const balls = ballsRef.current;
      const mouse = mouseRef.current;

      // 1. Apply Forces and Movement
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Apply gravity
        b.vy += gravity * dt;

        // Apply air resistance/friction
        b.vx *= Math.pow(friction, dt * 60);
        b.vy *= Math.pow(friction, dt * 60);

        // Mouse Repulsion Force
        if (mouse.isInside) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 140;

          if (dist < pushRadius && dist > 0) {
            const force = (1 - dist / pushRadius) * 850;
            const nx = dx / dist;
            const ny = dy / dist;
            b.vx += nx * force * dt;
            b.vy += ny * force * dt;
          }
        }

        // Update positions
        b.x += b.vx * dt * 60;
        b.y += b.vy * dt * 60;

        // 2. Wall Collisions
        // Floor
        if (b.y + b.radius > height) {
          b.y = height - b.radius;
          b.vy = -b.vy * bounceRestitution;
          b.vx *= 0.95; // Surface friction
        }
        // Left wall
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = -b.vx * bounceRestitution;
        }
        // Right wall
        if (b.x + b.radius > width) {
          b.x = width - b.radius;
          b.vx = -b.vx * bounceRestitution;
        }
        // Ceiling (soft rebound)
        if (b.y - b.radius < -100) {
          b.vy += gravity * dt * 2;
        }
      }

      // 3. Ball-to-Ball Elastic Collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const b1 = balls[i];
          const b2 = balls[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.radius + b2.radius;

          if (dist < minDist && dist > 0) {
            // Overlap resolution
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            b1.x -= nx * overlap * 0.5;
            b1.y -= ny * overlap * 0.5;
            b2.x += nx * overlap * 0.5;
            b2.y += ny * overlap * 0.5;

            // Elastic velocity exchange
            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const p = 2 * (nx * kx + ny * ky) / (b1.mass + b2.mass);

            b1.vx -= p * b2.mass * nx * bounceRestitution;
            b1.vy -= p * b2.mass * ny * bounceRestitution;
            b2.vx += p * b1.mass * nx * bounceRestitution;
            b2.vy += p * b1.mass * ny * bounceRestitution;
          }
        }
      }

      // 4. Render Balls with High Aesthetics
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        ctx.save();
        ctx.translate(b.x, b.y);

        // Glow shadow
        ctx.shadowColor = b.glowColor;
        ctx.shadowBlur = 14;

        // Ball Body
        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // Border
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = b.borderColor;
        ctx.stroke();

        // Subtle specular highlight
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(-b.radius * 0.3, -b.radius * 0.3, b.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.fill();

        // Text label
        ctx.fillStyle = b.textColor;
        ctx.font = `600 ${Math.max(10, Math.floor(b.radius * 0.32))}px "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.name, 0, 0);

        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  // Mouse interaction handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isInside: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isInside = false;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Explosive impulse burst on click
    ballsRef.current.forEach((b) => {
      const dx = b.x - clickX;
      const dy = b.y - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 220 && dist > 0) {
        const force = (1 - dist / 220) * 450;
        b.vx += (dx / dist) * force;
        b.vy += (dy / dist) * force - 100;
      }
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden glass-panel border border-surface-border/80 bg-surface/40 flex flex-col">
      {/* Top Bar / Controls */}
      <div className="absolute top-3 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>Interactive Gravity Playground ({ballCount} Technologies)</span>
        </div>

        <button
          onClick={initBalls}
          className="pointer-events-auto flex items-center gap-1.5 bg-surface/90 hover:bg-surface-border backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
          title="Reset Gravity Balls"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset Balls</span>
        </button>
      </div>

      {/* Physics Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-crosshair"
      />

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-[11px] font-mono text-slate-400">
        <MousePointer className="w-3 h-3 text-primary animate-bounce" />
        <span>Move cursor to push balls • Click to scatter</span>
      </div>
    </div>
  );
};
