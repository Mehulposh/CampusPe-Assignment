# CampusPe Landing Page

A responsive landing page for CampusPe, built from the Figma design with React and Vite. It connects students, colleges and employers, and includes a hero with interactive cards, an opportunity feed, a resume upload box, college and employer sections, an app-screens slider and a full footer.

## Tech stack

- React 18
- Vite 5
- Plain CSS (one global stylesheet with design tokens in `:root`)
- No UI library, no router, no state library

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
```

## Features

- **Responsive layout** from 1440px desktop down to mobile. Sections stack, the nav becomes a hamburger menu, and the floating hero chips hide on smaller screens.
- **Interactive CTAs.** Every button and link has hover, keyboard-focus and pressed states. Buttons without a destination show a short confirmation message.
- **Hero effects.** Cards lift and tilt toward the pointer, icons rotate on hover, the info chips drift gently, and two blurred background ellipses sit behind the hero.
- **Opportunity feed.** Filter tabs (All, Colleges, Jobs, Internships, Freelance, Part-time) update the list.
- **Resume upload.** Drag-and-drop or file picker, with checks for file type (PDF, DOC, DOCX) and size (10 MB maximum). Nothing is uploaded to a server.
- **App-screens slider.** Five phones arranged in a ring. Dots, clicking a side phone, swiping and the left and right arrow keys all rotate them. It auto-advances every 4 seconds, and pauses on hover, on focus, and when the user prefers reduced motion.
- **Accessibility.** Visible focus rings, ARIA labels on icon-only controls, keyboard support for the slider and `prefers-reduced-motion` support.

## Project structure

```
src/
  main.jsx                  entry point
  App.jsx                   page composition
  data/
    content.js              all copy, tags, stats, feed items, footer links, social links
  context/
    ToastContext.jsx        useToast() hook and the toast message
  hooks/
    useTilt.js              pointer tilt for hero cards
  components/
    ui/                     reusable building blocks
      Button.jsx            link or button CTA with hover/focus/active styles
      Icon.jsx              inline SVG icon set
      Tag.jsx               small coloured label, with optional icon or dot
      Eyebrow.jsx           pill label with a blue dot
      SplitSection.jsx      two-column section: copy on the left, content on the right
      InfoRow.jsx           numbered feature card with tags
    sections/               page sections and their sub-components
      Header.jsx
      Hero.jsx  HeroChips.jsx  HeroCard.jsx  StatsBar.jsx  PartnersStrip.jsx
      OpportunitySection.jsx  StepCard.jsx  OpportunityFeed.jsx  FeedItem.jsx
      ResumeUpload.jsx  FeatureStrip.jsx
      CollegesSection.jsx  EmployersSection.jsx
      AppShowcase.jsx       the app-screens slider
      DownloadApp.jsx  SupportCard.jsx
      CtaBar.jsx  Footer.jsx  FooterColumn.jsx
  styles/
    global.css              design tokens, component styles and responsive rules
  assets/
    logo.webp  partners.webp  mock.webp  gp.webp  as.webp   brand and partner images
    phones/                 the five app screens used by the slider
    logos/                  IIM, Google and Notion logos for the feed
    social/                 footer social icons
```

## How the code is organised

- **Content is separate from components.** To change any text, tag, stat, list item or link, edit `src/data/content.js`. Components only render what they are given.
- **Small, reusable components.** `Button`, `Tag`, `Icon`, `InfoRow` and `SplitSection` are used across several sections. For example, the Colleges and Employers sections are both `SplitSection` plus a list of `InfoRow`s.
- **CTA feedback.** `Button` accepts a `toast` prop. When set, clicking shows the message instead of navigating. To make a button a real link, pass `href` and remove `toast`.

## Customising

- **Colours.** Design tokens are in `:root` at the top of `src/styles/global.css` (`--brand`, `--brand-d`, `--soft`, `--ink` and others). The brand blue is `#0098FF`.
- **Fonts.** Inter (body), Roboto (section headings), Lora (hero card titles) and Caveat (handwritten note), loaded from Google Fonts in `index.html`.
- **Social links.** Add each profile URL in the `SOCIALS` list in `content.js`.
- **Hero background.** The two blurred ellipses are `.hero::before` and `.hero::after` in `global.css`. Figma's layer blur is about twice the CSS `blur()` value, so Figma 100 is `blur(50px)`.


## Browser support

Current versions of Chrome, Edge, Firefox and Safari. The page uses CSS `overflow: clip`, `clip-path` and `ResizeObserver`.
