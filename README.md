# UrbanLabs website

The source for [urbanlabs.io](https://urbanlabs.io). It's a static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), and GitHub Pages hosts it.

## Run it locally

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321. The page reloads when you save a file.

Other commands:

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm run build`   | Builds the production site into `dist/`                         |
| `npm run preview` | Serves the built `dist/` folder, to check before you deploy     |
| `npm run check`   | Type-checks the pages and validates content against its schemas |

## Deploy

Every push to `master` deploys automatically. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds the site and publishes it to urbanlabs.io, usually in about a minute.

1. Run `npm run build` (or `npm run check`) locally to catch errors early.
2. Merge or push to `master`.
3. Watch the run under the repository's **Actions** tab. When it turns green, the new site is live.

To redeploy without changing anything, open **Actions → Deploy to GitHub Pages → Run workflow**.

### One-time repository settings (already done)

- **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**. If it's set to "Deploy from a branch", GitHub tries to build the repo with Jekyll and the deploy breaks.
- **Settings → Pages → Custom domain** is `urbanlabs.io`, with **Enforce HTTPS** on. `public/CNAME` holds the same domain, so keep the two in sync.
- DNS for `urbanlabs.io` points at GitHub Pages, as described in [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### If a deploy fails

Open the failed run in **Actions** and read the "Install, build and upload the site" step. Most failures are content errors, such as a missing frontmatter field or a broken image path. `npm run check` reports the same errors locally.

## Editing content

Copy lives in Markdown/MDX under `src/content/`, separate from layout code:

| Path                            | What it controls                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------------------- |
| `src/content/home/*.mdx`        | One file per homepage section: hero, name, vision map, services, hands-on work, about, contact |
| `src/content/clients/home.yaml` | "Who we work with" organization list                                                           |
| `src/content/projects/*.mdx`    | Project profiles at `/projects/<file-name>/`                                                   |
| `src/content/experiences/*.mdx` | Experience profiles at `/experience/<file-name>/`                                              |

Project and experience frontmatter is validated by the schemas in `src/content.config.ts`.

The vision map in `src/content/home/vision.mdx` has two looks. Set `style: chalkboard` for white marker on dark green, or `style: kraft` for blue crayon on construction paper.

## Code layout

```
src/
  layouts/BaseLayout.astro   <head>, fonts, favicons, social tags, shared SVG texture filters
  layouts/SiteLayout.astro   Header, dot-grid paper, contact band, back-to-top: wraps every page
  components/site/           One component per homepage section, plus ProfilePage / ProfileList
  pages/                     Routes: index, projects/, experience/
  styles/urbanlabs-theme.css Design tokens (colors, shadows) from the UrbanLabs design system
  styles/global.css          Tailwind setup, base type, paper textures, shared utilities
public/                      Copied as-is: favicons, social image (og-image.jpg), CNAME
```

Shared type styles are Tailwind utilities defined in `global.css`: `page-width`, `page-title`, `section-heading`, `lead` and `prose-body`. Prefer these, plus the theme colors (`text-sky-deep`, `bg-meadow-dark` and so on), over one-off values.

The favicon (`public/favicon.svg`) is a stop from the homepage transit map: a white ring with a Meadow Medium fill, on a Sky Deep tile. `apple-touch-icon.png`, `favicon-32.png` and the 1200×630 `og-image.jpg` social card are PNG/JPEG versions of the same brand elements.
