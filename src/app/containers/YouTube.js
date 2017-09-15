import { connect } from 'react-redux'
import { MountYTPlayer, UnMountYTPlayer } from '../actions'
import YTFrame from '../components/YTFrame'

const mapStateToProps = state => ({
  player: state.player
})
const mapDispatchToProps = dispatch => ({
  MountYTPlayer: playerID => {
    dispatch(MountYTPlayer(playerID))
  },
  UnMountYTPlayer: playerID => {
    dispatch(UnMountYTPlayer(playerID))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(YTFrame)
