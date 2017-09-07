import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer
})
