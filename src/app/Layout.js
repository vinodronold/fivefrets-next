import React from 'react'
import { css } from 'glamor'
import { ThemeProvider } from 'glamorous'
import Theme from './constants/Theme'
import Header from './containers/Header'
import Menu from './containers/Menu'

export default ({ children }) => {
  css.global('html, body', {
    fontSize: Theme.BaseFont,
    fontFamily: Theme.fontFamily,
    backgroundColor: Theme.color.bg,
    background: `url('/static/img/main_banner.jpg') no-repeat left center fixed`,
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  })

  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Menu />
        <Header />
        {children}
      </div>
    </ThemeProvider>
  )
}
