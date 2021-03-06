import React from 'react'
import WrapperDiv from '../utils/WrapperDiv'
import Loader from '../Loader'
import Controls from './Controls'
import DisplayChords from './DisplayChords'
import GuitarChordsDiagrams from '../Diagram/Guitar'
import { Headline } from '../html/Typography'

const getChordsToDraw = chords =>
  chords
    ? [...new Set(Object.keys(chords).map(i => `${chords[i].r}|${!chords[i].q ? 1 : chords[i].q}`))].map(v => {
        let rq = v.split('|')
        return { r: rq[0], q: rq[1] }
      })
    : []

export default ({ song, player, SetTranspose, PlayerStatusChanged, MoveChordTo }) =>
  song ? (
    <WrapperDiv>
      <Headline style={{ textAlign: 'center' }}>{song.title}</Headline>
      <Controls
        status={player.status}
        transpose={player.transpose}
        SetTranspose={SetTranspose}
        PlayerStatusChanged={PlayerStatusChanged}
      />
      <DisplayChords player={player} chords={song.chords} />
      <GuitarChordsDiagrams chordsToDraw={getChordsToDraw(song.chords)} x={player.transpose} />
    </WrapperDiv>
  ) : (
    <Loader />
  )
