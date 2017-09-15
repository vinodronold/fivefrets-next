import {
  SET_TRANSPOSE,
  GET_CURRENT_SONG,
  FETCH_CURRENT_SONG_CHORDS,
  FETCH_CURRENT_SONG_CHORDS_ERROR,
  FETCH_CURRENT_SONG_CHORDS_SUCCESS,
  MOVE_CHORD_TO
} from '../constants/ActionTypes'

export const SetTranspose = n => ({
  type: SET_TRANSPOSE,
  n
})
export const GetCurrentSong = song => ({
  type: GET_CURRENT_SONG,
  song
})
export const FetchCurrentSongChords = () => ({
  type: FETCH_CURRENT_SONG_CHORDS
})
export const FetchCurrentSongChordsError = () => ({
  type: FETCH_CURRENT_SONG_CHORDS_ERROR
})
export const FetchCurrentSongChordsSuccess = (id, chords) => ({
  type: FETCH_CURRENT_SONG_CHORDS_SUCCESS,
  id,
  chords
})
export const MoveChordTo = id => ({
  type: MOVE_CHORD_TO,
  id
})
