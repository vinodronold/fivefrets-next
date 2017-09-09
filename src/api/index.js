var router = require('express').Router()
router.use('/search', require('./search'))
router.use('/songs', require('./songs'))
module.exports = router
