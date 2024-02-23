import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
			'black': '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
			'freshEsmerald':'#32AE5D',
			'deepForest': '#191D19',
			'neutral-800': '#262626',
			'neutral-700': '#44403c',
			'neutral-600':'#525252',
			'neutral-500': '#78716c',
			'neutral-400': '#a3a3a3',
			'neutral-300': '#d4d4d4',
			'neutral-200': '#e5e5e5',
			'neutral-100': '#f5f5f5',
    },
	},
	plugins: [],
};
export default config;
