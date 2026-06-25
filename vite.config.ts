import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        port: 3000,
        allowedHosts: ['antoine-legrand.dev', '167.235.59.152'],
    },
    preview: {
        port: 3000,
        allowedHosts: ['antoine-legrand.dev', '167.235.59.152'],
    },
    build: {
        outDir: 'build',
        rollupOptions: {
            output: {
                manualChunks: {
                    // Core React ecosystem
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    // Animation library
                    'framer-motion': ['framer-motion'],
                    // Swiper carousel
                    swiper: ['swiper'],
                    // UI utilities
                    ui: [
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-label',
                        '@radix-ui/react-slot',
                    ],
                },
            },
        },
    },
    plugins: [react(), tailwindcss(), tsconfigPaths(), svgr()],
})
