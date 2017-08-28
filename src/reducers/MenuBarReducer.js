import { TOGGLE_MENU } from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.menubar, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { isMenuOpen: !state.isMenuOpen })
    default:
      return state
  }
}
