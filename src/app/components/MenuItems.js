import React from 'react'
import glamorous from 'glamorous'
import Button from './html/Button'
import MenuButton from './MenuButton'
const Menu = glamorous.div(
  {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: `auto`,
    overflow: 'hidden',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    transition: 'all .5s'
  },
  ({ isMenuOpen, theme }) => ({
    opacity: isMenuOpen ? 1 : 0,
    zIndex: isMenuOpen ? 10 : 0,
    color: theme.color.primary(),
    backgroundColor: theme.color.bg()
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
