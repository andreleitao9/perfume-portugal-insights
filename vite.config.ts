// app.config.ts
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'netlify', // change from 'cloudflare-workers' or similar
  },
})