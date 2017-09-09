import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import SongsReducer from './SongsReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer,
  songs: SongsReducer
})
