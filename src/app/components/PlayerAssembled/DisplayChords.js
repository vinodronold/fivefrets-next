import React from 'react'
import glamorous from 'glamorous'
import Loader from '../Loader'
import { Mobile } from '../utils'
import { GetChordName } from '../Diagram/chordMeta'

const GetTopPosition = c => {
  let itemsPerLine = Mobile ? 4 : 8
  let topRem = 4
  if (c <= itemsPerLine * 2) {
    return 0
  }
  return topRem * Math.floor((c - 1) / itemsPerLine) - topRem
}

const ChordsContainer = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '12rem'
})

const ChordsWindow = glamorous.div(
  {
    padding: '.5rem',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(8, 1fr)',
    transition: 'top .5s'
  },
  ({ theme }) => ({
    [theme.media.mobile]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  })
)

const Chord = glamorous.div(
  {
    padding: '1rem',
    lineHeight: '1rem',
    textAlign: 'center'
  },
  ({ active, pulse, theme, r, q, x }) => ({
    ':after': {
      content: GetChordName(r, q, x)
    },
    backgroundColor: active ? theme.color.secondary(0.7) : theme.color.secondary(0.1)
  })
)

export default ({ chords, player }) => (
  <ChordsContainer>
    {chords ? (
      <ChordsWindow style={{ top: `-${GetTopPosition(player.activechord)}rem` }}>
        {Object.keys(chords).map(key => (
          <Chord
            key={key}
            active={Number(key) === Number(player.activechord)}
            r={chords[key].r}
            q={chords[key].q}
            x={player.transpose}
          />
        ))}
      </ChordsWindow>
    ) : (
      <Loader />
    )}
  </ChordsContainer>
)
