import axios from 'axios'
const SendAxiosRequest = axios.create({
  baseURL: 'http://localhost:3000'
})
export const getSearchResults = async text => {
  return await SendAxiosRequest.get(`api/search/${text}`)
}
export const getChords = async id => {
  return await SendAxiosRequest.get(`api/songs/chords/${id}`)
}
export default SendAxiosRequest
