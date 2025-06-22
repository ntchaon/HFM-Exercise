module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // สำคัญ! บอก Tailwind ว่าให้ดูไฟล์ตรงไหนบ้าง
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};