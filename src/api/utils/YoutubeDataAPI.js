var axios = require('axios')
var YoutubeDataAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: '5',
    type: 'video',
    videoCategoryId: '10',
    fields: 'items(id,snippet/title,snippet/thumbnails/default/url)',
    key: 'AIzaSyDt03O45GRK2doERZICfzCgUbeXVFtLpiY'
  }
})

module.exports = YoutubeDataAPI
