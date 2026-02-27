# GitHub Copilot Instructions

## Project Overview

This is the official website for **Greater Mt. Olive AME Zion Church** (Hayneville, AL), built with Next.js 16 App Router, React 19, TypeScript 5, and Tailwind CSS v4.

## Repository Layout

```
src/
├── app/                  # Next.js App Router — one folder per route
│   ├── about/page.tsx    # /about
│   ├── archives/page.tsx # /archives — sermon archive listing
│   ├── give/page.tsx     # /give — giving/donations page
│   ├── live/page.tsx     # /live — live stream page
│   ├── globals.css       # Global styles, Tailwind @theme tokens, @layer components
│   ├── layout.tsx        # Root layout: wraps every page with <NavBar> and <Footer>
│   └── page.tsx          # Home page (/)
├── components/           # Shared, reusable UI components (no business logic)
│   ├── Button.tsx        # `<Button variant="primary|secondary|ghost">`
│   ├── ChurchIcon.tsx    # Small circular church icon used in list items / cards
│   ├── Footer.tsx        # Site-wide footer
│   ├── GalleryGrid.tsx   # Responsive photo grid
│   ├── InfoCard.tsx      # Stat/info card with icon, value, and label
│   ├── NavBar.tsx        # Sticky top nav; includes mobile hamburger menu
│   ├── SectionHeader.tsx # Eyebrow + heading + subtitle block used at section tops
│   ├── SermonCard.tsx    # Card for a single sermon (title, speaker, date, embed)
│   └── VideoEmbed.tsx    # Responsive YouTube iframe wrapper
└── data/                 # Static data files — no server-side fetching
    ├── archives.ts       # Array of sermon objects (title, date, speaker, youtubeId, …)
    ├── gallery.ts        # Array of gallery image objects (src, alt, caption)
    └── siteConfig.ts     # Single source of truth for church name, address,
                          # service times, social URLs, contact info, giving links
```

## Key Conventions

### TypeScript
- All files use `.tsx` (components/pages) or `.ts` (data/config).
- Prefer explicit prop interfaces defined inline or above the component.
- Use `export const` for data arrays and config objects; use `export default` for React components and Next.js pages.

### Tailwind CSS v4
- Do **not** edit `tailwind.config.ts` for design tokens. All custom colors, fonts, and spacing are declared as CSS custom properties inside the `@theme { … }` block in `src/app/globals.css`.
- Reusable utility class combos (e.g., `btn-primary`, `section-padding`, `container-main`) are declared in `@layer components { … }` in `globals.css`.
- Reference custom color tokens in JSX with the standard Tailwind class syntax: `bg-purple-primary`, `text-gold`, `border-purple-deep`, etc.

### Next.js App Router
- Every route lives in `src/app/<route>/page.tsx`. Create a new folder under `src/app/` for each new page.
- The root layout (`src/app/layout.tsx`) renders `<NavBar>` before `<main>{children}</main>` and `<Footer>` after — do not duplicate these in individual pages.
- Page-level `export const metadata` is preferred for SEO metadata on each route.
- Images from external sources (e.g., Unsplash) must be added to the `remotePatterns` array in `next.config.ts`.

### Components
- Keep components in `src/components/`. They should be presentational and receive all data via props.
- Do not import from `src/data/` inside components — pass data as props from the page instead.
- Use the existing `Button`, `ChurchIcon`, `SectionHeader`, `InfoCard`, `SermonCard`, and `VideoEmbed` components before creating new ones with similar functionality.

### Data & Configuration
- **Church-wide settings** (name, address, service times, social links, giving info, live stream channel ID) live in `src/data/siteConfig.ts`. Import `siteConfig` wherever these values are needed.
- **Sermon data** lives in `src/data/archives.ts` as a typed array. Add new sermons at the top of the array (newest first).
- **Gallery images** live in `src/data/gallery.ts`.

### Styling Patterns
- Use `container-main` (`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`) on section wrappers to maintain consistent page width.
- Use `section-padding` (`py-16 md:py-24`) on `<section>` elements for consistent vertical rhythm.
- Use `card-shadow` on card elements for consistent elevation styling.

## Design Tokens (Quick Reference)

| Token | Hex | Tailwind Class |
|---|---|---|
| Purple Primary | `#5B2C83` | `purple-primary` |
| Purple Deep | `#2B0F3A` | `purple-deep` |
| Purple Light | `#7B3DB3` | `purple-light` |
| Gold | `#D4AF37` | `gold` |
| Gold Dark | `#B8960C` | `gold-dark` |
| Gold Light | `#E8CC6A` | `gold-light` |
| Silver | `#C0C0C0` | `silver` |

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Serve production build
npm run lint     # Run ESLint
```
