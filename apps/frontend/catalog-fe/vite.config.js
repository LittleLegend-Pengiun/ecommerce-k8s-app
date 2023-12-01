import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

if (process.env.NODE_ENV === 'development') {
  const devEnv = dotenv.config({ path: ".env-local"})
  process.env = {...process.env, ...devEnv.parsed }
} 
else 
{ // process.env.NODE_ENV === 'production'
  const prodEnv = dotenv.config({ path: ".env-prod"})
  process.env = {...process.env, ...prodEnv.parsed }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3090
  },
  plugins: [react()],
  define: {
    'process.env.MS_URL': JSON.stringify(process.env.MS_URL),
    'process.env.CONTENT': JSON.stringify(process.env.CONTENT),
  },
})
