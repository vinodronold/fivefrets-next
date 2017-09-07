import { takeLatest, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SEARCH_TEXT } from '../constants/ActionTypes'
import { FetchSearchText, FetchSearchTextSuccess, FetchSearchTextError } from '../actions'
import axios from 'axios'

const getSearchResults = async text => {
  return await axios.get(`api/search/${text}`)
}

const OpenSearch = function*({ text }) {
  yield call(delay, 500)
  try {
    yield put(FetchSearchText())
    let result = yield getSearchResults(text)
    yield put(FetchSearchTextSuccess(result.data))
  } catch (error) {
    yield put(FetchSearchTextError())
  }
}

const OpenSearchSaga = function*() {
  yield takeLatest(SEARCH_TEXT, OpenSearch)
}

export { OpenSearchSaga }
