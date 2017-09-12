var router = require('express').Router()
router.route('/').get((req, res) => {
  res.json({})
})
router.route('/latest').get((req, res) => {
  res.json({
    IarsrX60bZw: {
      title: 'Thalli Pogathey',
      subtitle: 'subtitle'
    },
    b876JFQ2dp4: {
      title: 'Thalli Pogathey',
      subtitle: 'subtitle'
    },
    AxoZv5KTsSA: {
      title: 'Achcham Yenbadhu Madamaiyada -Thalli Pogathey',
      subtitle: 'subtitle'
    },
    'k6co-F5XjKw': {
      title: 'Thalli Pogathey Official',
      subtitle: 'subtitle'
    }
  })
})
router.route('/chords/:id').get((req, res) => {
  res.json({
    [req.params.id]: {
      title: req.params.id,
      diagram: [
        { r: 1, q: 1 },
        { r: 1, q: 2 },
        { r: 2, q: 1 },
        { r: 2, q: 2 },
        { r: 3, q: 1 },
        { r: 3, q: 2 },
        { r: 4, q: 1 },
        { r: 4, q: 2 },
        { r: 5, q: 1 },
        { r: 5, q: 2 },
        { r: 6, q: 1 },
        { r: 6, q: 2 },
        { r: 7, q: 1 },
        { r: 7, q: 2 },
        { r: 8, q: 1 },
        { r: 8, q: 2 },
        { r: 9, q: 1 },
        { r: 9, q: 2 },
        { r: 10, q: 1 },
        { r: 10, q: 2 },
        { r: 11, q: 1 },
        { r: 11, q: 2 },
        { r: 12, q: 1 },
        { r: 12, q: 2 }
      ],
      chords: {
        1: { r: 1, q: 2, t: 1 },
        2: { r: 3, t: 2 },
        3: { r: 4, t: 3 },
        4: { r: 6, q: 2, t: 4 },
        5: { r: 8, t: 5 },
        6: { r: 9, t: 6 },
        7: { r: 11, q: 2, t: 7 },
        8: { r: 1, t: 8 },
        9: { r: 3, t: 9 },
        10: { r: 4, q: 2, t: 10 },
        11: { r: 6, q: 2, t: 11 },
        12: { r: 8, q: 2, t: 12 },
        13: { r: 9, t: 13 },
        14: { r: 11, t: 14 },
        15: { r: 1, t: 15 },
        16: { r: 3, t: 16 },
        17: { r: 4, t: 17 },
        18: { r: 6, t: 18 },
        19: { r: 8, t: 19 },
        20: { r: 9, t: 20 },
        21: { r: 11, t: 21 },
        22: { r: 1, t: 22 },
        23: { r: 3, t: 23 },
        24: { r: 4, t: 24 },
        25: { r: 6, t: 25 },
        26: { r: 8, t: 26 },
        27: { r: 9, t: 27 },
        28: { r: 11, t: 28 },
        29: { r: 1, t: 29 },
        30: { r: 3, t: 30 },
        31: { r: 4, t: 31 },
        32: { r: 6, t: 32 },
        33: { r: 8, t: 33 },
        34: { r: 9, t: 34 },
        35: { r: 11, t: 35 },
        36: { r: 1, t: 36 },
        37: { r: 3, t: 37 },
        38: { r: 4, t: 38 },
        39: { r: 6, t: 39 },
        40: { r: 8, t: 40 },
        41: { r: 9, t: 41 },
        42: { r: 11, t: 42 },
        43: { r: 1, t: 43 },
        44: { r: 3, t: 44 },
        45: { r: 4, t: 45 },
        46: { r: 6, t: 46 },
        47: { r: 8, t: 47 },
        48: { r: 9, t: 48 },
        49: { r: 11, t: 49 },
        50: { r: 1, t: 50 },
        51: { r: 3, t: 51 },
        52: { r: 4, t: 52 },
        53: { r: 6, t: 53 },
        54: { r: 8, t: 54 },
        55: { r: 9, t: 55 },
        56: { r: 11, t: 56 },
        57: { r: 1, t: 57 },
        58: { r: 3, t: 58 },
        59: { r: 4, t: 59 },
        60: { r: 6, t: 60 }
      }
    }
  })
})

module.exports = router
