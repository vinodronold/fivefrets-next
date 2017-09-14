/**
 * shape {
 *  chord{
 *    type: {
 *      b: barre
 *      p: [string6,string2,string3,string4,string5,string1]
 *    }   
 *  }
 * }
 */
const barre_common_E_shape = s => ({
  1: {
    b: 1,
    s,
    p: [0, 3, 3, 2, 0, 0]
  },
  2: {
    b: 1,
    s,
    p: [0, 3, 3, 0, 0, 0]
  }
})
const barre_common_A_shape = s => ({
  1: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 3, 0]
  },
  2: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 2, 0]
  }
})

export default {
  1: {
    1: {
      b: 0,
      p: [0, 0, 2, 2, 2, 0]
    },
    2: {
      b: 0,
      p: [0, 0, 2, 2, 1, 0]
    }
  },
  2: barre_common_A_shape(1),
  3: barre_common_A_shape(2),
  4: {
    1: {
      b: 0,
      p: [0, 3, 2, 0, 1, 0]
    },
    2: {
      b: 1,
      s: 3,
      p: [0, 0, 3, 3, 2, 0]
    }
  },
  5: barre_common_A_shape(4),
  6: {
    1: {
      b: 0,
      p: [0, 0, 0, 2, 3, 2]
    },
    2: {
      b: 0,
      p: [0, 0, 0, 2, 3, 1]
    }
  },
  7: barre_common_A_shape(6),
  8: {
    1: {
      b: 0,
      p: [0, 2, 2, 1, 0, 0]
    },
    2: {
      b: 0,
      p: [0, 2, 2, 0, 0, 0]
    }
  },
  9: barre_common_E_shape(1),
  10: barre_common_E_shape(2),
  11: {
    1: {
      b: 0,
      p: [3, 2, 0, 0, 3, 3]
    },
    2: {
      b: 1,
      s: 3,
      p: [0, 3, 3, 0, 0, 0]
    }
  },
  12: barre_common_E_shape(4)
}
