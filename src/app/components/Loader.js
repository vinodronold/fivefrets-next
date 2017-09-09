import React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'
import { Caption } from './html/Typography'

const bars = 5
const factor = 0.1
const loading = css.keyframes({
  '0%': { transform: `scaleY(0.75)` },
  '100%': { transform: `scaleY(1.25)` }
})

const LoaderContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem'
})
const Loader = glamorous.div(
  {
    textAlign: 'center',
    padding: '1rem',
    margin: '.25rem',
    transform: 'scaleY(0.75)'
  },
  ({ i, theme }) => ({
    backgroundColor: theme.color.secondary(),
    animation: `${loading} ${bars * factor}s ${factor * i}s  infinite ease-in-out alternate`
  })
)
export default () => (
  <div style={{ textAlign: 'center' }}>
    <LoaderContainer>
      {Array(bars)
        .fill(1)
        .map((_, i) => <Loader key={i} i={i} />)}
    </LoaderContainer>
    <Caption>LOADING . . .</Caption>
  </div>
)
