// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://4-days-workweek-production.up.railway.app',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
});
