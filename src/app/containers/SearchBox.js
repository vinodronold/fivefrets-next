import { connect } from 'react-redux'
import { ToggleSearch, SearchText } from '../actions'
import Search from '../components/Search'
const mapStateToProps = state => ({
  ...state.ui,
  ...state.search
})
const mapDispatchToProps = dispatch => ({
  ToggleSearch: () => {
    dispatch(ToggleSearch)
  },
  SearchText: text => {
    dispatch(SearchText(text))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
