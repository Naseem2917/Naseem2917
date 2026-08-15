import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

/**
 * Official Naseem Khan (NK) Brand Logo Component
 * Easily customize colors, stroke, and geometry here or in /public/logo.svg
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Rounded Dark Cyber Container */}
      <rect
        width="100"
        height="100"
        rx="28"
        fill="#08090d"
        stroke="url(#brand-grad)"
        strokeWidth="3.5"
      />

      {/* Stylized 'N' Path */}
      <path
        d="M 28 72 L 28 28 L 60 72 L 60 28"
        stroke="url(#brand-grad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stylized 'K' Accent & Cyber Dot */}
      <path
        d="M 64 46 L 76 30 M 64 54 L 76 72"
        stroke="#06b6d4"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="76" cy="30" r="4" fill="#10b981" />
    </svg>
  );
};
