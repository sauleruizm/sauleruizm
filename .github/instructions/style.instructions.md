# Style & Styling Conventions

## CSS Architecture
- **CSS Modules only** for component styles in `src/components/` — class names are consumed as JS object properties (`styles.myClass`), never as raw strings in JSX.
- Since CSS Modules auto-mangle class names at build time, BEM naming is redundant and must **not** be used. Use concise camelCase class names (e.g. `cardTitle`, `navList`).
- Global theme styles live in `src/styles/themes.css` and are toggled via `data-theme` on the `<html>` element (e.g. `data-theme="dark"`).
- Component styles must **never** hard-code color values; reference only CSS custom properties (`var(--...)`) defined in `themes.css` so theme switching applies automatically.
- Define global color variables in `themes.css` — never scatter raw color values across component modules.
- Keep component styles modular and avoid global overrides.
- Avoid inline styles; prefer CSS classes.
- Use CSS variables for theme tokens exclusively — no runtime CSS-in-JS, no Tailwind, no Sass.

## Third-Party Libraries
- If a third-party UI library is in use, wrap its components in a local CSS Module using the `:global()` selector to override styles — never use inline styles or global overrides.

## Accessibility & Responsiveness
- Ensure accessibility by using semantic HTML and ARIA attributes where necessary.
- Follow a mobile-first approach. Use responsive breakpoints: sm (640px), md (768px), lg (1024px), xlg (1280px).