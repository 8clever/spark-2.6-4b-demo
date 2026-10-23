// Global site data for the Agentic Fashion store.
// Import this from anywhere in the site via `import` keyword.

export const SITE_TITLE = 'Agentic Fashion';
export const SITE_DESCRIPTION =
	'Modern, AI-guided fashion — curated product listings that feel like they were made for you.';

// Product catalog data used by the product listing pages.
export interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	compareAtPrice?: number;
	category: string;
	image: string;
	badge?: string;
}

export const CATEGORIES = [
	'Outerwear',
	'Apparel',
	'Accessories',
	'Footwear',
] as const;

export const PRODUCTS: Product[] = [
	{
		id: 'aurora-overcoat',
		title: 'Aurora Overcoat',
		description:
			'A structured shell in soft, temperature-neutral wool. Built for layered layers, draped with confidence across seasons.',
		price: 428,
		compareAtPrice: 510,
		category: 'Outerwear',
		image: '/products/aurora-overcoat.jpg',
		badge: 'Bestseller',
	},
	{
		id: 'lumen-sneaker',
		title: 'Lumen Sneaker',
		description:
			'Minimalist leather sneaker with a soft, cushioned sole. The everyday step that keeps the look calm and intentional.',
		price: 168,
		compareAtPrice: 195,
		category: 'Footwear',
		image: '/products/lumen-sneaker.jpg',
		badge: 'New',
	},
	{
		id: 'ember-denim',
		title: 'Ember Denim Jacket',
		description:
			'Pre-shrunk selvedge denim with a relaxed fit. A versatile outer layer that pairs with anything from a tee to a tailored coat.',
		price: 246,
		category: 'Apparel',
		image: '/products/ember-denim.jpg',
	},
	{
		id: 'nimbus-bag',
		title: 'Nimbus Tote',
		description:
			'Hand-finished cotton tote with a padded sleeve. Built to hold a full day of essentials without losing their shape.',
		price: 84,
		compareAtPrice: 98,
		category: 'Accessories',
		image: '/products/nimbus-tote.jpg',
		badge: 'Sale',
	},
	{
		id: 'violet-knit',
		title: 'Violet Knit',
		description:
			'Soft merino-blend knit in a relaxed, draped silhouette. The foundation layer for layering with warmth and ease.',
		price: 132,
		category: 'Apparel',
		image: '/products/violet-knit.jpg',
		badge: 'Bestseller',
	},
	{
		id: 'solstice-scarf',
		title: 'Solstice Scarf',
		description:
			'Woven silk scarf in a durable, low-stretch weave. A one-size accent that shifts with the light and the mood.',
		price: 58,
		category: 'Accessories',
		image: '/products/solstice-scarf.jpg',
		badge: 'Sale',
	},
	{
		id: 'atlas-jeans',
		title: 'Atlas Tailoring Jeans',
		description:
			'High-rise tailoring jeans with a clean waistband and roomy hips. The foundation denim that holds a tailored shape.',
		price: 178,
		compareAtPrice: 205,
		category: 'Apparel',
		image: '/products/atlas-jeans.jpg',
	},
	{
		id: 'moss-boots',
		title: 'Moss Leather Boots',
		description:
			'Calf-leather boots with a roomy footbed and a low, stable heel. A grounded choice for the long days ahead.',
		price: 214,
		category: 'Footwear',
		image: '/products/moss-boots.jpg',
	},
];
