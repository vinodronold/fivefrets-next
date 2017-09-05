import { TOGGLE_MENU, TOGGLE_SEARCH, SEARCH_TEXT } from '../constants/ActionTypes'

const ToggleMenu = {
  type: TOGGLE_MENU
}
const ToggleSearch = {
  type: TOGGLE_SEARCH
}
const SearchText = text => ({
  type: SEARCH_TEXT,
  text
})
export { ToggleMenu, ToggleSearch, SearchText }
