import React from 'react'
import { css } from 'glamor'
import { ThemeProvider } from 'glamorous'
import Theme from './constants/Theme'
import Header from './containers/Header'

export default ({ children }) => {
  css.global('html, body', {
    fontSize: Theme.BaseFont,
    fontFamily: Theme.fontFamily,
    backgroundColor: Theme.color.bg,
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
        <Header />
        {children}
      </div>
    </ThemeProvider>
  )
}
