import { BROWSE, BROWSE_SONGS, BROWSE_SONGS_ERROR, BROWSE_SONGS_SUCCESS, GO_TO_PAGE } from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.browse, action) => {
  switch (action.type) {
    case BROWSE:
      return Object.assign({}, state, { isFetching: false, isError: false, start: action.start, curr_page: 0, total_page: 0, list: {} })
    case BROWSE_SONGS:
      return Object.assign({}, state, { isFetching: true })
    case BROWSE_SONGS_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true })
    case BROWSE_SONGS_SUCCESS:
      // console.log(action.list)
      let list = Object.assign({}, state.list, { ...action.list })
      return Object.assign({}, state, { isFetching: false, isError: false, curr_page: 1, total_page: 10, list: list })
    case GO_TO_PAGE:
      console.log(action)
      return Object.assign({}, state, { isFetching: false, isError: false, curr_page: action.page, total_page: 10 })
    default:
      return state
  }
}
