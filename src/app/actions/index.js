import { TOGGLE_MENU, TOGGLE_SEARCH } from '../constants/ActionTypes'
import { SearchText, FetchSearchText, FetchSearchTextError, FetchSearchTextSuccess } from './Search'

const ToggleMenu = {
  type: TOGGLE_MENU
}
const ToggleSearch = {
  type: TOGGLE_SEARCH
}

export { ToggleMenu, ToggleSearch, SearchText, FetchSearchText, FetchSearchTextError, FetchSearchTextSuccess }
