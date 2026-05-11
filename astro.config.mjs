// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://rob-raitch.github.io',
    base: process.env.GITHUB_ACTIONS ? '/creeksidedaze.com/' : '/',
});
