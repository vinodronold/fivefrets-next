import { createSelector } from 'reselect'

const GetSongs = state => state.songs.data
const GetPlayer = state => state.player

const ActiveID = player => player.activeID
const ActiveChord = player => player.activechord
const SelectSong = (songs, player) => songs[player.activeID]

export const SelectedSong = createSelector(GetSongs, GetPlayer, SelectSong)
export const GetActiveChord = createSelector(GetPlayer, ActiveChord)
export const GetActiveID = createSelector(GetPlayer, ActiveID)