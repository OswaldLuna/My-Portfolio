/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'section': '5rem',
				'section-lg': '9rem',
			},
			colors: {
				brand: {
					DEFAULT: '#7e22ce',
					light: '#c084fc',
					dark: '#6b21a8',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
