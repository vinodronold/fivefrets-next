import React from 'react'
import glamorous from 'glamorous'
import Controls from './Controls'
import DisplayChords from './DisplayChords'
import { Headline } from '../html/Typography'

const Container = glamorous.div({ width: '90%', margin: '1rem auto', padding: '1rem' }, ({ theme }) => ({
  backgroundColor: theme.color.bg()
}))

export default ({ song, player, SetTranspose }) => (
  <Container>
    <Headline style={{ textAlign: 'center' }}>{song.title}</Headline>
    <Controls transpose={player.transpose} SetTranspose={SetTranspose} />
    <DisplayChords player={player} chords={song.chords} />
  </Container>
)
