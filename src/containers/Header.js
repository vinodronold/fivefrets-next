import { connect } from 'react-redux'
import { ToggleMenu } from '../actions'
import MenuBar from '../components/MenuBar'

const mapStateToProps = state => ({
  ...state.menubar
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
