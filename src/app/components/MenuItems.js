import React from 'react'
import glamorous from 'glamorous'
import Button from './utils/Button'
import MenuButton from './utils/MenuButton'
const Menu = glamorous.div(
  {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: `auto`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    height: '100%',
    transition: 'all .5s'
  },
  ({ isMenuOpen, theme }) => ({
    opacity: isMenuOpen ? 1 : 0,
    zIndex: isMenuOpen ? 10 : 0,
    color: theme.color.bg
  })
)

export default ({ isMenuOpen, ToggleMenu }) => (
  <div>
    <Menu isMenuOpen={isMenuOpen}>
      <Button onDark>Home</Button>
      <Button onDark>Browse</Button>
      <Button onDark>Login</Button>
    </Menu>
    <MenuButton isMenuOpen={isMenuOpen} ToggleMenu={ToggleMenu} />
  </div>
)
