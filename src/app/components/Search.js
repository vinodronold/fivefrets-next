import React from 'react'
import glamorous from 'glamorous'

const Container = glamorous.div({
  margin: '3rem 1rem',
  textAlign: 'center'
})
const Search = glamorous.input({
  height: '3rem',
  width: '80%',
  backgroundColor: 'rgba(0,0,0,0)',
  borderStyle: 'none',
  fontSize: '2rem',
  color: '#222',
  borderBottom: '2px solid #FFF',
  textAlign: 'center',
  '&:focus': {
    outline: 'none'
  }
})

export default () => (
  <Container>
    <Search type="text" placeholder="Search" />
  </Container>
)
