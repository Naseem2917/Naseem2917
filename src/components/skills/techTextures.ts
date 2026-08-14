import * as THREE from 'three';

export interface TechBadgeConfig {
  name: string;
  svgPath: string;
  color: string;
}

export const TECH_BADGES: TechBadgeConfig[] = [
  { name: 'Python', svgPath: `${import.meta.env.BASE_URL}tech/python.svg`, color: '#387eb8' },
  { name: 'GitHub', svgPath: `${import.meta.env.BASE_URL}tech/github.svg`, color: '#181717' },
  { name: 'Firebase', svgPath: `${import.meta.env.BASE_URL}tech/firebase.svg`, color: '#f57c00' },
  { name: 'Java', svgPath: `${import.meta.env.BASE_URL}tech/java.svg`, color: '#e76f00' },
  { name: 'React', svgPath: `${import.meta.env.BASE_URL}tech/react.svg`, color: '#61dafb' },
  { name: 'TypeScript', svgPath: `${import.meta.env.BASE_URL}tech/typescript.svg`, color: '#3178c6' },
  { name: 'Next.js', svgPath: `${import.meta.env.BASE_URL}tech/nextjs.svg`, color: '#000000' },
  { name: 'Node.js', svgPath: `${import.meta.env.BASE_URL}tech/nodejs.svg`, color: '#339933' },
  { name: 'Tailwind CSS', svgPath: `${import.meta.env.BASE_URL}tech/tailwind.svg`, color: '#06b6d4' },
  { name: 'JavaScript', svgPath: `${import.meta.env.BASE_URL}tech/javascript.svg`, color: '#f7df1e' },
  { name: 'MySQL', svgPath: `${import.meta.env.BASE_URL}tech/mysql.svg`, color: '#00758f' },
  { name: 'Vite', svgPath: `${import.meta.env.BASE_URL}tech/vite.svg`, color: '#bd34fe' },
  { name: 'Gemini AI', svgPath: `${import.meta.env.BASE_URL}tech/gemini.svg`, color: '#5b62de' },
  { name: 'C / C++', svgPath: `${import.meta.env.BASE_URL}tech/cpp.svg`, color: '#00599c' },
];

// Creates high-resolution official vector logo textures on both Front (25%) and Back (75%)
export function createOfficialTechTexture(badge: TechBadgeConfig): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // 1. Glossy White Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  // 2. Load Official SVG Image and draw on both Front and Back
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = badge.svgPath;

  img.onload = () => {
    // Clear background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const drawLogo = (centerX: number) => {
      ctx.save();
      ctx.translate(centerX, height / 2);

      // Draw official logo
      const logoSize = 210;
      ctx.drawImage(img, -logoSize / 2, -logoSize / 2 - 25, logoSize, logoSize);

      // Clean label under official logo
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 36px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(badge.name, 0, 130);

      ctx.restore();
    };

    // Front face (25%)
    drawLogo(width * 0.25);

    // Back face (75%)
    drawLogo(width * 0.75);

    texture.needsUpdate = true;
  };

  // Immediate fallback render before SVG image finishes decoding
  const renderFallback = () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const drawText = (centerX: number) => {
      ctx.save();
      ctx.translate(centerX, height / 2);
      ctx.fillStyle = badge.color;
      ctx.font = 'bold 50px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(badge.name, 0, 0);
      ctx.restore();
    };

    drawText(width * 0.25);
    drawText(width * 0.75);
    texture.needsUpdate = true;
  };

  renderFallback();

  return texture;
}
