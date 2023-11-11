import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      baseURL: 'https://assistancelovecare.com',
      exclude: ['/404'],
      changefreq: 'monthly',
      priority: 0.8,
      routes: [
        {
          url: '/services',
          lastmod: '2023-11-7',
          changefreq: 'monthly',
          priority:0.9,
        },
        {
          url: '/aboutus',
          lastmod: '2023-11-7',
          changefreq: 'monthly',
          priority:0.6,
        },
        {
          url: '/contact',
          lastmod: '2023-11-7',
          changefreq: 'monthly',
          priority:0.7,
        },
        {
          url: '/home',
          lastmod: '2023-11-7',
          changefreq: 'monthly',
          priority:0.7,
        },
      ]
    }),
    ],
})
