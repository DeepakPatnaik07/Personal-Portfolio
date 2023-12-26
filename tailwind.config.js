/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 6px 8px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};


// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
//         'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
//         'gilroy-light': ['Gilroy-Light', 'sans-serif'],
//         'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
//         'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
//       },
//       textShadow: {
//         sm: '0 1px 2px var(--tw-shadow-color)',
//         DEFAULT: '0 2px 4px var(--tw-shadow-color)',
//         lg: '0 8px 16px var(--tw-shadow-color)',
//       },
//     },
//   },
//   plugins: [
//     plugin(function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           'text-shadow': (value) => ({
//             textShadow: value,
//           }),
//         },
//         { values: theme('textShadow') }
//       )
//     }),
//   ],
// }