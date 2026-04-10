# Mappls Nexus

A production-grade interactive business case dashboard built with Next.js 14 App Router, Tailwind CSS, Recharts, and Framer Motion.

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — dashboard sections and chart components
- `components/charts/` — reusable Recharts chart visualizations
- `lib/data.ts` — all hardcoded revenue, competitor, persona and roadmap data

## Key features

- Dark theme with glassmorphism styling
- Sticky navigation and section scroll tracking
- Full pitch deck mode via Hackathon slide toggle
- Revenue scenario toggle and interactive charting
- Print/PDF-friendly layout with `window.print()` support
- Deployment ready for Vercel

## Setup

Make sure Node.js and npm are installed.

```bash
cd mappls-nexus
npm install
npm run dev
```

## Note

If `npm` is not recognized in your terminal, install Node.js from https://nodejs.org or use a terminal session with Node available.
