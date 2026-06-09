# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Hamburguesas Caseras" — landing page estática para una marca de hamburguesas caseras.

## Commands

```bash
npm run dev      # servidor local en localhost:5173
npm run build    # genera dist/ para producción
npm test         # ejecuta los 9 tests unitarios con Vitest
npm run preview  # previsualiza el build de producción
```

## Architecture

**Stack:** Vite + Bootstrap 5 + Vitest (JSDOM)

- [src/content.js](src/content.js) — única fuente de verdad para título, precio y rutas de imágenes. Toda modificación de contenido va aquí.
- [src/main.js](src/main.js) — importa Bootstrap CSS.
- [index.html](index.html) — 4 filas Bootstrap: logo, título, imagen destacada, precio.
- [tests/content.test.js](tests/content.test.js) — testea los valores exportados de `content.js`.

## CI/CD

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) — pipeline de 2 jobs:
1. **test**: corre `npm test`
2. **deploy**: si los tests pasan, hace `npm run build` y despliega `dist/` a GitHub Pages

Deploy solo ocurre en push a `main`/`master`. La URL pública es `https://javierveron.github.io/hamburguesas-caseras/`.

**Setup requerido (una sola vez):** En GitHub → Settings → Pages → Source → "GitHub Actions".

## Assets

- [images/logo.svg](images/logo.svg) — logo blanco sobre fondo transparente
- [images/hamburguesas-de-carne.jpg](images/hamburguesas-de-carne.jpg) — imagen destacada del producto
