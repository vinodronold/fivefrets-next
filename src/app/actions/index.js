import { TOGGLE_MENU, TOGGLE_SEARCH } from '../constants/ActionTypes'
import { SearchText, FetchSearchText, FetchSearchTextError, FetchSearchTextSuccess, ToggleYTSearch } from './Search'
import { Songs, FetchSongs, FetchSongsError, FetchSongsSuccess } from './Songs'
import {
  SetTranspose,
  GetCurrentSong,
  FetchCurrentSongChords,
  FetchCurrentSongChordsError,
  FetchCurrentSongChordsSuccess,
  MoveChordTo
} from './Player'
import { MountYTPlayer, UnMountYTPlayer, PlayerStatusChanged } from './YouTube'
import { Browse, BrowseSongs, BrowseSongsError, BrowseSongsSuccess, GotoPage } from './Browse'

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
  ToggleYTSearch,
  Songs,
  FetchSongs,
  FetchSongsError,
  FetchSongsSuccess,
  SetTranspose,
  GetCurrentSong,
  FetchCurrentSongChords,
  FetchCurrentSongChordsError,
  FetchCurrentSongChordsSuccess,
  MoveChordTo,
  MountYTPlayer,
  UnMountYTPlayer,
  PlayerStatusChanged,
  Browse,
  BrowseSongs,
  BrowseSongsError,
  BrowseSongsSuccess,
  GotoPage
}
