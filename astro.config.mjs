import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  //Configurations to deploy to github pages
  site: 'https://fdaniel13s.is-a.dev'
  //base: '/portfolio',
});