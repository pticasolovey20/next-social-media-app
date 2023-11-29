import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',

	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			screens: {
				xs: '400px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				xxl: '1536px',
			},

			backgroundColor: {
				primary: 'hsl(var(--background-primary))',
				secondary: 'hsl(var(--background-secondary))',

				button: {
					primary: 'hsl(var(--button-primary))',
					secondary: 'hsl(var(--button-secondary))',
					active: 'hsl(var(--button-active))',
				},
			},

			textColor: {
				primary: 'hsl(var(--text-primary))',
				secondary: 'hsl(var(--text-secondary))',
				hover: 'hsl(var(--text-hover))',
			},

			boxShadow: {
				DEFAULT: '0px 5px 10px 0px hsl(var(--shadow-primary))',
				'neomorphism-dark': '5px 5px 10px #0D0D0D, -5px -5px 10px #353535',
				'neomorphism-light': '5px 5px 10px #5E5E5E, -5px -5px 10px #DBDBDB',
			},
		},
	},

	plugins: [],
};

export default config;
