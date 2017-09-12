import { all, fork } from 'redux-saga/effects'
import { OpenSearchSaga } from './SearchBoxSaga'
import { GetSongsListSaga } from './SongsSaga'
import { GetCurrentSongChordsSaga } from './PlayerSaga'

export default function* rootSaga() {
  yield all([fork(OpenSearchSaga), fork(GetSongsListSaga), fork(GetCurrentSongChordsSaga)])
}
