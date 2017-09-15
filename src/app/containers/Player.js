import { connect } from 'react-redux'
import { GetCurrentSong, SetTranspose, PlayerStatusChanged, MoveChordTo } from '../actions'
import { SelectedSong } from '../selectors'
import PlayerLayout from '../components/PlayerLayout'

const mapStateToProps = state => ({
  player: state.player,
  song: SelectedSong(state)
})
const mapDispatchToProps = dispatch => ({
  GetCurrentSong: song => {
    dispatch(GetCurrentSong(song))
  },
  SetTranspose: n => {
    dispatch(SetTranspose(n))
  },
  PlayerStatusChanged: status => {
    dispatch(PlayerStatusChanged(status))
  },
  MoveChordTo: id => {
    dispatch(MoveChordTo(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerLayout)
