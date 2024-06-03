/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://cdn.britannica.com/74/182174-050-6755AB49/balloon-sky.jpg')",
      },
    },
  },
  plugins: [],
}

