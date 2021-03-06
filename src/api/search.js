var router = require('express').Router()
var YoutubeDataAPI = require('./utils/YoutubeDataAPI')

router.route('/').get((req, res) => {
  res.json([])
})

router.route('/:text').get((req, res, next) => {
  YoutubeDataAPI.get(`/search`, {
    params: {
      q: req.params.text
    }
  })
    .then(response => {
      res.json(response.data.items.map(s => ({ id: s.id.videoId, title: s.snippet.title })))
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router
