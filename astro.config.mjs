// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://devgiudev.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
