import React from 'react'
import glamorous from 'glamorous'

const height = 3
const pad = 1
const Wrapper = glamorous.div(
  {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: `${pad / 2}rem`,
    justifyContent: 'center',
    height: `${height}rem`,
    zIndex: 10,
    transition: 'all .5s'
  },
  ({ isMenuOpen, theme }) => ({
    backgroundColor: theme.color.bg(`${isMenuOpen ? 0 : 0.8}`),
    color: theme.color.primary()
  })
)

const Brand = glamorous.span({
  fontSize: '1.25rem',
  letterSpacing: '.75rem',
  fontFeatureSettings: `"liga" 0`
})

// const ClearFix = glamorous.div({
//   height: `${height + pad}rem`
// })

export default ({ isMenuOpen, ToggleMenu }) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Brand>fivefrets</Brand>
  </Wrapper>
)
