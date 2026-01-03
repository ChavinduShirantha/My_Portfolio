import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/',
  define: {
    'import.meta.env.VITE_BASE_URL': JSON.stringify(
      mode === 'production'
        ? 'https://chavindu-shirantha.web.app'
        : 'http://localhost:5173'
    )
  }
}))