import {
  SONGS,
  FETCH_SONGS,
  FETCH_SONGS_ERROR,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes'

const Songs = () => ({
  type: SONGS
})
const FetchSongs = () => ({
  type: FETCH_SONGS
})
const FetchSongsError = () => ({
  type: FETCH_SONGS_ERROR
})
const FetchSongsSuccess = data => ({
  type: FETCH_SONGS_SUCCESS,
  data
})
export { Songs, FetchSongs, FetchSongsError, FetchSongsSuccess }
