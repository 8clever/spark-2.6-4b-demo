// Generates a stylized fashion illustration for the Agentic Fashion about page.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const outDir = 'public';
mkdirSync(outDir, { recursive: true });

const W = 1000;
const H = 1250;

const defs = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#F4F1EA"/>
    <stop offset="1" stop-color="#E9E4D8"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.42" r="0.5">
    <stop offset="0" stop-color="#9D6CF3" opacity="0.55"/>
    <stop offset="0.55" stop-color="#9D6CF3" opacity="0.12"/>
    <stop offset="1" stop-color="#9D6CF3" opacity="0"/>
  </radialGradient>
  <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#8B7BA8"/>
    <stop offset="1" stop-color="#6C4BD1"/>
  </linearGradient>
  <linearGradient id="f2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5E6B8C"/>
    <stop offset="1" stop-color="#3E4A63"/>
  </linearGradient>
</defs>`;

const svg = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${defs}
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="${W / 2}" cy="${H * 0.42}" r="${W * 0.64}" fill="url(#glow)"/>
  <ellipse cx="${W / 2}" cy="${H - 120}" rx="${W * 0.34}" ry="${58}" fill="#1A1714" opacity="0.16"/>
  <g transform="translate(${W / 2 - 140}, ${H * 0.42})">
    ${inner}
  </g>
</svg>`;

const body = svg(`
  <g>
    <path d="M -180 30 L 180 30 L 165 205 L -165 205 Z" fill="url(#f1)" stroke="#4A3580" stroke-opacity="0.5" stroke-width="3"/>
    <path d="M -165 205 L -135 245 L -135 270 L 135 270 L 135 245 L 165 205 L 165 350 L -165 350 Z" fill="url(#f2)" stroke="#3E4A63" stroke-opacity="0.45" stroke-width="3"/>
    <path d="M -135 270 L -125 300 L -125 325 L 125 325 L 125 300 L 135 270" fill="none" stroke="#4A3580" stroke-opacity="0.5" stroke-width="3"/>
    <path d="M -130 300 L 130 300 L 165 360 L -165 360 Z" fill="url(#f1)" opacity="0.7"/>
    <path d="M -130 140 Q -180 120 -180 60 Q -180 110 -130 140" fill="none" stroke="#5E6B8C" stroke-width="8" opacity="0.7"/>
    <path d="M 130 140 Q 180 120 180 60 Q 180 110 130 140" fill="none" stroke="#5E6B8C" stroke-width="8" opacity="0.7"/>
  </g>
`);

await sharp(Buffer.from(body), { density: 150 }).jpeg({ quality: 92, channels: 3 }).toFile(`${outDir}/about-hero.jpg`);
console.log('wrote public/about-hero.jpg');
