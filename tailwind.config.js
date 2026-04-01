/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Responsive spacing scale using rems (rem = 16px)
        "section-xs": "clamp(1rem, 5vw, 2rem)",
        "section-sm": "clamp(1.5rem, 8vw, 3rem)",
        "section-md": "clamp(2rem, 10vw, 4rem)",
        "section-lg": "clamp(3rem, 12vw, 5rem)",
        "section-xl": "clamp(4rem, 15vw, 6rem)",
        "section-2xl": "clamp(5rem, 20vw, 8rem)",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in": "fade .5s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-delayed-2": "float 6s ease-in-out 4s infinite",
        "pulse-dot": "pulse_dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
