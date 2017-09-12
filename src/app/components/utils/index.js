import PLAYER_STATUS from '../../constants/PlayerStatus'
import { mobile } from '../../constants/Theme'

// const Mobile = navigator.userAgent.match(/(Android|iPhone|Windows Phone|MeeGo|BB10)/i) ? true : false
const Mobile = typeof window === 'undefined' ? false : window.innerWidth <= mobile
const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
const IsPlaying = status => status === PLAYER_STATUS.PLAYING || status === PLAYER_STATUS.BUFFERING
export { Mobile, YTImg, IsPlaying }
