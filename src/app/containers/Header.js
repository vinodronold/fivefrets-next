import { connect } from 'react-redux'
import Bar from '../components/Bar'
const mapStateToProps = state => ({
  ...state.menubar
})
export default connect(mapStateToProps)(Bar)
