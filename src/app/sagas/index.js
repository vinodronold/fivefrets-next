import { all, fork } from 'redux-saga/effects'
import { OpenSearchSaga } from './SearchBoxSaga'

export default function* rootSaga() {
  yield all([fork(OpenSearchSaga)])
}
