/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "#6b26b7",
        hoverColor: '#6b26b7',
        HeadingColor: '#111',
        textColor: '#555',
        gray1: '#292929',
        sectionbg: '#F9F9F9',
        borderColor: '#eee',


      },
      backgroundImage: {
        Testimonials: "url('https://i.ibb.co/sbV1b0f/bg-05-new.jpg')",
        slider1: 'url("https://i.ibb.co/Tg0jBt0/slide001-6.webp")',
        slider2: 'url("https://i.ibb.co/dWYfS5z/slide003-2.webp")',
        slider3: 'url("https://i.ibb.co/ft333ML/slide002-3.webp")',
        slider4: 'url("https://i.ibb.co/rsNgG1q/slide004-1.webp")',
        slider5: 'url("https://i.ibb.co/pKMKGzK/slide005-6.webp")',





      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },

}




