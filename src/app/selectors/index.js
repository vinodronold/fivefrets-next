import { createSelector } from 'reselect'

const GetSongs = state => state.songs.data
const GetPlayer = state => state.player
const SelectSong = (songs, player) => songs[player.activeID]

export const SelectedSong = createSelector(GetSongs, GetPlayer, SelectSong)
