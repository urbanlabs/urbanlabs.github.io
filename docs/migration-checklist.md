# UrbanLabs Migration Checklist

## Goal of this phase

Move the current Jekyll content into a clean Astro structure before we spend time on visual design. This lets us evaluate the information architecture and tighten the message with less friction.

## Already migrated

- Site title, tagline, and contact basics from `_config.yml`
- Legacy homepage sections from `_includes/header.html`, `_includes/passions.html`, `_includes/services.html`, `_includes/clients.html`, `_includes/contact.html`
- Principal profile material from `_data/team.yml`
- Existing public images copied into `public/img`
- Custom domain file copied into `public/CNAME`

## Needs content decisions

- Rewrite the homepage hero so it reflects the current UrbanLabs offer instead of the migration placeholder copy
- Decide whether the tagline stays `People. Places. Planet.` or becomes a supporting line instead of the main brand line
- Tighten the three service categories into clearer client-facing language
- Decide whether to keep a broad client list or replace part of it with 2-4 case-study style examples
- Decide which open-source and standards projects are still current enough to feature
- Trim and modernize the principal bio so it reads like a landing page, not a full CV
- Confirm the preferred public contact email
- Confirm whether Twitter should still appear anywhere

## Information to verify or refresh

- Current service offerings and ideal client types
- Current organizational affiliations and advisory roles
- Publications and talks worth surfacing today
- Any new flagship projects since the Jekyll site was last meaningfully updated
- Current geographic positioning and whether Seattle should remain explicit

## Design phase prerequisites

- Finalize the homepage narrative order
- Decide whether the site should stay one page or gain secondary pages such as `about`, `projects`, or `writing`
- Pick the visual direction
- Decide whether to incorporate external Tailwind component libraries such as Starwind directly or use them as references only

## Migration sequence

1. Rewrite and approve the homepage narrative.
2. Trim and update the service catalog.
3. Trim and update the profile and credentials sections.
4. Decide on social proof format: clients, case studies, testimonials, or a blend.
5. Start the visual design pass once the content model is stable.
