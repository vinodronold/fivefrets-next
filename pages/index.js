import React from 'react'
import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}
const Wrapper = glamorous.div({
  margin: '2rem',
  color: 'orange'
})
export default () => <Wrapper>PAGES</Wrapper>
