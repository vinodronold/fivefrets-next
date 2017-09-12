import { takeLatest, put } from 'redux-saga/effects'
import { GET_CURRENT_SONG } from '../constants/ActionTypes'
import { FetchCurrentSongChords, FetchCurrentSongChordsSuccess } from '../actions'
import { getChords } from './requests'

const GetCurrentSongChords = function*({ song }) {
  yield put(FetchCurrentSongChords())
  let chords = yield getChords(song.id)
  yield put(FetchCurrentSongChordsSuccess(song.id, chords.data[song.id]))
}

const GetCurrentSongChordsSaga = function*() {
  yield takeLatest(GET_CURRENT_SONG, GetCurrentSongChords)
}

export { GetCurrentSongChordsSaga }
