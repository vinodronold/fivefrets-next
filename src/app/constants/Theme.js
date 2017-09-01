const mobile = 768
const tablet = 992
const theme = {
  color: {
    primary: `#FAFAFA`,
    secondary: `#00C853`,
    accent: `#ffc107`, //`#FF6B6B`,
    compliment: `#ffcb00`, //`#FFE66D`, //#ffcb00
    bg: `#FFF`
  },
  BaseFont: '16px',
  fontFamily: `Helvetica, Arial, sans-serif`,
  media: {
    mobile: `@media only screen and (max-width: ${mobile}px)`
  }
}

export default theme
export { mobile, tablet }