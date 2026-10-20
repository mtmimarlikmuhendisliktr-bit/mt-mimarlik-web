import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Ortak site adresi. Gerçek alan adı girildiğinde src/data/site.ts içinde güncelleyin.
const SITE_URL = 'https://www.example.com'; // TODO: gerçek alan adı

// Cloudflare Pages: statik çıktı (output: 'static'), ek adaptör gerekmez.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
