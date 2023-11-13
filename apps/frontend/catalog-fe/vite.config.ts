import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3090
  },
  plugins: [react()],
  // define: {
  //   'process.env.MS_URL': JSON.stringify(process.env.MS_URL),
  //   'process.env.CONTENT': JSON.stringify(process.env.CONTENT),
  // },
})
