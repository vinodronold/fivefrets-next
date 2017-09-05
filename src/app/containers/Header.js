import { connect } from 'react-redux'
import Bar from '../components/Bar'
const mapStateToProps = state => ({
  ...state.ui
})
export default connect(mapStateToProps)(Bar)
