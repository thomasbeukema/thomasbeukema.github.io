# AGENTS.md — thomasbeukema.me

Richtlijnen voor AI-agents en contributors. Doel: sitekwaliteit én tekstkwaliteit vasthouden.

## Project

Persoonlijke CV- en essaysite van Thomas Beukema (`https://thomasbeukema.me/`). Hugo Extended + theme `nyt-cv`. Talen: **NL** (default, geen subpad), **EN** (`/en/`), **FR** (`/fr/`).

Stem: engineering leadership, public cloud, product- en platformstrategie. Essayistisch en scherp — geen tutorial, geen marketingbrochure.

## Architectuur — waar edit je wat

| Laag | Pad | Regel |
|------|-----|--------|
| Blog / pagina’s | `content/{nl,en,fr}/` | Altijd drie talen, zelfde slug + `translationKey` |
| CV-inhoud | `data/resume/{nl,en,fr}.yaml` | CV-proza leeft hier, niet in Markdown |
| UI-labels | `i18n/{nl,en,fr}.toml` | Geen Engelse lekken in NL/FR |
| Menu’s / tagline | `hugo.toml` `[languages.*]` | Sync bij nav- of tagline-wijzigingen |
| Theme / UI | `themes/nyt-cv/` | Layouts, CSS, motion |
| Root layouts | `layouts/` | Alleen sitemap-overrides |
| Assets | `assets/images/`, `static/` | Portrait via Hugo-pipeline; CNAME/print-assets in `static/` |

### Pagina’s

- **Home** (`content/*/ _index.md`): intro + laatste posts. Body leeg; intro komt uit resume-YAML.
- **CV** (`content/*/cv.md`, `layout: "cv"`): printbare A4-CV. Bewerk inhoud in `data/resume/`.
- **Blog**: essays onder `content/*/blog/`.

Print de CV vanaf `/cv` (niet vanaf home). Navigatie, language switcher en blog-teasers zijn `.no-print-chrome`.

### Commando’s

```bash
hugo server          # http://localhost:1313/
hugo                 # build naar public/
hugo new content content/nl/blog/slug.md
hugo new content content/en/blog/slug.md
hugo new content content/fr/blog/slug.md
```

Hugo **Extended** is verplicht (image pipeline). CI pin: Hugo Extended 0.168.0.

## Tekstkwaliteit

### Blog

- Register: eerste persoon / “wij”-essay. Probleem → organisatorische implicatie → concreet advies.
- Korte alinea’s. H2’s zijn stellingen (“Meer pull requests betekent nog geen hogere snelheid”), geen generieke labels (“Introductie”, “Conclusie”).
- Mirror de toon van bestaande posts, o.a. `content/nl/blog/agentic-ai-developer-team.md`.

**Vermijd:** AI-clichés, buzzwordlijsten zonder argument, tutorial-toon, emoji, clickbait, LinkedIn-hype.

### CV (`data/resume/`)

- Feitelijk en resultaatgericht.
- NL/EN: eindige werkwoorden in bullets.
- FR: bestaande infinitiefstijl mag blijven; mix geen registers binnen één locale.
- Skills: industriejargon mag Engels blijven (*landing zones*, *Engineering leadership*); UI-labels en lopende tekst wel lokaliseren.

### Front matter

Verplicht op pagina’s: `title`, `description`, `translationKey`.

Posts ook: `date`, `draft`, `subject`, `summary`.

- `description` en `summary` zijn echte meta-teksten — geen herhaling van de titel.
- `subject` staat niet in `archetypes/default.md`; vul het handmatig in (bijv. `"Platformstrategie & engineering leadership"`).
- Nieuwe `translationKey`: descriptief en gelijk aan de slug. Kopieer niet het legacy-key `welcome-post`.

## Meertaligheid — parity

1. Wijziging in één taal ⇒ dezelfde wijziging in de andere twee (padspiegel + zelfde `translationKey`).
2. Vertalingen delen H2-structuur en argumentatie; geen machinevertaling-toon.
3. Industriële termen mogen gelijk blijven; UI-strings en blogindex moeten native zijn.
4. Contactgegevens (`email`, LinkedIn, phone) synchroon houden in alle drie YAML-bestanden én in `hugo.toml` `[params]` / Person-schema waar van toepassing.
5. Nieuwe i18n-key ⇒ alle drie `i18n/*.toml` bijwerken.
6. Nieuwe blogpost:

```bash
hugo new content content/nl/blog/my-post.md
hugo new content content/en/blog/my-post.md
hugo new content content/fr/blog/my-post.md
```

Zelfde bestandsnaam, zelfde `translationKey`, `draft: false` pas als alle drie talen klaar zijn.

## Sitekwaliteit — design, SEO, a11y, print

### Design

Behoud de NYT-achtige editorial look:

- Warm paper `#fff1e5`, ink `#1c1410`, wine accent `#6b2130`
- Fonts: DM Serif Display, Source Serif 4, IBM Plex Mono
- Hairlines, mono kickers, noise overlay, sepia-portret
- Motion via bestaande `.anim-rise` / `.reveal` + `themes/nyt-cv/assets/js/motion.js`; respecteer `prefers-reduced-motion`

**Niet doen:** generieke SaaS-look, purple gradients, card-grids, pill-clusters, glow-effecten, “moderniseren” weg van de editorial stijl.

Theme-edits horen in `themes/nyt-cv/` (CSS, layouts, partials). Zet geen nieuwe page-templates in root `layouts/` (behalve sitemaps).

### SEO

- Vul altijd `description` (en op posts `summary`).
- Laat hreflang/canonical/OG via `partials/seo.html` intact.
- Rol- of organisatiewijziging ⇒ update Person-schema in `themes/nyt-cv/layouts/partials/schema.html`.

### Toegankelijkheid

- Behoud `lang` op `<html>`, `aria-*` op nav/secties, alt-teksten, `.sr-only`.
- Nieuwe interactie alleen mét zichtbare focus-styles.
- Decoratieve SVG’s blijven `aria-hidden`.

### Print

- Printbare CV: `/cv` → A4 PDF via browserprint.
- Chrome met `.no-print-chrome` verbergen; print-contact (incl. telefoon) tonen via `print.css`.

## Definition of Done

Voor afronden van een wijziging:

1. `hugo` (of `hugo server`) bouwt zonder errors.
2. NL + EN + FR bestaan voor elke geraakte content-, CV- of i18n-wijziging.
3. `translationKey`s koppelen de taalvarianten correct.
4. Geen Engelse UI-lekken in NL/FR.
5. Blogtoon matcht bestaande essays; CV-bullets zijn consistent per locale.
6. Home en print-CV niet door elkaar gehaald; theme-/sitemap-grenzen gerespecteerd.

## Anti-patronen

- Alleen EN updaten “omdat de gebruiker Engels schreef”.
- CV-tekst in `content/*/cv.md` of home-Markdown zetten i.p.v. `data/resume/`.
- Page-templates toevoegen onder root `layouts/` i.p.v. het theme.
- Design vervangen door generieke AI-/SaaS-esthetiek.
- Teksten opschroeven met hype, emoji of clickbait.
- `draft: true` laten staan op een “klare” post, of één taal publiceren zonder de andere twee.
