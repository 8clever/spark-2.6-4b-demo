# Agentic Fashion

**A responsive fashion storefront built for HackAstroN as a demo of AI-assisted development with Spark-X2.6-4B.**

Agentic Fashion explores how an AI coding workflow can turn a high-level brief into a cohesive, multi-page e-commerce frontend. The result is a modern fashion catalog with shared styling, product data, category navigation, and responsive layouts.

## Features

- **Homepage** with a hero section, featured products, and category navigation.
- **Product catalog** with a complete listing of the demo collection.
- **Category pages** for Outerwear, Apparel, Accessories, and Footwear.
- **Product detail pages** with descriptions, pricing, sale prices, badges, and related products.
- **Sale page** with discount listings and collection savings statistics.
- **About page** describing the concept and design approach.
- **Responsive layout** designed for desktop and mobile screens.
- **Shared UI** including site navigation, product cards, and a consistent footer.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage and featured products |
| `/shop` | Full product catalog |
| `/sale` | Products currently marked as on sale |
| `/products/Outerwear` | Category listing (other categories are available too) |
| `/products/aurora-overcoat` | Example product detail page (other products are available too) |
| `/about` | About the project |

## Tech Stack

- [Astro](https://astro.build/) for the site and file-based routing
- TypeScript for product data and page logic
- CSS for shared styling and responsive layouts
- [Bun](https://bun.sh/) for package management and local development

## The Secret Sauce: A Custom Harness

The key to this project was not just the model itself, but a **custom harness** built around it. The harness made it possible to turn a high-level brief into a cohesive, multi-page storefront while working within a compact local setup.

Instead of relying on a cloud coding model, the project was developed locally with Spark-X2.6-4B Q8. The custom harness was the enabling layer that made this workflow practical.

### Local Model Setup

- **Model:** Spark-X2.6-4B Q8
- **VRAM:** 6 GB
- **Observed generation speed:** approximately 10–30 tokens per second
- **Context window:** 56K tokens
- **Inference:** local

These are the setup and performance figures used during development of this demo.

## Run Locally

### Requirements

- [Bun](https://bun.sh/)
- Node.js `>=22.23.4` (as specified in `package.json`)

### Setup

```bash
git clone https://github.com/8clever/spark-2.6-4b-demo.git
cd spark-2.6-4b-demo/magenta-phase
bun install
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production build

```bash
bun run build
bun run preview
```

The static production output is generated in `magenta-phase/dist/`.

## Project Structure

```text
spark-2.6-4b-demo/
├── README.md
└── magenta-phase/
    ├── public/              # Static assets and product images
    ├── src/
    │   ├── assets/          # Local assets and fonts
    │   ├── components/      # Shared UI components
    │   ├── layouts/         # Shared page layout
    │   ├── pages/           # Astro routes
    │   ├── styles/          # Global and storefront styles
    │   └── consts.ts        # Product catalog and category data
    ├── astro.config.mjs
    └── package.json
```

## Project Scope

This repository is a frontend demo. The product catalog is defined locally in `src/consts.ts`; a backend, persistent cart, user accounts, and payment processing are not part of the current implementation.

## Hackathon Context

Built for **HackAstroN** to demonstrate what a small local coding model can achieve when paired with a **custom harness**. The storefront was developed locally with **Spark-X2.6-4B Q8** on **6 GB of VRAM**, at an observed generation speed of **10–30 tokens per second** and a **56K-token context window**.
