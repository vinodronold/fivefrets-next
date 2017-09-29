import { takeLatest, put } from 'redux-saga/effects'
import { BROWSE } from '../constants/ActionTypes'
import { BrowseSongs, BrowseSongsSuccess, BrowseSongsError } from '../actions'
import { getBrowseListByPage } from './requests'

const GetBrowseList = function*() {
  yield put(BrowseSongs())
  try {
    const list = yield getBrowseListByPage(1)
    yield put(BrowseSongsSuccess(list))
  } catch (error) {
    yield put(BrowseSongsError())
  }
}

const GetBrowseListSaga = function*() {
  yield takeLatest(BROWSE, GetBrowseList)
}

export { GetBrowseListSaga }
