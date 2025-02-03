import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://OswaldLuna.io',
  base: 'My-Portfolio',
  integrations: [tailwind(), react()],
  build: {
    assets: '_astro'
  }
});