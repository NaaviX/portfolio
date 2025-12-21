import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
    plugins: [react(), tailwindcss(), tsconfigPaths(), svgr()],
})
