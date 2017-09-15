import {
  SET_TRANSPOSE,
  MOVE_CHORD_TO,
  YT_PLAYER_STATUS_CHANGED,
  GET_CURRENT_SONG,
  FETCH_CURRENT_SONG_CHORDS,
  FETCH_CURRENT_SONG_CHORDS_ERROR,
  FETCH_CURRENT_SONG_CHORDS_SUCCESS,
  MOUNT_YT_PLAYER,
  UNMOUNT_YT_PLAYER
} from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.player, action) => {
  switch (action.type) {
    case MOVE_CHORD_TO:
      return Object.assign({}, state, { activechord: action.id })
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    case GET_CURRENT_SONG:
      return Object.assign({}, state, { activeID: action.song.id })
    case SET_TRANSPOSE:
      return Object.assign({}, state, { transpose: state.transpose + action.n })
    case FETCH_CURRENT_SONG_CHORDS:
      return Object.assign({}, state, { isFetching: true, isError: false })
    case FETCH_CURRENT_SONG_CHORDS_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true })
    case FETCH_CURRENT_SONG_CHORDS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isError: false })
    case MOUNT_YT_PLAYER:
      return Object.assign({}, state, { playerID: action.playerID })
    case UNMOUNT_YT_PLAYER:
      return Object.assign({}, state, { playerID: '' })
    default:
      return state
  }
}
