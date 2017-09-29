import {
  SEARCH_TEXT,
  FETCH_SEARCH_TEXT,
  FETCH_SEARCH_TEXT_ERROR,
  FETCH_SEARCH_TEXT_SUCCESS,
  SEARCH_RESULT_CLICK, TOGGLE_YT_SEARCH
} from '../constants/ActionTypes'

export const SearchText = text => ({
  type: SEARCH_TEXT,
  text
})
export const FetchSearchText = () => ({
  type: FETCH_SEARCH_TEXT
})
export const FetchSearchTextError = () => ({
  type: FETCH_SEARCH_TEXT_ERROR
})
export const FetchSearchTextSuccess = result => ({
  type: FETCH_SEARCH_TEXT_SUCCESS,
  result
})
export const SearchResultClick = song => ({
  type: SEARCH_RESULT_CLICK,
  song
})
export const ToggleYTSearch = () => ({
  type: TOGGLE_YT_SEARCH
})