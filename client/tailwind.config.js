/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dorée: '#C09455',
        taupe: '#E1D1D4',
        vert_claire:'#3A5547',
        vert_foncé:'#2B3B32',
        fake_black:'#141111',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    // ... other plugins
  ],
  
}

