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
				'border-spin': {
					'100%': {
						transform: 'rotate(-360deg)'
					}
				}
			},
			animation: {
				'border-spin': 'border-spin 7s linear infinite'
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
