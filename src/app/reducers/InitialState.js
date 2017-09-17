export default {
  ui: {
    isMenuOpen: false,
    isSearchOpen: false,
    searchVal: ''
  },
  search: {
    searchVal: '',
    selected: null,
    isFetching: false,
    isError: false,
    result: []
  },
  player: {
    isFetching: false,
    isError: false,
    playerID: '',
    activeID: '',
    activechord: 1,
    status: -1,
    transpose: 0
  },
  browse: {
    isFetching: false,
    isError: false,
    pages: 0,
    list: {}
  },
  songs: {
    isFetching: false,
    isError: false,
    data: {}
  }
}
