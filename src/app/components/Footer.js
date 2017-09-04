import React from 'react'
import glamorous from 'glamorous'
import { Caption } from './html/Typography'
const Wrapper = glamorous.div(
  {
    position: 'relative',
    display: 'block',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: '1rem'
  },
  ({ theme }) => ({
    color: theme.color.primary()
  })
)

const Social = c =>
  glamorous.a({
    textDecoration: 'none',
    backgroundColor: c,
    color: '#FFF',
    margin: '0 .25rem',
    padding: '.25rem .5rem',
    borderRadius: '8px'
  })

const Twitter = Social('#00aced')
const FB = Social('#3b5998')

export default () => (
  <Wrapper>
    <Caption>about fivefrets | discliamer</Caption>
    <Caption style={{ padding: '1rem' }}>
      Developed & Maintained by
      <Twitter href="https://twitter.com/vinodronold" rel="noopener noreferrer" target="_blank">
        @vinodronold
      </Twitter>
      | follow us
      <Twitter href="https://twitter.com/_fivefrets" rel="noopener noreferrer" target="_blank">
        @_fivefrets
      </Twitter>
      <FB href="https://twitter.com/_fivefrets" rel="noopener noreferrer" target="_blank">
        @_fivefrets
      </FB>
    </Caption>
  </Wrapper>
)
