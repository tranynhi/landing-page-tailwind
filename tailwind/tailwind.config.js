module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: { 
    container: {
      center:true,
    }, 
    fontFamily:
    {
      "body":"'Inter',sans-serif"
    },
    extend: {
      width:{
        1200: '1200px'
      },
      height:{
        1200: '1200px'
        
      },
      fontSize:{
        'h1':["72px","98px"],
        'h2':["48px","64px"],
        'h3':["40px","54px"],
        'h4':["28px","40px"],
        'h5':["24px","32px"],
        'p':["18px","32px"],
        'sub':["18px","28px"],
        'b1':["16px","26px"],
        'b2':["14px","24px"]
      },
      colors:{
        'brand-purple':{
          default: '#8C30F5',
          800: "#D6B1FF"
          },
          'brand-blue':{
            100: "#D5FAFC"
            },
        'brand-gray':{
          100:'#F4F5F7'
        }
        }

    },
  },
  safelist: [
    "splide__pagination"
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
