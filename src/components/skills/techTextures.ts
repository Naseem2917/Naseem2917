import * as THREE from 'three';

// Generates high-res crisp branded textures on HTML5 canvas for 3D physics spheres
export function createTechTexture(name: string, symbol: string, color: string, bgColor = '#ffffff'): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // 1. Glossy White Spherical Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  // 2. Decorative Modern Tech Pattern
  ctx.save();
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.42, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // 3. Central Brand Logo & Text
  ctx.save();
  ctx.translate(size / 2, size / 2);

  // Logo Icon / Symbol
  ctx.fillStyle = color;
  ctx.font = 'bold 110px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(symbol, 0, -35);

  // Technology Name Text
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 44px "Space Grotesk", sans-serif';
  ctx.fillText(name, 0, 60);

  // Subtle Accent Bar
  ctx.fillStyle = color;
  ctx.fillRect(-60, 100, 120, 8);

  ctx.restore();

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
