import React from 'react'
import glamorous from 'glamorous'
import Button from './utils/Button'

const Wrapper = glamorous.div({
  padding: '1rem',
  backgroundColor: '#EEE'
})

export default ({ isMenuOpen, ToggleMenu }) =>
  <Wrapper>
    <Button
      onClick={() => {
        ToggleMenu()
      }}>
      MENU
    </Button>
  </Wrapper>
