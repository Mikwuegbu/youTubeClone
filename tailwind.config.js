/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html,js}'],
	theme: {
		extend: {
			spacing: {
				xxl: '75%',
				sl: '56.25%',
				pxx: '420px',
			},
		},
	},
	plugins: [],
};
