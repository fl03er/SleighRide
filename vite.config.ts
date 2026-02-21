import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // '저장소이름' 부분에 본인의 GitHub 저장소 이름을 넣으세요.
  // 예: https://github.com/fl0er/my-archive 라면 '/my-archive/'
  base: '/SleighRide/', 
})