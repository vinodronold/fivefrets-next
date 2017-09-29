import { BROWSE, BROWSE_SONGS, BROWSE_SONGS_ERROR, BROWSE_SONGS_SUCCESS, GO_TO_PAGE } from '../constants/ActionTypes'

export const Browse = () => ({
  type: BROWSE
})
export const BrowseSongs = () => ({
  type: BROWSE_SONGS
})
export const BrowseSongsError = () => ({
  type: BROWSE_SONGS_ERROR
})
export const BrowseSongsSuccess = list => ({
  type: BROWSE_SONGS_SUCCESS,
  list
})
export const GotoPage = page => ({
  type: GO_TO_PAGE,
  page
})
