import React from 'react'
import glamorous from 'glamorous'
import Button from '../html/Button'
import { PLAYER_STATUS } from '../../constants/PlayerStatus'
import { IsPlaying } from '../utils'

const ControlContainer = glamorous.div({
  margin: '1rem 0',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center'
})

const PlayerControl = ({ status, PlayerStatusChanged, transpose, SetTranspose }) => (
  <div>
    <ControlContainer>
      <Button
        onClick={
          IsPlaying(status) ? (
            () => PlayerStatusChanged(PLAYER_STATUS.PAUSED)
          ) : (
            () => PlayerStatusChanged(PLAYER_STATUS.PLAYING)
          )
        }>
        {IsPlaying(status) ? 'PAUSE' : 'PLAY'}
      </Button>
      <Button disabled={!IsPlaying(status)} onClick={() => PlayerStatusChanged(PLAYER_STATUS.ENDED)}>
        STOP
      </Button>
    </ControlContainer>
    <ControlContainer>
      <Button
        onClick={() => {
          SetTranspose(-1)
        }}>
        &minus;
      </Button>
      <Button
        onClick={() => {
          SetTranspose(-1 * transpose)
        }}>
        TRANSPOSE {transpose}
      </Button>
      <Button
        onClick={() => {
          SetTranspose(1)
        }}>
        &#43;
      </Button>
    </ControlContainer>
  </div>
)

export default PlayerControl
