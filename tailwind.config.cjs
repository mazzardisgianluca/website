/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './index.html',
	  './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss,astro}',
	],
	darkMode: 'false', 
	theme: {
	  extend: {
		fontFamily: {
			permanent: "'Permanent Marker', cursive",
			flower: "'Indie Flower', cursive",
		},
		screens: {
			'widescreen': { 'raw': '(min-aspect-ratio: 3/2' }, 
			'tallscreen': { 'raw': '(min-aspect-ratio: 13/20' }, 
		},
		keyframes: {
			marquee: {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(-100%)' },
			  },
			  marquee2: {
				'0%': { transform: 'translateX(100%)' },
				'100%': { transform: 'translateX(0%)' },
			  },
			 
			'open-menu': {
			  '0%': { transform: 'scaleY(0)' },
			  '80%': { transform: 'scaleY(1.2)' },
			  '100%': { transform: 'scaleY(1)' },
			},
		  },
		  animation: {
			marquee: 'marquee 25s linear infinite',
     	    marquee2: 'marquee2 25s linear infinite',
		  }
	  },
	},
	plugins: [],
  };