/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 여기 아래 내용을 추가해주세요!
      animation: {
        'spin-slow': 'spin 4s linear infinite', // 4초 동안 천천히 회전
      },
      // 여기까지 추가
    },
  },
  plugins: [],
}