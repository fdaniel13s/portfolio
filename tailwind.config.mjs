/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				cosmic: {
					950: '#09090b',
					900: '#0f1117',
					850: '#141720',
					800: '#1a1e2b',
					750: '#212636',
					700: '#2b3247',
					card: '#11141d',
					'card-hover': '#161a25',
					border: '#27272a',
					'border-light': '#3f3f46',
				},
				neon: {
					cyan: '#38bdf8',
					'cyan-hover': '#0ea5e9',
					'cyan-glow': 'rgba(56, 189, 248, 0.15)',
					blue: '#3b82f6',
					purple: '#818cf8',
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
				'neon-cyan': '0 2px 14px rgba(56, 189, 248, 0.18)',
				'neon-purple': '0 2px 14px rgba(129, 140, 248, 0.18)',
				'cosmic-card': '0 4px 24px -2px rgba(0, 0, 0, 0.6)',
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
