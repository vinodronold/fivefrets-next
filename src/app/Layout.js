import React from 'react'
import { css } from 'glamor'
import { ThemeProvider } from 'glamorous'
import Theme from './constants/Theme'
import Header from './containers/Header'
import Footer from './components/Footer'
import Menu from './containers/Menu'
import Content from './containers/Content'
import SearchBox from './containers/SearchBox'

export default ({ children }) => {
  css.global('html, body', {
    fontSize: Theme.BaseFont,
    fontFamily: Theme.fontFamily,
    background: `url('/static/img/main_banner.jpg') no-repeat left center fixed`,
    backgroundColor: Theme.color.bg(),
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
        <Content>
          <SearchBox />
          {children}
        </Content>
        <Menu />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
