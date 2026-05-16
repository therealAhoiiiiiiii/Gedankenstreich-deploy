import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://gedankenstreich.de',
  server: { host: true, port: 4321 },
});
