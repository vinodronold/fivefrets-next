import React from 'react'
import glamorous from 'glamorous'

const dim = 5
const Container = glamorous.div({
  width: `${dim}rem`,
  height: `${dim}rem`,
  bottom: '1rem',
  right: '1rem',
  position: 'absolute',
  cursor: 'pointer',
  background: 'rgba(255,255,255,0)',
  borderRadius: '50%',
  zIndex: 15,
  '&:hover': {
    background: 'rgba(255,255,255,.1)'
  }
})

const Hamburger = glamorous.div({
  position: 'absolute',
  height: '100%',
  width: '100%'
})

const Layer = glamorous.span(
  {
    display: 'block',
    background: '#FFF',
    borderRadius: '2px',
    height: '4px',
    position: 'relative',
    margin: '.5rem 0',
    top: `${dim * 0.24}rem`,
    left: `${dim * 0.2}rem`,
    transition: '.25s ease-in-out'
  },
  ({ level, isMenuOpen }) => ({
    transitionDelay: `${(isMenuOpen ? 0 : 0.5) + 0.125 * (level - 1)}s`,
    width: `${isMenuOpen ? 0 : dim * 0.6}rem`
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
  ({ level, isMenuOpen }) =>
    level === 1
      ? {
          top: '30%',
          left: `${dim * 0.48}rem`,
          width: '4px',
          height: `${isMenuOpen ? 40 : 0}%`,
          transitionDelay: `${isMenuOpen ? 0.625 : 0}s`
        }
      : {
          top: `${dim * 0.48}rem`,
          left: '30%',
          height: '4px',
          width: `${isMenuOpen ? 40 : 0}%`,
          transitionDelay: `${isMenuOpen ? 0.375 : 0.25}s`
        }
)

export default ({ isMenuOpen, ToggleMenu }) => (
  <Container onClick={ToggleMenu}>
    <Hamburger>
      {Array(3)
        .fill(1)
        .map((_, i) => <Layer key={i} level={i} isMenuOpen={isMenuOpen} />)}
    </Hamburger>
    <Cross>
      {Array(2)
        .fill(1)
        .map((_, i) => <Arm key={i} level={i} isMenuOpen={isMenuOpen} />)}
    </Cross>
  </Container>
)
