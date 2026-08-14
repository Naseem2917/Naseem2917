import * as THREE from 'three';

// Generates high-res crisp branded textures with Front & Back logos on HTML5 canvas
export function createTechTexture(name: string, symbol: string, color: string, bgColor = '#ffffff'): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // 1. Glossy White Spherical Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Helper function to draw branded logo badge at a given center X position
  const drawBadge = (centerX: number) => {
    ctx.save();
    ctx.translate(centerX, height / 2);

    // Subtle ambient circular ring
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 180, 0, Math.PI * 2);
    ctx.stroke();

    // Icon / Symbol
    ctx.fillStyle = color;
    ctx.font = 'bold 110px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, 0, -35);

    // Technology Name Text
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 44px "Space Grotesk", sans-serif';
    ctx.fillText(name, 0, 60);

    // Accent Color Underline Bar
    ctx.fillStyle = color;
    ctx.fillRect(-60, 100, 120, 8);

    ctx.restore();
  };

  // 2. Draw on Front Side (Center at 25%)
  drawBadge(width * 0.25);

  // 3. Draw on Back Side (Center at 75%) so no blank white space is visible when rotating
  drawBadge(width * 0.75);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export const TECH_BADGES = [
  { name: 'React', symbol: '⚛', color: '#0284c7' },
  { name: 'TypeScript', symbol: 'TS', color: '#2563eb' },
  { name: 'Next.js', symbol: '▲', color: '#000000' },
  { name: 'Node.js', symbol: '⬢', color: '#16a34a' },
  { name: 'Firebase', symbol: '🔥', color: '#ea580c' },
  { name: 'Gemini AI', symbol: '✦', color: '#9333ea' },
  { name: 'Python', symbol: '🐍', color: '#0284c7' },
  { name: 'Tailwind', symbol: '≈', color: '#0891b2' },
  { name: 'MySQL', symbol: '🐬', color: '#0369a1' },
  { name: 'Vite', symbol: '⚡', color: '#c026d3' },
  { name: 'JavaScript', symbol: 'JS', color: '#ca8a04' },
  { name: 'C / C++', symbol: 'C++', color: '#1d4ed8' },
  { name: 'Java', symbol: '☕', color: '#c2410c' },
  { name: 'GitHub', symbol: '🐙', color: '#1e293b' },
];
