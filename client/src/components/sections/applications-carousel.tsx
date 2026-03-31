'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ───────── Custom SVG Illustrations ───────── */
/* Each icon is a small, descriptive scene rather than a generic line icon */

const IconHomeFoundation = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M32 8L6 28h6v24h44V28h6L32 8z" fill="#fbbf24" opacity="0.15"/>
    <path d="M32 8L6 28h6v24h44V28h6L32 8z" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="26" y="36" width="12" height="16" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="14" y1="56" x2="50" y2="56" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 2"/>
    <line x1="18" y1="60" x2="18" y2="52" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="46" y1="60" x2="46" y2="52" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconDeck = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <rect x="8" y="24" width="48" height="4" rx="1" fill="#fbbf24" opacity="0.2"/>
    <path d="M8 24h48v4H8z" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="8" y1="26" x2="56" y2="26" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Deck boards */}
    <line x1="16" y1="24" x2="16" y2="28" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="24" y1="24" x2="24" y2="28" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="32" y1="24" x2="32" y2="28" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="40" y1="24" x2="40" y2="28" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="48" y1="24" x2="48" y2="28" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Railing */}
    <line x1="10" y1="12" x2="10" y2="24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="54" y1="12" x2="54" y2="24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="12" x2="54" y2="12" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="10" y1="18" x2="54" y2="18" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="22" y1="12" x2="22" y2="24" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="34" y1="12" x2="34" y2="24" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="46" y1="12" x2="46" y2="24" stroke="#fbbf24" strokeWidth="1"/>
    {/* Helical piles below */}
    <line x1="14" y1="28" x2="14" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="32" y1="28" x2="32" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="50" y1="28" x2="50" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="14" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <ellipse cx="32" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <ellipse cx="50" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
  </svg>
);

const IconFence = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Fence posts */}
    <rect x="8" y="10" width="5" height="40" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="29.5" y="10" width="5" height="40" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="51" y="10" width="5" height="40" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    {/* Post tops (pointed) */}
    <polygon points="8,10 10.5,4 13,10" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
    <polygon points="29.5,10 32,4 34.5,10" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
    <polygon points="51,10 53.5,4 56,10" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
    {/* Rails */}
    <rect x="13" y="18" width="16.5" height="3" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="13" y="34" width="16.5" height="3" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="34.5" y="18" width="16.5" height="3" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="34.5" y="34" width="16.5" height="3" stroke="#fbbf24" strokeWidth="1"/>
    {/* Ground piles */}
    <line x1="10.5" y1="50" x2="10.5" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2"/>
    <line x1="32" y1="50" x2="32" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2"/>
    <line x1="53.5" y1="50" x2="53.5" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2"/>
  </svg>
);

const IconShed = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M8 28L32 12L56 28" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="12" y="28" width="40" height="24" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="12" y="28" width="40" height="24" fill="#fbbf24" opacity="0.08"/>
    <rect x="24" y="36" width="16" height="16" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="32" y1="36" x2="32" y2="52" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="24" y1="44" x2="40" y2="44" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="16" y1="56" x2="16" y2="52" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="48" y1="56" x2="48" y2="52" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="56" x2="54" y2="56" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
  </svg>
);

const IconAddition = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Main house */}
    <path d="M6 26L22 14L38 26" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="8" y="26" width="28" height="22" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="16" y="34" width="8" height="14" rx="1" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Addition */}
    <rect x="36" y="22" width="22" height="26" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.15"/>
    <line x1="36" y1="22" x2="58" y2="22" stroke="#fbbf24" strokeWidth="2"/>
    <rect x="42" y="30" width="10" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="47" y1="30" x2="47" y2="38" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Ground */}
    <line x1="4" y1="52" x2="60" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="42" y1="52" x2="42" y2="48" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="52" y1="52" x2="52" y2="48" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconSolar = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Sun rays */}
    <circle cx="48" cy="12" r="6" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.2"/>
    <line x1="48" y1="2" x2="48" y2="5" stroke="#fbbf24" strokeWidth="1.2"/>
    <line x1="56" y1="6" x2="54" y2="8" stroke="#fbbf24" strokeWidth="1.2"/>
    <line x1="58" y1="12" x2="55" y2="12" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Solar panel */}
    <path d="M6 22L52 34L48 44L2 32Z" fill="#fbbf24" opacity="0.1" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="16" y1="25" x2="12" y2="35" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="24" y2="38" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="40" y1="31" x2="36" y2="41" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="4" y1="27" x2="50" y2="39" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Support post + pile */}
    <line x1="26" y1="38" x2="26" y2="54" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="26" cy="52" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="20" y1="58" x2="32" y2="58" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const IconGarage = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M8 26L32 10L56 26" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="10" y="26" width="44" height="26" stroke="#fbbf24" strokeWidth="1.5"/>
    <rect x="10" y="26" width="44" height="26" fill="#fbbf24" opacity="0.08"/>
    {/* Garage door */}
    <rect x="16" y="30" width="32" height="22" rx="1" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="16" y1="36" x2="48" y2="36" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="16" y1="42" x2="48" y2="42" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="16" y1="46" x2="48" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Ground + piles */}
    <line x1="6" y1="56" x2="58" y2="56" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="16" y1="52" x2="16" y2="60" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="48" y1="52" x2="48" y2="60" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconDock = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Water */}
    <path d="M2 42Q10 38 18 42Q26 46 34 42Q42 38 50 42Q58 46 62 42" stroke="#fbbf24" strokeWidth="1" opacity="0.4"/>
    <path d="M2 48Q10 44 18 48Q26 52 34 48Q42 44 50 48Q58 52 62 48" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
    {/* Dock platform */}
    <rect x="6" y="26" width="52" height="5" fill="#fbbf24" opacity="0.15" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="14" y1="26" x2="14" y2="31" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="24" y1="26" x2="24" y2="31" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="34" y1="26" x2="34" y2="31" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="44" y1="26" x2="44" y2="31" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Posts + piles */}
    <line x1="12" y1="14" x2="12" y2="26" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="52" y1="14" x2="52" y2="26" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="12" y1="14" x2="52" y2="14" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="18" y1="31" x2="18" y2="54" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="46" y1="31" x2="46" y2="54" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="18" cy="50" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.5"/>
    <ellipse cx="46" cy="50" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.5"/>
  </svg>
);

const IconRetainingWall = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Stacked blocks */}
    <rect x="6" y="40" width="52" height="8" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.1"/>
    <rect x="6" y="32" width="44" height="8" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.1"/>
    <rect x="6" y="24" width="36" height="8" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.15"/>
    <rect x="6" y="16" width="28" height="8" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.15"/>
    {/* Block joints */}
    <line x1="22" y1="40" x2="22" y2="48" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="38" y1="40" x2="38" y2="48" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="14" y1="32" x2="14" y2="40" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="30" y1="32" x2="30" y2="40" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="22" y1="24" x2="22" y2="32" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="14" y1="16" x2="14" y2="24" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Ground / soil */}
    <path d="M6 10L6 16" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2"/>
    <line x1="4" y1="52" x2="60" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="14" y1="48" x2="14" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="44" y1="48" x2="44" y2="56" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconStairs = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Stair steps */}
    <path d="M8 48H20V38H32V28H44V18H56V48" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round" fill="#fbbf24" opacity="0.08"/>
    {/* Railing */}
    <line x1="8" y1="48" x2="56" y2="8" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="20" y1="38" x2="20" y2="32" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="32" y1="28" x2="32" y2="22" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="44" y1="18" x2="44" y2="12" stroke="#fbbf24" strokeWidth="1"/>
    {/* Foundation */}
    <line x1="4" y1="52" x2="60" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="14" y1="48" x2="14" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="50" y1="48" x2="50" y2="56" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconCottage = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Trees */}
    <polygon points="50,10 44,28 56,28" fill="#fbbf24" opacity="0.15" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="50" y1="28" x2="50" y2="36" stroke="#fbbf24" strokeWidth="1.5"/>
    {/* Cabin */}
    <path d="M6 30L26 16L46 30" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="8" y="30" width="36" height="18" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.1"/>
    {/* Log lines */}
    <line x1="8" y1="34" x2="44" y2="34" stroke="#fbbf24" strokeWidth="0.5"/>
    <line x1="8" y1="38" x2="44" y2="38" stroke="#fbbf24" strokeWidth="0.5"/>
    <line x1="8" y1="42" x2="44" y2="42" stroke="#fbbf24" strokeWidth="0.5"/>
    <rect x="20" y="36" width="10" height="12" rx="1" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Chimney */}
    <rect x="34" y="18" width="5" height="10" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Piles */}
    <line x1="4" y1="52" x2="48" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="14" y1="48" x2="14" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="38" y1="48" x2="38" y2="56" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconContainer = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <rect x="6" y="16" width="52" height="30" rx="1" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.1"/>
    {/* Container ribs */}
    <line x1="14" y1="16" x2="14" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="22" y1="16" x2="22" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="30" y1="16" x2="30" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="38" y1="16" x2="38" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    <line x1="46" y1="16" x2="46" y2="46" stroke="#fbbf24" strokeWidth="0.75"/>
    {/* Doors */}
    <rect x="48" y="20" width="8" height="22" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="52" y1="20" x2="52" y2="42" stroke="#fbbf24" strokeWidth="1"/>
    {/* Piles */}
    <line x1="4" y1="50" x2="60" y2="50" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="14" y1="46" x2="14" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="50" y1="46" x2="50" y2="56" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconGazebo = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Pointed roof */}
    <path d="M32 4L4 28h56L32 4z" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round" fill="#fbbf24" opacity="0.1"/>
    {/* Roof overhang */}
    <line x1="4" y1="28" x2="60" y2="28" stroke="#fbbf24" strokeWidth="2"/>
    {/* Posts */}
    <line x1="12" y1="28" x2="12" y2="46" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="32" y1="28" x2="32" y2="46" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="52" y1="28" x2="52" y2="46" stroke="#fbbf24" strokeWidth="2"/>
    {/* Platform */}
    <rect x="8" y="46" width="48" height="3" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.15"/>
    {/* Piles */}
    <line x1="18" y1="49" x2="18" y2="60" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="46" y1="49" x2="46" y2="60" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="18" cy="56" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
    <ellipse cx="46" cy="56" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
  </svg>
);

const IconModularHome = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Module 1 */}
    <rect x="4" y="18" width="26" height="20" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.1"/>
    <rect x="10" y="24" width="8" height="6" rx="0.5" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="14" y1="24" x2="14" y2="30" stroke="#fbbf24" strokeWidth="0.5"/>
    {/* Module 2 */}
    <rect x="30" y="18" width="30" height="20" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.15"/>
    <rect x="36" y="24" width="8" height="6" rx="0.5" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="40" y1="24" x2="40" y2="30" stroke="#fbbf24" strokeWidth="0.5"/>
    <rect x="48" y="26" width="6" height="12" rx="0.5" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Connection arrows */}
    <path d="M26 28h8" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 1"/>
    {/* Foundation */}
    <line x1="2" y1="42" x2="62" y2="42" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="12" y1="38" x2="12" y2="48" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="32" y1="38" x2="32" y2="48" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="52" y1="38" x2="52" y2="48" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconPool = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Pool shape */}
    <rect x="8" y="16" width="48" height="28" rx="6" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.1"/>
    {/* Water waves */}
    <path d="M14 26Q22 22 30 26Q38 30 46 26" stroke="#fbbf24" strokeWidth="1.2"/>
    <path d="M14 32Q22 28 30 32Q38 36 46 32" stroke="#fbbf24" strokeWidth="1" opacity="0.6"/>
    {/* Pool edge details */}
    <line x1="8" y1="16" x2="56" y2="16" stroke="#fbbf24" strokeWidth="2.5"/>
    {/* Ladder */}
    <line x1="48" y1="12" x2="48" y2="26" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="52" y1="12" x2="52" y2="26" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="48" y1="16" x2="52" y2="16" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="48" y1="20" x2="52" y2="20" stroke="#fbbf24" strokeWidth="1"/>
    {/* Piles below */}
    <line x1="16" y1="44" x2="16" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="48" y1="44" x2="48" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="16" cy="52" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
    <ellipse cx="48" cy="52" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
  </svg>
);

const IconSunroom = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Glass walls */}
    <rect x="8" y="18" width="48" height="30" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.06"/>
    {/* Roof */}
    <path d="M4 18L32 6L60 18" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="4" y1="18" x2="60" y2="18" stroke="#fbbf24" strokeWidth="2"/>
    {/* Window panes */}
    <line x1="20" y1="18" x2="20" y2="48" stroke="#fbbf24" strokeWidth="1.2"/>
    <line x1="32" y1="18" x2="32" y2="48" stroke="#fbbf24" strokeWidth="1.2"/>
    <line x1="44" y1="18" x2="44" y2="48" stroke="#fbbf24" strokeWidth="1.2"/>
    <line x1="8" y1="33" x2="56" y2="33" stroke="#fbbf24" strokeWidth="1"/>
    {/* Sun */}
    <circle cx="50" cy="10" r="3" fill="#fbbf24" opacity="0.4"/>
    {/* Foundation */}
    <line x1="6" y1="52" x2="58" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="16" y1="48" x2="16" y2="56" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="48" y1="48" x2="48" y2="56" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

const IconSignage = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Sign board */}
    <rect x="10" y="8" width="44" height="24" rx="1" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.15"/>
    {/* Text lines on sign */}
    <line x1="18" y1="16" x2="46" y2="16" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="24" x2="42" y2="24" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Support posts */}
    <line x1="20" y1="32" x2="20" y2="52" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="44" y1="32" x2="44" y2="52" stroke="#fbbf24" strokeWidth="2"/>
    {/* Ground + piles */}
    <line x1="8" y1="52" x2="56" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2"/>
    <ellipse cx="20" cy="50" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
    <ellipse cx="44" cy="50" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
  </svg>
);

const IconUnderpinning = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Existing foundation wall */}
    <rect x="8" y="8" width="48" height="20" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.08"/>
    <line x1="8" y1="18" x2="56" y2="18" stroke="#fbbf24" strokeWidth="0.5"/>
    <text x="32" y="16" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold" opacity="0.6">EXISTING</text>
    {/* Bracket connection */}
    <rect x="14" y="28" width="12" height="6" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.2"/>
    <rect x="38" y="28" width="12" height="6" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.2"/>
    {/* Piles going deep */}
    <line x1="20" y1="34" x2="20" y2="58" stroke="#fbbf24" strokeWidth="2.5"/>
    <line x1="44" y1="34" x2="44" y2="58" stroke="#fbbf24" strokeWidth="2.5"/>
    <ellipse cx="20" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <ellipse cx="44" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <ellipse cx="20" cy="56" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
    <ellipse cx="44" cy="56" rx="4" ry="1.5" stroke="#fbbf24" strokeWidth="1.2"/>
  </svg>
);

const IconBalcony = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Building wall */}
    <rect x="4" y="4" width="20" height="56" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.06"/>
    <rect x="8" y="10" width="10" height="8" rx="0.5" stroke="#fbbf24" strokeWidth="1"/>
    <rect x="8" y="38" width="10" height="8" rx="0.5" stroke="#fbbf24" strokeWidth="1"/>
    {/* Balcony platform */}
    <rect x="24" y="28" width="32" height="4" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.15"/>
    {/* Railing */}
    <line x1="24" y1="16" x2="56" y2="16" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="24" y1="22" x2="56" y2="22" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="24" y1="16" x2="24" y2="28" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="36" y1="16" x2="36" y2="28" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="48" y1="16" x2="48" y2="28" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="56" y1="16" x2="56" y2="28" stroke="#fbbf24" strokeWidth="1.5"/>
    {/* Support + pile */}
    <line x1="44" y1="32" x2="44" y2="54" stroke="#fbbf24" strokeWidth="2"/>
    <ellipse cx="44" cy="50" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="38" y1="58" x2="50" y2="58" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const IconEVCharger = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Charging station */}
    <rect x="22" y="8" width="20" height="32" rx="2" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" opacity="0.1"/>
    {/* Screen */}
    <rect x="26" y="12" width="12" height="8" rx="1" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Lightning bolt */}
    <path d="M30 24L34 24L32 30L36 30L30 38L32 32L28 32Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="0.5"/>
    {/* Cable */}
    <path d="M42 26Q50 26 50 34Q50 42 44 42" stroke="#fbbf24" strokeWidth="1.5" fill="none"/>
    <circle cx="44" cy="42" r="2" stroke="#fbbf24" strokeWidth="1.2"/>
    {/* Foundation */}
    <line x1="22" y1="40" x2="42" y2="40" stroke="#fbbf24" strokeWidth="1"/>
    <line x1="32" y1="40" x2="32" y2="56" stroke="#fbbf24" strokeWidth="2.5"/>
    <ellipse cx="32" cy="52" rx="5" ry="2" stroke="#fbbf24" strokeWidth="1.5"/>
    <line x1="26" y1="58" x2="38" y2="58" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const applications = [
  { icon: IconHomeFoundation, label: 'Home Foundations' },
  { icon: IconDeck, label: 'Decks' },
  { icon: IconFence, label: 'Fences' },
  { icon: IconShed, label: 'Sheds' },
  { icon: IconAddition, label: 'Home Additions' },
  { icon: IconSolar, label: 'Solar Panels' },
  { icon: IconGarage, label: 'Garages' },
  { icon: IconDock, label: 'Docks & Boathouses' },
  { icon: IconRetainingWall, label: 'Retaining Walls' },
  { icon: IconStairs, label: 'Exterior Stairs' },
  { icon: IconCottage, label: 'Cottages & Cabins' },
  { icon: IconContainer, label: 'Containers' },
  { icon: IconGazebo, label: 'Gazebos' },
  { icon: IconModularHome, label: 'Modular Homes' },
  { icon: IconPool, label: 'Swimming Pools' },
  { icon: IconSunroom, label: 'Sunrooms' },
  { icon: IconSignage, label: 'Signage & Billboards' },
  { icon: IconUnderpinning, label: 'Underpinning' },
  { icon: IconBalcony, label: 'Balconies' },
  { icon: IconEVCharger, label: 'EV Charging Stations' },
];

export function ApplicationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 360;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="applications" className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest text-white mb-4">
            Types of Applications:
          </h2>
          <p className="text-primary font-bold text-lg">
            A helical pile foundation system for a level of support that is
            unmatched
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary hover:bg-yellow-500 transition-colors rounded-none p-2 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {/* Carousel */}
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-4 pb-2 min-w-min">
              {applications.map((app, idx) => {
                const Icon = app.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-zinc-900 border border-zinc-700 rounded-none p-5 flex flex-col items-center justify-center text-center w-44 h-48 flex-shrink-0 hover:border-primary transition-colors cursor-pointer group"
                  >
                    <div className="w-20 h-20 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Icon />
                    </div>
                    <p className="text-white text-xs font-bold uppercase tracking-wide leading-tight">
                      {app.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary hover:bg-yellow-500 transition-colors rounded-none p-2 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="bg-primary hover:bg-yellow-500 text-black font-bold uppercase px-8 py-3 rounded-none tracking-widest transition-colors inline-block"
          >
            Ready for a Quote?
          </a>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
