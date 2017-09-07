import {
  SEARCH_TEXT,
  FETCH_SEARCH_TEXT,
  FETCH_SEARCH_TEXT_ERROR,
  FETCH_SEARCH_TEXT_SUCCESS
} from '../constants/ActionTypes'

const SearchText = text => ({
  type: SEARCH_TEXT,
  text
})
const FetchSearchText = () => ({
  type: FETCH_SEARCH_TEXT
})
const FetchSearchTextError = () => ({
  type: FETCH_SEARCH_TEXT_ERROR
})
const FetchSearchTextSuccess = result => ({
  type: FETCH_SEARCH_TEXT_SUCCESS,
  result
})
export { SearchText, FetchSearchText, FetchSearchTextError, FetchSearchTextSuccess }
