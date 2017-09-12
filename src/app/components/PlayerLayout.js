import React, { Component } from 'react'
import PlayerAssembled from './PlayerAssembled'
import Loader from './Loader'

export default class PlayerLayout extends Component {
  componentDidMount() {
    const { id, title, GetCurrentSong, song } = this.props
    if (!song) {
      GetCurrentSong({ id, title })
    }
  }
  render() {
    return this.props.song ? <PlayerAssembled {...this.props} /> : <Loader />
  }
}
