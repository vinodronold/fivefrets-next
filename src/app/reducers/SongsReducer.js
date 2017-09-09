import {
  SONGS,
  FETCH_SONGS,
  FETCH_SONGS_ERROR,
  FETCH_SONGS_SUCCESS,
  SEARCH_RESULT_CLICK
} from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.songs, action) => {
  switch (action.type) {
    case SEARCH_RESULT_CLICK:
      console.log(action)
      if (state.data[action.song.id]) {
        return state
      }
      let data = { ...state.data, [action.song.id]: { title: action.song.title } }
      return Object.assign({}, state, { data: data })
    case SONGS:
      return Object.assign({}, state, { data: {} })
    case FETCH_SONGS:
      return Object.assign({}, state, { isFetching: true, isError: false })
    case FETCH_SONGS_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true })
    case FETCH_SONGS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isError: false, data: action.data })
    default:
      return state
  }
}
