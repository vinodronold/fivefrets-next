import { MOUNT_YT_PLAYER, UNMOUNT_YT_PLAYER, YT_PLAYER_STATUS_CHANGED } from '../constants/ActionTypes'

export const MountYTPlayer = playerID => ({
  type: MOUNT_YT_PLAYER,
  playerID
})
export const UnMountYTPlayer = playerID => ({
  type: UNMOUNT_YT_PLAYER,
  playerID
})
export const PlayerStatusChanged = status => ({
  type: YT_PLAYER_STATUS_CHANGED,
  status
})
