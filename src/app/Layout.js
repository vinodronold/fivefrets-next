import React from 'react'
import Header from './containers/Header'

export default ({ children }) =>
  <div>
    <Header />
    {children}
  </div>
