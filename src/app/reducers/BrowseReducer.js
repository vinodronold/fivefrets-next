import { BROWSE, BROWSE_SONGS, BROWSE_SONGS_ERROR, BROWSE_SONGS_SUCCESS } from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.browse, action) => {
  switch (action.type) {
    case BROWSE:
      return Object.assign({}, state, { pages: 0, list: {} })
    case BROWSE_SONGS:
      return Object.assign({}, state, { pages: 0, list: {} })
    case BROWSE_SONGS_ERROR:
      return Object.assign({}, state, { pages: 0, list: {} })
    case BROWSE_SONGS_SUCCESS:
      return Object.assign({}, state, { pages: 0, list: {} })
    default:
      return state
  }
}
