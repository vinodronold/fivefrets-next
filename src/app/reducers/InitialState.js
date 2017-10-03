export default {
  ui: {
    isMenuOpen: false,
    isSearchOpen: false,
    searchVal: ''
  },
  search: {
    searchVal: '',
    enableYT: false,
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
    start: '',
    curr_page: 0,
    total_page: 0,
    list: {}
  },
  songs: {
    isFetching: false,
    isError: false,
    data: {}
  }
}
