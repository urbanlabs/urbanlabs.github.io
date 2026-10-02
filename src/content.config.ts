import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({ label: z.string(), href: z.string() });

// Project and experience profiles share one shape; experiences add a period.
const profile = z.object({
  title: z.string(),
  summary: z.string(),
  role: z.string(),
  whyItMatters: z.string(),
  links: z.array(link),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: profile.extend({ clients: z.array(z.string()) }),
});

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experiences" }),
  schema: profile.extend({ period: z.string(), organizations: z.array(z.string()) }),
});

const clients = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/clients" }),
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    organizations: z.array(
      z.object({
        name: z.string(),
        note: z.string().optional(),
        href: z.string().optional(),
      }),
    ),
    others: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experiences, clients };
