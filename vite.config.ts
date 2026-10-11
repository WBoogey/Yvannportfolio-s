import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

const isGithubPages = process.env.NITRO_PRESET === 'github_pages'

export default defineConfig({
  base: isGithubPages ? '/Yvannportfolio-s/' : '/',
  resolve: { tsconfigPaths: true },
  plugins: [
    ...(isGithubPages ? [] : [nitro()]),
    tanstackStart(
      isGithubPages
        ? {
            spa: {
              enabled: true,
              prerender: {
                crawlLinks: true,
                outputPath: '/index.html',
              },
            },
          }
        : {},
    ),
    viteReact(),
  ],
})
