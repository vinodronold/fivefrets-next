import {
  SET_TRANSPOSE,
  GET_CURRENT_SONG,
  FETCH_CURRENT_SONG_CHORDS,
  FETCH_CURRENT_SONG_CHORDS_ERROR,
  FETCH_CURRENT_SONG_CHORDS_SUCCESS
} from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.player, action) => {
  switch (action.type) {
    case SET_TRANSPOSE:
      return Object.assign({}, state, { transpose: state.transpose + action.n })
    case GET_CURRENT_SONG:
      return Object.assign({}, state, { activeID: action.song.id })
    case FETCH_CURRENT_SONG_CHORDS:
      return Object.assign({}, state, { isFetching: true, isError: false })
    case FETCH_CURRENT_SONG_CHORDS_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true })
    case FETCH_CURRENT_SONG_CHORDS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isError: false })
    default:
      return state
  }
}
