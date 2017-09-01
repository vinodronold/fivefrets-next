import React from 'react'
import glamorous from 'glamorous'

const height = 3
const Wrapper = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem',
    justifyContent: 'center',
    height: `${height}rem`,
    zIndex: 10,
    transition: 'all .5s'
  },
  ({ isMenuOpen, theme }) => ({
    backgroundColor: `rgba(0, 0, 0, ${isMenuOpen ? 0 : 0.5})`,
    color: theme.color.bg
  })
)

const Brand = glamorous.span({
  fontSize: '1.25rem',
  letterSpacing: '.75rem',
  fontFeatureSettings: `"liga" 0`
})

const ClearFix = glamorous.div({
  height: `${height}rem`
})

export default ({ isMenuOpen, ToggleMenu }) => (
  <Wrapper isMenuOpen={isMenuOpen}>
    <Brand>fivefrets</Brand>
    <ClearFix />
  </Wrapper>
)
