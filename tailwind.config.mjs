/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				cosmic: {
					950: '#07051A',
					900: '#0B0826',
					850: '#100B36',
					800: '#140E3E',
					750: '#1B144F',
					700: '#221A61',
					card: '#1F1852',
					'card-hover': '#2A216E',
					border: '#392C87',
					'border-light': '#4D3DB5',
				},
				neon: {
					cyan: '#00D2FF',
					'cyan-hover': '#33DCFF',
					'cyan-glow': 'rgba(0, 210, 255, 0.4)',
					blue: '#0070F3',
					purple: '#8B5CF6',
				},
				data: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
				}
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			boxShadow: {
				'neon-cyan': '0 0 25px rgba(0, 210, 255, 0.35)',
				'neon-purple': '0 0 25px rgba(139, 92, 246, 0.35)',
				'cosmic-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
			},
			animation: {
				'orbit-slow': 'spin 30s linear infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			}
		},
	},
	plugins: [],
}
