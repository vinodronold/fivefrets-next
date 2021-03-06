import axios from 'axios'
const SendAxiosRequest = axios.create({
  baseURL: 'http://localhost:3000/api/'
})
export const getSearchResults = async text => {
  return await SendAxiosRequest.get(`search/${text}`)
}
export const getChords = async id => {
  return await SendAxiosRequest.get(`songs/chords/${id}`)
}
export const getBrowseListByPage = async page => {
  let res = await SendAxiosRequest.get(`songs/browse/`)
  return await res.data
}
export default SendAxiosRequest
