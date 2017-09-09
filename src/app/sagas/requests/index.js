import axios from 'axios'
const SendAxiosRequest = axios.create({
  baseURL: 'http://localhost:3000'
})
export const getSearchResults = async text => {
  return await SendAxiosRequest.get(`api/search/${text}`)
}
export default SendAxiosRequest
