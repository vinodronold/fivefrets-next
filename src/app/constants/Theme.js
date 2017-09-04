const mobile = 768
const tablet = 992
const theme = {
  color: {
    primary: (o = 1) => `rgba(255,255,255,${o})`,
    secondary: (o = 0.5) => `rgba(251, 192, 45,${o})`,
    bg: (o = 0.8) => `rgba(0,0,0,${o})`
  },
  BaseFont: '16px',
  fontFamily: `Helvetica, Arial, sans-serif`,
  media: {
    mobile: `@media only screen and (max-width: ${mobile}px)`
  }
}

export default theme
export { mobile, tablet }
