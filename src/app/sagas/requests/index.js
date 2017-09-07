const axios = require('axios')
const getJSON = (axios, url, params) => axios.get(url, params)
exports.getSearchResult = text => getJSON(axios, `http://localhost:3000/api/search/${text}`)
