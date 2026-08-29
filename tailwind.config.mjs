/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				data: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					800: '#115e59',
					900: '#134e4a',
				},
				ai: {
					50: '#f5f3ff',
					100: '#ede9fe',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					800: '#5b21b6',
					900: '#4c1d95',
				}
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			}
		},
	},
	plugins: [],
}
