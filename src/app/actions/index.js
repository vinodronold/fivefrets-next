import { TOGGLE_MENU, TOGGLE_SEARCH } from '../constants/ActionTypes'
import { SearchText, FetchSearchText, FetchSearchTextError, FetchSearchTextSuccess } from './Search'
import { Songs, FetchSongs, FetchSongsError, FetchSongsSuccess } from './Songs'
import {
  SetTranspose,
  GetCurrentSong,
  FetchCurrentSongChords,
  FetchCurrentSongChordsError,
  FetchCurrentSongChordsSuccess
} from './Player'

const ToggleMenu = {
  type: TOGGLE_MENU
}
const ToggleSearch = selected => ({
  type: TOGGLE_SEARCH,
  selected
})

export {
  ToggleMenu,
  ToggleSearch,
  SearchText,
  FetchSearchText,
  FetchSearchTextError,
  FetchSearchTextSuccess,
  Songs,
  FetchSongs,
  FetchSongsError,
  FetchSongsSuccess,
  SetTranspose,
  GetCurrentSong,
  FetchCurrentSongChords,
  FetchCurrentSongChordsError,
  FetchCurrentSongChordsSuccess
}
