import { connect } from 'react-redux'
import { ToggleMenu } from '../actions'
import MenuItems from '../components/MenuItems'

const mapStateToProps = state => ({
  ...state.ui
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems)
