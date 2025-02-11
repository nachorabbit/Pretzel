import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PretzelChat/', // repository 이름을 base로 설정
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
      '@assets': resolve(__dirname, './src/assets'),
      '@styles': resolve(__dirname, './src/styles'),
      '@types': resolve(__dirname, './src/types'),
      '@chat': resolve(__dirname, './src/pages/chat'),
      '@auth': resolve(__dirname, './src/pages/auth'),
      '@home': resolve(__dirname, './src/pages/home'),
      '@profile': resolve(__dirname, './src/pages/profile'),
      '@store': resolve(__dirname, './src/pages/store')
    }
  }
})
