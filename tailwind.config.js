module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {
      colors:{
        'navy-blue':'#10131d',
        'nav-sec':'#222531',
        'nav-sec-hover':'#333644'

      },
      height:{
        'h-horizontal-img':'133px',
        '30-vh':'30vh'
      },
      width:{
        'w-horizontal-img':'200px'
      },
      borderRadius:{
        'br-8':'8px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
