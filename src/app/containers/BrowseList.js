import { connect } from 'react-redux'
import { Songs } from '../actions'
import BrowseSongs from '../components/BrowseSongs'
const mapStateToProps = state => ({
  ...state.browse,
  songs: state.songs.data
})
const mapDispatchToProps = dispatch => ({
  Songs: () => {
    dispatch(Songs())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BrowseSongs)
