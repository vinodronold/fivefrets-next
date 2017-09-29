import { all, fork } from 'redux-saga/effects'
import { OpenSearchSaga } from './SearchBoxSaga'
import { GetBrowseListSaga } from './BrowseSaga'
import { GetSongsListSaga } from './SongsSaga'
import { GetCurrentSongChordsSaga } from './PlayerSaga'
import { ChordsSaga, MountYTPlayerSaga, YTPlayerStatusSaga, UnMountYTPlayerSaga } from './YTSaga'

export default function* rootSaga() {
  yield all([
    fork(OpenSearchSaga),
    fork(GetBrowseListSaga),
    fork(GetSongsListSaga),
    fork(GetCurrentSongChordsSaga),
    fork(ChordsSaga),
    fork(MountYTPlayerSaga),
    fork(YTPlayerStatusSaga),
    fork(UnMountYTPlayerSaga)
  ])
}
