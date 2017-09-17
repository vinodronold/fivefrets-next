import React from 'react'
import glamorous from 'glamorous'
import Link from 'next/link'
import { Caption } from './html/Typography'
const Wrapper = glamorous.div(
  {
    position: 'relative',
    display: 'block',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: '1rem',
    marginTop: '3rem'
  },
  ({ theme }) => ({
    color: theme.color.primary(),
    backgroundColor: theme.color.bg()
  })
)
const FooterLink = glamorous(Caption)(
  {
    cursor: 'pointer',
    padding: '.25rem'
  },
  ({ theme }) => ({
    '&:hover': {
      color: theme.color.secondary(1)
    }
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
    <Link href="/about">
      <FooterLink>about fivefrets</FooterLink>
    </Link>
    <Link href="/disclaimer">
      <FooterLink>disclaimer</FooterLink>
    </Link>
    <FooterLink>
      <Twitter href="https://twitter.com/vinodronold" rel="noopener noreferrer" target="_blank">
        @vinodronold
      </Twitter>
    </FooterLink>
    <FooterLink>
      <Twitter href="https://twitter.com/_fivefrets" rel="noopener noreferrer" target="_blank">
        @_fivefrets
      </Twitter>
    </FooterLink>
    <FooterLink>
      <FB href="https://twitter.com/_fivefrets" rel="noopener noreferrer" target="_blank">
        @_fivefrets
      </FB>
    </FooterLink>
  </Wrapper>
)
