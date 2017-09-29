import { connect } from 'react-redux'
import { Browse, GotoPage } from '../actions'
import BrowseSongs from '../components/BrowseSongs'
const mapStateToProps = state => ({
  ...state.browse,
  songs: state.songs.data
})
const mapDispatchToProps = dispatch => ({
  Browse: () => {
    dispatch(Browse())
  },
  GotoPage: page => {
    dispatch(GotoPage(page))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BrowseSongs)
