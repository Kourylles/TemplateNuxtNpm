/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,ts,vue}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('tailwindcss-breakpoints-inspector')],
}
