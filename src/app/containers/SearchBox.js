import { connect } from 'react-redux'
import { ToggleSearch, ToggleYTSearch, SearchText, GetCurrentSong } from '../actions'
import Search from '../components/Search'
const mapStateToProps = state => ({
  ...state.ui,
  ...state.search
})
const mapDispatchToProps = dispatch => ({
  ToggleSearch: (selected = null) => {
    dispatch(ToggleSearch(selected))
  },
  ToggleYTSearch: () => {
    dispatch(ToggleYTSearch())
  },
  SearchText: text => {
    dispatch(SearchText(text))
  },
  GetCurrentSong: song => {
    dispatch(GetCurrentSong(song))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
