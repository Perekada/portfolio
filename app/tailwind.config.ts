// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
	theme: {
		extend: {
			fontFamily: {
				// You can name this whatever you want (e.g., 'fancy', 'handwriting')
				playwrite: ['var(--font-playwrite)'],
			},
			colors: {

				primary: '#1d4ed8',
			},
		},
	},
	// ... rest of config
};
export default config;
