# Duelist — AI Security & Evaluation Platform

Production-ready frontend for the Duelist AI Security platform.

## Stack

- Vite 5
- React 18 + TypeScript
- Tailwind CSS 3
- React Router DOM 6

## Run Instructions

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Layout.tsx              # App shell wrapping Nav + Footer
    Nav.tsx                 # Fixed top nav with products dropdown
    Footer.tsx              # Site-wide footer
    ProductPageLayout.tsx   # Reusable product page template
  pages/
    Home.tsx                # Landing page with terminal hero, arch diagram, CTAs
    Products.tsx            # Products overview grid
    About.tsx               # About page
    Contact.tsx             # Contact / request access form
    products/
      RedTeaming.tsx
      ModelSecurity.tsx
      CodeScanning.tsx
      RuntimeMonitoring.tsx
      SyntheticData.tsx
      Consulting.tsx
  main.tsx
  App.tsx
  index.css
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products Overview |
| `/products/red-teaming` | Red Teaming & Evaluation |
| `/products/model-security` | Model Security |
| `/products/code-scanning` | Code Scanning |
| `/products/runtime-monitoring` | Runtime Monitoring |
| `/products/synthetic-data` | Synthetic Data |
| `/products/consulting` | Consulting |
| `/about` | About |
| `/contact` | Contact / Request Access |

## Design Notes

- Dark-first (`#080B0F` base) with acid green `#00FF88` as primary action color
- Fonts: Space Mono (display), JetBrains Mono (code/labels), DM Sans (body)
- No external UI libraries — pure Tailwind + React
- Animated terminal hero with staggered line reveal
- SVG platform architecture diagram (no external deps)
