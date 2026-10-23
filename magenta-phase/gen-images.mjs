// Generates stylized, cohesive product illustrations for the Agentic Fashion catalog.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'public', 'products');
mkdirSync(outDir, { recursive: true });

const W = 1000;
const H = 1250;

const defs = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#F4F1EA"/>
    <stop offset="1" stop-color="#E9E4D8"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.42" r="0.5">
    <stop offset="0" stop-color="#9D6CF3" stop-opacity="0.55"/>
    <stop offset="0.55" stop-color="#9D6CF3" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#9D6CF3" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#8B7BA8"/>
    <stop offset="1" stop-color="#6C4BD1"/>
  </linearGradient>
  <linearGradient id="f2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5E6B8C"/>
    <stop offset="1" stop-color="#3E4A63"/>
  </linearGradient>
  <linearGradient id="f3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7E9B6E"/>
    <stop offset="1" stop-color="#5E7A52"/>
  </linearGradient>
  <linearGradient id="f4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6E5E4E"/>
    <stop offset="1" stop-color="#4A3F34"/>
  </linearGradient>
  <linearGradient id="f5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3F4B5A"/>
    <stop offset="1" stop-color="#2B3340"/>
  </linearGradient>
</defs>`;

const svg = (inner, g) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${defs}
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="${W / 2}" cy="${H * 0.38}" r="${W * 0.62}" fill="url(#glow)"/>
  <ellipse cx="${W / 2}" cy="${H - 120}" rx="${W * 0.34}" ry="${58}" fill="#1A1714" opacity="0.16"/>
  <g transform="translate(${W / 2 - 130}, ${H * 0.44})">
    ${inner}
  </g>
</svg>`;

const products = [
	{
		id: 'aurora-overcoat',
		file: 'aurora-overcoat.svg',
		color: 'f1',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -170 30 L 170 30 L 150 200 L -150 200 Z" fill="url(#f1)" stroke="#4A3580" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -150 200 L -132 230 L -132 250 L 132 250 L 132 230 L 150 200 L 150 340 L -150 340 Z" fill="url(#f2)" stroke="#3E4A63" stroke-opacity="0.45" stroke-width="3"/>
			    <path d="M -132 250 L -120 262 L -120 290 L 120 290 L 120 262 L 132 250" fill="none" stroke="#4A3580" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -130 300 L 130 300 L 150 360 L -150 360 Z" fill="url(#f1)" opacity="0.7"/>
			  </g>
			`);
		},
	},
	{
		id: 'lumen-sneaker',
		file: 'lumen-sneaker.svg',
		color: 'f2',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -150 120 Q -168 90 -132 60 L -96 56 Q -80 96 -60 96 L 60 96 Q 80 96 96 56 L 132 60 Q 168 90 150 120 Z" fill="url(#f2)" stroke="#2E3850" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -96 56 L 96 56 L 60 96 L -60 96 Z" fill="#2B3340" opacity="0.6"/>
			    <path d="M -150 120 Q -168 90 -132 60" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.6"/>
			    <path d="M 150 120 Q 168 90 132 60" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.6"/>
			    <path d="M -150 120 Q -168 90 -132 60 L -132 52 Q -132 84 -96 84 L 96 84 Q 132 84 132 52 L 132 60" fill="url(#f2)"/>
			    <path d="M -150 120 Q -168 90 -132 60 L -132 52 Q -132 84 -96 84 L 96 84 Q 132 84 132 52 L 132 60" fill="none" stroke="#5E6B8C" stroke-width="2" opacity="0.4"/>
			    <path d="M -150 120 Q -168 90 -132 60 L -132 52 Q -132 84 -96 84 L 96 84 Q 132 84 132 52 L 132 60" fill="none"/>
			    <path d="M -150 120 Q -168 90 -132 60 L -132 52 Q -132 84 -96 84 L 96 84 Q 132 84 132 52 L 132 60" fill="url(#f2)"/>
			    <path d="M -150 120 Q -168 90 -132 60" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.6"/>
			    <path d="M 150 120 Q 168 90 132 60" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.6"/>
			    <path d="M -150 120 Q -168 90 -132 60 L -132 52 Q -132 84 -96 84 L 96 84 Q 132 84 132 52 L 132 60" fill="url(#f2)" opacity="0.55"/>
			  </g>
			`);
		},
	},
	{
		id: 'ember-denim',
		file: 'ember-denim.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -160 30 L 160 30 L 140 170 L -140 170 Z" fill="url(#f4)" stroke="#3A2E26" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -140 170 L -120 220 L 120 220 L 140 170 Z" fill="url(#f3)" stroke="#3F5232" stroke-opacity="0.4" stroke-width="3"/>
			    <path d="M -120 220 L -120 290 L 120 290 L 120 220" fill="url(#f3)" opacity="0.8"/>
			    <path d="M -150 40 L 150 40 L 150 320 L -150 320 Z" fill="url(#f4)"/>
			    <path d="M -150 40 L -120 10 L 120 10 L 150 40 Z" fill="url(#f5)" opacity="0.45"/>
			  </g>
			`);
		},
	},
	{
		id: 'nimbus-tote',
		file: 'nimbus-tote.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -150 120 L 150 120 L 130 300 L -130 300 Z" fill="url(#f3)" stroke="#4A6339" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -130 300 L -110 250 L 110 250 L 130 300 Z" fill="url(#f5)" opacity="0.5"/>
			    <path d="M -115 250 Q 0 290 115 250 L 115 300 L -115 300 Z" fill="url(#f5)"/>
			    <path d="M -130 120 Q -200 90 -200 50 Q -200 110 -130 120" fill="url(#f5)" opacity="0.7"/>
			    <path d="M 130 120 Q 200 90 200 50 Q 200 110 130 120" fill="url(#f5)" opacity="0.7"/>
			    <path d="M -200 50 Q -130 120 0 130 Q 130 120 200 50" fill="url(#f3)" opacity="0.6"/>
			  </g>
			`);
		},
	},
	{
		id: 'violet-knit',
		file: 'violet-knit.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -150 110 Q -150 30 -90 20 L 90 20 Q 150 30 150 110 L 120 230 Q 60 260 60 320 L -60 320 Q -60 260 -120 230 Z" fill="url(#f1)" stroke="#4A3580" stroke-opacity="0.45" stroke-width="3"/>
			    <path d="M -150 110 Q -150 30 -90 20" fill="none" stroke="#4A3580" stroke-opacity="0.4" stroke-width="4"/>
			    <path d="M 150 110 Q 150 30 90 20" fill="none" stroke="#4A3580" stroke-opacity="0.4" stroke-width="4"/>
			    <path d="M -90 20 Q 0 0 90 20" fill="none" stroke="#4A3580" stroke-opacity="0.4" stroke-width="3"/>
			    <path d="M -120 230 Q 0 260 120 230 L 120 320 Q 0 330 -120 320 Z" fill="url(#f1)" opacity="0.92"/>
			  </g>
			`);
		},
	},
	{
		id: 'solstice-scarf',
		file: 'solstice-scarf.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -180 200 L 180 200 L 150 420 L -150 420 Z" fill="url(#f3)" stroke="#4A6339" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -150 420 L -120 380 L 120 380 L 150 420" fill="url(#f5)" opacity="0.5"/>
			    <path d="M -180 200 Q -200 160 -160 150 L 160 150 Q 200 160 180 200" fill="url(#f3)"/>
			    <path d="M -180 200 Q -210 230 -180 250" fill="none" stroke="#4A6339" stroke-opacity="0.35" stroke-width="2"/>
			    <path d="M 180 200 Q 210 230 180 250" fill="none" stroke="#4A6339" stroke-opacity="0.35" stroke-width="2"/>
			    <path d="M -150 380 L 150 380 L 150 420 L -150 420 Z" fill="url(#f5)" opacity="0.4"/>
			  </g>
			`);
		},
	},
	{
		id: 'atlas-jeans',
		file: 'atlas-jeans.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -160 100 Q -168 140 -150 230 L -120 470 Q -100 500 -70 490 L 70 490 Q 100 500 120 470 L 150 230 Q 168 140 160 100 Z" fill="url(#f4)" stroke="#3A2E26" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -120 230 Q -120 200 -100 190 M 120 230 Q 120 200 100 190" fill="none" stroke="#3A2E26" stroke-opacity="0.4" stroke-width="3"/>
			    <path d="M -150 100 L 150 100 L 150 230 L -150 230 Z" fill="url(#f4)" opacity="0.7"/>
			    <path d="M -150 230 L -120 470 M 150 230 L 120 470" fill="none" stroke="#3A2E26" stroke-opacity="0.35" stroke-width="2"/>
			    <path d="M -70 490 L 70 490 L 120 470 L -120 470 Z" fill="#3A2E26" opacity="0.5"/>
			  </g>
			`);
		},
	},
	{
		id: 'moss-boots',
		file: 'moss-boots.svg',
		draw: (g) => {
			g.append(`
			  <g>
			    <path d="M -160 110 Q -180 100 -170 50 L -100 40 Q -90 100 -60 90 L 60 90 Q 90 100 100 40 L 170 50 Q 180 100 160 110 Z" fill="url(#f5)" stroke="#242E3A" stroke-opacity="0.5" stroke-width="3"/>
			    <path d="M -160 110 L -150 180 Q -130 230 -100 240 L 100 240 Q 130 230 150 180 L 160 110 Z" fill="url(#f5)" opacity="0.95"/>
			    <path d="M -100 40 L -90 100 L -60 90" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.5"/>
			    <path d="M 100 40 L 90 100 L 60 90" fill="none" stroke="#5E6B8C" stroke-width="6" opacity="0.5"/>
			    <path d="M -100 240 L 100 240 L 160 110 L -160 110 Z" fill="#1F2733" opacity="0.55"/>
			  </g>
			`);
		},
	},
];

// A minimal stand-in for a DOM SVG element that supports .append().
const g = {
	append: (html) => {
		return html;
	},
};

const order = [
	'aurora-overcoat', 'lumen-sneaker', 'ember-denim', 'nimbus-tote',
	'violet-knit', 'solstice-scarf', 'atlas-jeans', 'moss-boots',
];

for (const key of order) {
	const p = products.find((x) => x.id === key);
	const body = `
	  ${svg(`<g>${p.draw(g)}</g>`, g)}
	`;
	const path = join(outDir, p.file);
	await sharp(Buffer.from(body), { density: 150 }).jpeg({ quality: 92, channels: 3 }).toFile(path);
	console.log('wrote', p.file);
}
console.log('done');
