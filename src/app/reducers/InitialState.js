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
    activeID: '',
    activechord: 1,
    status: '',
    currTime: '',
    transpose: 0
  },
  songs: {
    isFetching: false,
    isError: false,
    data: {}
  }
}
