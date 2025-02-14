/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },      
      fontFamily: {
          inter: ["Inter", "sans-serif"],
          lexend: ["Lexend", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          roadRage: ["Road Rage", "cursive"],
          roboto: ["Roboto", "sans-serif"],
          sourceSerif: ["Source Serif 4", "serif"],
          jeju: ["Jeju Myeongjo", "serif"],
          alatsi: ["Alatsi", "serif"],
        },
    
  },
},
  plugins: [],
};
