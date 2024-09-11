/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 8s linear infinite',
				'small-bounce': 'small-bounce 1s infinite'
			},
			keyframes: {
				'small-bounce': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
					},
					'50%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
					}
				}
			},
			dropShadow: {
				'glow-ctp-mauve': ['0 0px 8px rgba(203, 166, 247, 0.35)'],
				'glow-ctp-yellow': ['0px 0px 20px #f9e2af'],
				'glow-ctp-green': ['0px 0px 20px #a6e3a1'],
				'glow-ctp-red': ['0px 0px 20px #f38ba8']
			}
		}
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			// prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
			// default is `false`, which means no prefix
			prefix: 'ctp',
			// which flavour of colours to use by default, in the `:root`
			defaultFlavour: 'mocha'
		})
	]
};
