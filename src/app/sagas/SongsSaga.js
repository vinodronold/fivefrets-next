import { takeLatest, put } from 'redux-saga/effects'
import { SONGS } from '../constants/ActionTypes'
import { FetchSongs, FetchSongsError, FetchSongsSuccess } from '../actions'
import axios from 'axios'

const getSongs = async () => await axios.get(`api/songs/latest`)

const GetSongsList = function*() {
  try {
    yield put(FetchSongs())
    let data = yield getSongs()
    yield put(FetchSongsSuccess(data.data))
  } catch (error) {
    yield put(FetchSongsError())
  }
}

const GetSongsListSaga = function*() {
  yield takeLatest(SONGS, GetSongsList)
}

export { GetSongsListSaga }
