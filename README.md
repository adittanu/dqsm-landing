# QSM Landing Page Clone

Visual + structural clone of [quizandsurveymaster.com](https://quizandsurveymaster.com) — built as a mini-project with **Vite + React + TypeScript + Tailwind CSS**.

## What's included

- **3 pages** routed via `react-router-dom`:
  - `/` — full homepage (hero, brand logos, demo grid, 3 feature rows, 6 features, themes, premium addons, reviews carousel, FAQ, CTA, newsletter, footer)
  - `/pricing` — 3 pricing tiers with monthly/yearly toggle, comparison table, FAQ
  - `/addons` — searchable + filterable addon catalog
- **Shared layout**: PromoBar, sticky Header, mobile drawer menu, mega-menu footer
- **Interactivity**: rotating hero word, multi-step quiz card, FAQ accordion, carousels (Swiper), mobile menu, addons filter & search, pricing toggle, newsletter form
- **Custom Tailwind theme** matching QSM brand colors (blue + purple gradients, dark navy)

## Tech

- Vite 5, React 18, TypeScript 5
- Tailwind CSS 3 with custom theme tokens
- `react-router-dom` v6
- `swiper` for carousels
- `lucide-react` for icons

## Run

```bash
cd mini-project
npm install     # already done if node_modules exists
npm run dev     # http://localhost:5173
```

Other scripts:

```bash
npm run build   # tsc + vite build, outputs to dist/
npm run preview # serve the production build
npm run lint    # eslint
```

## Project layout

```
src/
├── main.tsx, App.tsx, index.css
├── components/
│   ├── layout/      PromoBar, Header, Footer, MobileMenu, Layout
│   ├── sections/    Hero, BrandLogos, DemoGrid, FeatureRow, Features,
│   │                Themes, AddonsHighlight, Reviews, Faq, FooterCta
│   └── ui/          Button, SectionHeading, Accordion
├── pages/           Home, Pricing, Addons
├── data/            navigation, demos, features, reviews, faqs, pricing,
│                    addons, footer  (all hardcoded content)
├── hooks/           useMediaQuery, useRotator, useAccordion
└── types/           shared TS types
```

## Assets

All images (logos, illustrations, demo screenshots, icons) are downloaded from the live QSM site into `public/images/`. Replace with your own before any public deployment.

## Notes

- No backend; all actions are UI-only.
- No quiz scoring logic — the hero card is UI-only (prev/next through static questions).
- "Login" and external nav links open the original QSM site in a new tab.
