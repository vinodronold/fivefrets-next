import React from 'react'
import glamorous from 'glamorous'
import Button from './html/Button'
import Router from 'next/router'
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

const onMenuClickHandler = (Router, ToggleMenu, href) => {
  Router.push(href)
  Router.onRouteChangeComplete = () => {
    ToggleMenu()
    Router.onRouteChangeComplete = null
  }
}

export default ({ isMenuOpen, ToggleMenu }) => (
  <div>
    <Menu isMenuOpen={isMenuOpen}>
      <Button
        onClick={() => {
          onMenuClickHandler(Router, ToggleMenu, '/')
        }}>
        Home
      </Button>
      <Button
        onClick={() => {
          onMenuClickHandler(Router, ToggleMenu, '/browse')
        }}>
        Browse
      </Button>
      <Button
        onClick={() => {
          onMenuClickHandler(Router, ToggleMenu, '/login')
        }}>
        Login
      </Button>
    </Menu>
  </div>
)
