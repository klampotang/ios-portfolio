# iOS Engineer Portfolio (Astro)

Minimal portfolio site for a senior iOS engineer, designed for recruiter and hiring-manager readability.

## Local Development

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build:
   - `npm run build`

## Customize Content

- Main page: `src/pages/index.astro`
- Case studies: `src/pages/case-studies/*.md`
- Styling: `src/styles/global.css`

Update placeholders:
- `your.email@example.com`
- `your-linkedin`
- `your-github-username`

## GitHub Pages Deployment

### 1) Create repository
Create a repo (for example `ios-portfolio`) and push this project.

### 2) Set Astro site URL
Update `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  base: "/ios-portfolio"
});
```

If deploying to a user/org root repo named `YOUR_GITHUB_USERNAME.github.io`, omit `base`.

### 3) Add GitHub Actions workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 4) Enable Pages in repository settings
Set source to "GitHub Actions".
