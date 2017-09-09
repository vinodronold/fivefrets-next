import { connect } from 'react-redux'
import { Songs } from '../actions'
import SongsList from '../components/SongsList'
const mapStateToProps = state => ({
  songs: state.songs
})
const mapDispatchToProps = dispatch => ({
  Songs: () => {
    dispatch(Songs())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SongsList)
