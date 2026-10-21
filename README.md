# thomasbeukema.me

Personal CV and blog for Thomas Beukema. Built with [Hugo](https://gohugo.io/), multilingual (NL / EN / FR), with a New York Times–inspired theme. Printing the CV homepage produces a clean A4 PDF.

## Requirements

- [Hugo Extended](https://gohugo.io/installation/) 0.120+ (`brew install hugo` on macOS)

## Develop

```bash
hugo server
```

Open http://localhost:1313/

| Language | Home (CV) | Blog |
|----------|-----------|------|
| Nederlands (default) | http://localhost:1313/ | http://localhost:1313/blog/ |
| English | http://localhost:1313/en/ | http://localhost:1313/en/blog/ |
| Français | http://localhost:1313/fr/ | http://localhost:1313/fr/blog/ |

## Export CV as PDF

1. Open the CV homepage in the language you want (`/`, `/en/`, or `/fr/`).
2. Use the browser **Print** dialog (⌘P / Ctrl+P).
3. Choose **Save as PDF**, paper size **A4**.
4. Disable headers/footers in the print dialog if your browser adds them.

Navigation, language switcher, and blog teasers are hidden in print. Contact details (including phone) appear on the printed CV.

## Edit the CV

Update the locale files under `data/resume/`:

- `data/resume/nl.yaml`
- `data/resume/en.yaml`
- `data/resume/fr.yaml`


## Add a blog post

```bash
hugo new content content/nl/blog/my-post.md
hugo new content content/en/blog/my-post.md
hugo new content content/fr/blog/my-post.md
```

Use the same `translationKey` in front matter so the language switcher links translations together.

## Build for production

```bash
hugo
```

Output is written to `public/` (gitignored; CI builds this on deploy).

## Deploy to GitHub Pages

Pushes to `main` run [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml), which builds with Hugo and deploys via GitHub Actions.

1. In the repo: **Settings → Pages → Build and deployment** → Source: **GitHub Actions**
2. Push to `main` (or run the workflow manually under **Actions**)
3. Set the custom domain to `thomasbeukema.me` in Pages settings if needed (`static/CNAME` is included in the build)
