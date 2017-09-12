import {
  TOGGLE_SEARCH,
  SEARCH_TEXT,
  FETCH_SEARCH_TEXT,
  FETCH_SEARCH_TEXT_ERROR,
  FETCH_SEARCH_TEXT_SUCCESS
} from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.search, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return Object.assign({}, state, { searchVal: '', selected: action.selected })
    case SEARCH_TEXT:
      return Object.assign({}, state, { searchVal: action.text })
    case FETCH_SEARCH_TEXT:
      return Object.assign({}, state, { isFetching: true, isError: false, result: [] })
    case FETCH_SEARCH_TEXT_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true, result: [] })
    case FETCH_SEARCH_TEXT_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isError: false, result: action.result })
    default:
      return state
  }
}
