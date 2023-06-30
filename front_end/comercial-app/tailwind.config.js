/** @type {import('tailwindcss').Config} */

export default {
  content: [
    	"./index.html",
	    "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      backgroundImage: {
        'project-still': "url('src/assets/projects/Screenshot_2023-06-30_01-59-46.png')"
        
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    screens: {

      'xs':'400px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
    
  ],
}
