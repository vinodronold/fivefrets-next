import { connect } from 'react-redux'
import { ToggleSearch, SearchText, SearchResultClick } from '../actions'
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
  },
  SearchResultClick: song => {
    dispatch(SearchResultClick(song))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
