import React from 'react'
import glamorous from 'glamorous'
import Button from './utils/Button'
import Elevation from './utils/Elevation'
import Burger from './icons/Burger'

const BGColor = ({ theme }) => ({
  backgroundColor: theme.color.primary,
  color: theme.color.bg
})
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
    textAlign: 'center',
    height: `${height}rem`,
    zIndex: 10,
    transition: 'all .5s'
  },
  BGColor,
  ({ isMenuOpen }) => isMenuOpen && Elevation(8)
)

const Menu = glamorous.div(
  {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: `${height + 2}rem 1rem 1rem`,
    alignItems: 'center',
    margin: '0 .25rem',
    textAlign: 'center',
    flexDirection: 'column',
    zIndex: 9,
    transition: 'all .5s'
  },
  BGColor,
  Elevation(2),
  ({ isMenuOpen }) => ({
    transform: `translateY(${isMenuOpen ? '0' : '-10rem'})`
  })
)

const Brand = glamorous.span({
  fontSize: '1.25rem',
  letterSpacing: '.75rem',
  fontFeatureSettings: `"liga" 0`
})

const Controls = glamorous.span({
  marginLeft: 'auto'
})

const ClearFix = glamorous.div({
  height: `${height}rem`
})

export default ({ isMenuOpen, ToggleMenu }) => (
  <div>
    <Menu isMenuOpen={isMenuOpen}>
      <Button onDark>Home</Button>
      <Button onDark>Browse</Button>
      <Button onDark>Login</Button>
    </Menu>
    <Wrapper isMenuOpen={isMenuOpen}>
      <Brand>fivefrets</Brand>
      <Controls>
        <Button
          onDark
          onClick={() => {
            ToggleMenu()
          }}>
          <Burger isMenuOpen={isMenuOpen} />
        </Button>
      </Controls>
    </Wrapper>
    <ClearFix />
  </div>
)
