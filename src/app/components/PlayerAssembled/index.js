import React from 'react'
import glamorous from 'glamorous'
import Loader from '../Loader'
import Controls from './Controls'
import DisplayChords from './DisplayChords'
import GuitarChordsDiagrams from '../Diagram/Guitar'
import { Headline } from '../html/Typography'

const Container = glamorous.div({ width: '90%', margin: '1rem auto', padding: '1rem' }, ({ theme }) => ({
  backgroundColor: theme.color.bg()
}))

const getChordsToDraw = chords =>
  chords
    ? [...new Set(Object.keys(chords).map(i => `${chords[i].r}|${!chords[i].q ? 1 : chords[i].q}`))].map(v => {
        let rq = v.split('|')
        return { r: rq[0], q: rq[1] }
      })
    : []

export default ({ song, player, SetTranspose }) =>
  song ? (
    <Container>
      <Headline style={{ textAlign: 'center' }}>{song.title}</Headline>
      <Controls transpose={player.transpose} SetTranspose={SetTranspose} />
      <DisplayChords player={player} chords={song.chords} />
      <GuitarChordsDiagrams chordsToDraw={getChordsToDraw(song.chords)} x={player.transpose} />
    </Container>
  ) : (
    <Loader />
  )
