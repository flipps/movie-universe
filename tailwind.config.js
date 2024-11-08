/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    extend: {
			fontFamily: {
				brand: ["Montserrat", "sans-serif"],
				body: ["Nunito"],
			}
		},
  },
  plugins: [],
}

