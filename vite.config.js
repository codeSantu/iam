import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This ensures assets are loaded from the correct sub-directory on GitHub Pages
  base: '/iam/', 
  plugins: [react()],
})