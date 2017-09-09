import { connect } from 'react-redux'
import Chords from '../components/Chords'

const mapStateToProps = state => ({
  songs: state.songs
})
const mapDispatchToProps = dispatch => ({
  Songs: () => {}
})
export default connect(mapStateToProps, mapDispatchToProps)(Chords)
