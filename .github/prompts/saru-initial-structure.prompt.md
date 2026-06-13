---
description: "Generar la estructura inicial del sitio Saru: componentes, layout home, navbar, article cards, datos mock y temas."
name: "Saru: Estructura Inicial"
agent: "agent"
---

# Saru: Estructura Inicial del Sitio

Implementa la estructura base del sitio **Saru** (inspirado en CSS-Tricks pero con branding propio) en el proyecto actual.

## Convenciones a respetar

- React 19 + TypeScript + Vite (ESM).
- React Compiler activo → **NO** usar `useMemo`, `useCallback`, `React.memo`.
- CSS Modules (`*.module.css`) para todos los estilos de componente.
- Temas vía `data-theme` + CSS Custom Properties en `src/styles/themes.css`.
- Componentes funcionales con props tipadas (interfaces explícitas).
- Leer `copilot-instructions.md` para más detalles.

## Estructura de carpetas a generar

```
src/
├── components/           # Componentes globales de UI
│   ├── Navbar/
│   ├── ArticleCard/
│   └── Layout/
├── features/             # Módulos de la app
│   └── home/
│       ├── components/   # FeaturedArticle, LatestArticles
│       └── HomePage.tsx
├── hooks/                # Custom hooks globales (ya existe useTheme)
├── services/             # API clients y datos mock
│   ├── api.ts
│   └── mockData.ts
├── styles/
│   ├── themes.css        # Tokens de tema claro/oscuro
│   └── global.css        # Reset y estilos base
├── App.tsx
└── main.tsx
```

## Componentes a crear

### 1. Navbar (`src/components/Navbar/`)
- Branding "Saru" como texto logo.
- Items de navegación: **Articles**, **Videos**, **Almanac**, **Snippets**, **Newsletter**, **Guides**.
  - **NO** incluir "Jobs".
- Input de búsqueda con icono de lupa.
- Botón de toggle de tema (claro/oscuro) conectado a `useTheme`.
- Responsive: en mobile colapsar a menú hamburguesa.
- Fondo semitransparente o sólido con bordes.

### 2. ArticleCard (`src/components/ArticleCard/`)
- Props: `title`, `date`, `author`, `tag` (categoría), `excerpt`, `image?`, `href?`.
- Layout en tarjeta con borde redondeado, sombra suave.
- Badge de categoría arriba.
- Título, autor y fecha debajo.
- Diseño limpio, tipografía legible.

### 3. Layout (`src/components/Layout/`)
- Wrapper principal: `<Navbar />` + `<main>{children}</main>` + `<footer>`.
- Footer minimal con año actual, "© Saru".

### 4. FeaturedArticle (`src/features/home/components/`)
- Card principal destacada (tipo hero).
- Misma estructura que ArticleCard pero más grande, con extracto visible.
- Estilo similar al wireframe: tarjeta ancha con sombra prominente.

### 5. LatestArticles (`src/features/home/components/`)
- Título "Latest Articles" con línea decorativa.
- Grid de `ArticleCard` (2 columnas en desktop, 1 en mobile).

### 6. HomePage (`src/features/home/`)
- Página principal que compone `FeaturedArticle` + `LatestArticles`.

## Datos mock

En `src/services/mockData.ts` crear artículos de ejemplo:
1. **Featured:** "The Current State of Styling Selects in 2019" — Chris Coyier, Oct 28, 2019 — extracto sobre estilizar `<select>`.
2. **Latest 1:** "Another Stab at the Perfect CSS Pie Chart… Sans JavaScript!" — Antoine Villepreux, Jun 4, 2026 — tag: CHARTS DATA VISUALIZATION.
3. **Latest 2:** "Astro Markdown Component Utility for Any Framework" — Zell Liew, Jun 1, 2026 — tag: ASTRO MARKDOWN.

## Estilos y tema

- Actualizar `src/styles/themes.css` con tokens de color para Saru (paleta propia, no copiar de CSS-Tricks).
- Crear `src/styles/global.css` con reset básico y estilos base.
- La paleta debe tener: color primario, secundario, fondo, texto, acento, bordes.

## Comandos de verificación

```bash
pnpm build   # debe pasar sin errores TS
pnpm dev     # mostrar sitio con navbar, hero, latest articles
```
