import React from 'react'
import Icons from './Icons'
export default ({ isMenuOpen, ...props }) => (
  <Icons {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d={
        isMenuOpen ? (
          'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
        ) : (
          'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
        )
      }
    />
  </Icons>
)