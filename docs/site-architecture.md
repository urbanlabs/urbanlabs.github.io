# UrbanLabs Astro Architecture

## Recommendation

Use Astro as a fully static site with Tailwind CSS and typed content collections. This keeps the site lightweight, easy to maintain, and modern without introducing framework complexity that does not serve the current scope.

## Content locations

- `src/pages/`
  Route files only. Keep page composition here and avoid storing large content blobs in route files.
- `src/layouts/`
  Shared document shell and future page-level layout wrappers.
- `src/components/`
  Reusable UI sections once we start design work.
- `src/styles/`
  Global Tailwind entrypoint plus any future design tokens or utilities.
- `src/content/pages/home.mdx`
  Primary homepage content source. Most editable copy now lives in this single MDX file, including hero text, motivations, services, profile, clients, talks, and contact details.

## Why this structure

- Copy is separated from layout, so rewriting the site does not require code edits in multiple places.
- Homepage content now has one primary editing surface instead of being split across several JSON files.
- MDX preserves structured frontmatter for repeatable UI sections while still giving you a markdown-based authoring workflow.
- The structure is ready for richer pages later, including case studies, essays, or talks, without reworking the entire site.

## Suggested next content additions

- `src/content/caseStudies/`
  If you want 2-4 stronger project stories instead of a longer client list.
- `src/content/testimonials/`
  If you decide to add endorsements or quoted feedback.
- `src/content/notes/`
  If you later want short writing or updates without committing to a full blog.
