import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Edit `base` to match your repo name when deploying to github.com/<user>/<repo>
// Example: base: '/mads-cv/'
export default defineConfig({
  plugins: [react()],
  base: '/cv/' // CHANGE if your repo name is different, or set to '/' for <user>.github.io
})
