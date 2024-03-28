/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // palette leqdima waqil khadmin b dorrée ta3ha à corriger
        dorée: '#C09455',
        taupe: '#E1D1D4',
        vert_claire:'#3A5547',
        vert_foncé:'#2B3B32',
        fake_black:'#141111',
        // la nouvelle palette // hadi stkhhedmetha bouchra lel cards EAE1D1
        white_palette : '#F4EFE7',
        taupe_palette :  '#E4CFAC',
        black_palette :  '1D1D1B',
        brown_palette :'#C09455',
      },
    },
  },
  plugins: [
    // ghi fi khater akila ; techti gradiant techti
    require('tailwindcss-gradients'),
    
  ],
  
}

