import { connect } from 'react-redux'
import Search from '../components/Search'
const mapStateToProps = state => ({
  ...state.menubar
})
export default connect(mapStateToProps)(Search)
