import { all, fork } from 'redux-saga/effects'
import { OpenSearchSaga } from './SearchBoxSaga'
import { GetSongsListSaga } from './SongsSaga'

export default function* rootSaga() {
  yield all([fork(OpenSearchSaga), fork(GetSongsListSaga)])
}
