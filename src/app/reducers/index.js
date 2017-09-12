import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import PlayerReducer from './PlayerReducer'
import SongsReducer from './SongsReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer,
  player: PlayerReducer,
  songs: SongsReducer
})
