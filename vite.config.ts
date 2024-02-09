/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    port: 3123
  },
  test: {
    bail: 1,
    environment: 'jsdom',
    globals: true,
    include: ['src/**/__tests__/*.test.tsx', 'src/**/__tests__/*.test.ts'],
    setupFiles: ['src/setup-files/react-router-dom.ts']
  }
})
