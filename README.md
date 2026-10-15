# CampusPe landing page (React + Vite)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
- `src/App.jsx` – page composition
- `src/data/content.js` – all copy, tags, stats and list data
- `src/context/ToastContext.jsx` – `useToast()` for CTA feedback
- `src/hooks/useTilt.js` – hero card pointer tilt
- `src/components/ui/` – reusable primitives: `Button`, `Icon`, `Tag`, `Eyebrow`, `InfoRow`, `SplitSection`
- `src/components/sections/` – page sections and their sub-components
- `src/styles/global.css` – design tokens (`:root`), all component styles, responsive rules
- `src/assets/` – logo, partner strip, app screens, mockup and store badges
