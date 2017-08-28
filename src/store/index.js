import { applyMiddleware, createStore } from 'redux'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import logger from 'redux-logger'
import InitialState from '../reducers/InitialState'
import rootReducer from '../reducers'

export const ConfigureStore = (InitState = InitialState) => createStore(rootReducer, InitState, applyMiddleware(logger))
// export const withReduxSaga = BaseComponent => withRedux(ConfigureStore)(nextReduxSaga(BaseComponent))
export const withReduxSaga = BaseComponent => withRedux(ConfigureStore)(BaseComponent)
