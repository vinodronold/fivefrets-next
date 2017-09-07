const requests = require('./requests')
requests
  .getSearchResult('abcd')
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err.response)
  })
