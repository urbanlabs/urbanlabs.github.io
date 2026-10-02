import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const people = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    photo: z.string(),
    intro: z.array(z.string()),
    serviceApproach: z.array(z.string()),
    socialLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
    skills: z.array(
      z.object({
        category: z.string(),
        description: z.string(),
      }),
    ),
    publications: z.array(
      z.object({
        title: z.string(),
        href: z.string(),
      }),
    ),
    presentations: z.array(
      z.object({
        title: z.string(),
        venue: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    whyItMatters: z.string(),
    clients: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/clients" }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    organizations: z.array(
      z.object({
        name: z.string(),
        href: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { people, projects, clients };
