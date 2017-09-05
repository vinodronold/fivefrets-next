import React from 'react'
import glamorous from 'glamorous'

const dim = 5
const Container = glamorous.div(
  {
    width: `${dim}rem`,
    height: `${dim}rem`,
    bottom: '1.1rem',
    right: '1.1rem',
    position: 'fixed',
    cursor: 'pointer',
    borderRadius: '50%',
    zIndex: 15,
    transition: 'all .5s'
  },
  ({ theme }) => ({
    background: theme.color.secondary(),
    '&:hover': {
      background: theme.color.secondary(0.8)
    }
  })
)

const Hamburger = glamorous.div({
  position: 'absolute',
  height: '100%',
  width: '100%'
})

const Layer = glamorous.span(
  {
    display: 'block',
    borderRadius: '2px',
    height: '4px',
    position: 'relative',
    margin: '.5rem 0',
    top: `${dim * 0.24}rem`,
    left: `${dim * 0.2}rem`,
    transition: '.25s ease-in-out'
  },
  ({ level, isOpen, theme }) => ({
    transitionDelay: `${(isOpen ? 0 : 0.5) + 0.125 * (level - 1)}s`,
    width: `${isOpen ? 0 : dim * 0.6}rem`,
    background: theme.color.primary()
  })
)

const Cross = glamorous.div({
  position: 'absolute',
  height: '100%',
  width: '100%',
  transform: 'rotate(45deg)'
})

const Arm = glamorous.span(
  {
    position: 'absolute',
    transition: '.25s ease-in-out',
    background: '#FFF'
  },
  ({ theme }) => ({
    background: theme.color.primary()
  }),
  ({ level, isOpen }) =>
    level === 1
      ? {
          top: '30%',
          left: `${dim * 0.48}rem`,
          width: '4px',
          height: `${isOpen ? 40 : 0}%`,
          transitionDelay: `${isOpen ? 0.625 : 0}s`
        }
      : {
          top: `${dim * 0.48}rem`,
          left: '30%',
          height: '4px',
          width: `${isOpen ? 40 : 0}%`,
          transitionDelay: `${isOpen ? 0.375 : 0.25}s`
        }
)

export default ({ isMenuOpen, isSearchOpen, ToggleMenu, ToggleSearch }) => (
  <Container onClick={isSearchOpen ? ToggleSearch : ToggleMenu}>
    <Hamburger>
      {Array(3)
        .fill(1)
        .map((_, i) => <Layer key={i} level={i} isOpen={isMenuOpen || isSearchOpen} />)}
    </Hamburger>
    <Cross>
      {Array(2)
        .fill(1)
        .map((_, i) => <Arm key={i} level={i} isOpen={isMenuOpen || isSearchOpen} />)}
    </Cross>
  </Container>
)
