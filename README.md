# ok-dera.github.io

Personal site for Chidera Okosa, built with Astro and TypeScript.

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output goes to `dist/`.

## Type checking

```bash
npx astro check
```

## Deploy

Merging to `main` triggers the GitHub Actions deploy workflow, which builds the site and publishes it to GitHub Pages at [ok-dera.github.io](https://ok-dera.github.io).

Pull requests run CI (type check + build) automatically.
