/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        aweraBlue: "#1E40AF",     // Primary blue
        aweraLight: "#EFF6FF",    // Light background
        aweraDark: "#0F172A",     // Dark mode background
        aweraAccent: "#FBBF24",   // Accent yellow
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounceIn: {
          "0%, 20%, 40%, 60%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideUp: "slideUp 0.4s ease-in-out",
        bounceIn: "bounceIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}
