# Greater Mt. Olive AME Zion Church Website

https://wglewis0721.github.io/gme-church-website/

Official website for Greater Mt. Olive AME Zion Church in Hayneville, AL — *Rooted in Faith. Growing in Grace. Serving in Love.*

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)**
- **[TypeScript 5](https://www.typescriptlang.org/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (via PostCSS)
- **ESLint 9** with `eslint-config-next`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
gme-church-website/
├── public/                  # Static assets (SVGs, favicon)
├── src/
│   ├── app/                 # Next.js App Router pages & root layout
│   │   ├── about/           # About page
│   │   ├── archives/        # Sermon archives page
│   │   ├── give/            # Giving page
│   │   ├── live/            # Live stream page
│   │   ├── globals.css      # Global styles, Tailwind theme, design tokens
│   │   ├── layout.tsx       # Root layout (NavBar, Footer, metadata)
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Button (primary, secondary, ghost variants)
│   │   ├── Footer.tsx       # Site footer
│   │   ├── GalleryGrid.tsx  # Photo gallery grid
│   │   ├── InfoCard.tsx     # Info/stat card
│   │   ├── NavBar.tsx       # Sticky navigation with mobile menu
│   │   ├── SectionHeader.tsx # Section eyebrow/title/subtitle
│   │   ├── SermonCard.tsx   # Sermon listing card
│   │   └── VideoEmbed.tsx   # YouTube video embed
│   └── data/                # Static data and site configuration
│       ├── archives.ts      # Sermon archive entries
│       ├── gallery.ts       # Gallery image data
│       └── siteConfig.ts    # Church info, service times, social links
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
└── postcss.config.mjs       # PostCSS / Tailwind configuration
```

## Design System

Colors and fonts are defined as CSS custom properties in `src/app/globals.css` using Tailwind v4's `@theme` block:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-purple-primary` | `#5B2C83` | Primary brand purple |
| `--color-purple-deep` | `#2B0F3A` | Dark backgrounds, button text |
| `--color-purple-light` | `#7B3DB3` | Hover states |
| `--color-gold` | `#D4AF37` | Accent / CTA buttons |
| `--color-gold-dark` | `#B8960C` | Gold hover |
| `--color-gold-light` | `#E8CC6A` | Light gold accents |
| `--color-silver` | `#C0C0C0` | Secondary text |

Reusable Tailwind component classes (`btn-primary`, `btn-secondary`, `btn-ghost`, `card-shadow`, `section-padding`, `container-main`) are declared in `globals.css` under `@layer components`.

## Site Configuration

All church-specific content (name, address, service times, social links, giving info, live stream channel) is centralized in `src/data/siteConfig.ts`. Update that file to change church details site-wide.
