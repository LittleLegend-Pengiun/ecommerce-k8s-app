import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

if (process.env.NODE_ENV === 'development') {
  const devEnv = dotenv.config({ path: ".env.development"})
  process.env = {...process.env, ...devEnv.parsed }
} 
else 
{ // process.env.NODE_ENV === 'production'
  const prodEnv = dotenv.config({ path: ".env.production"})
  process.env = {...process.env, ...prodEnv.parsed }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3090
  },
  plugins: [react()],
  define: {
    'process.env.REACT_APP_CATALOG_MS_1_URL': JSON.stringify(process.env.REACT_APP_CATALOG_MS_1_URL),
  },
})
