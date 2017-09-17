import React from 'react'
import { rehydrate } from 'glamor'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'
import BrowseList from '../src/app/containers/BrowseList'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const _Browse_Page = () => (
  <Layout>
    <BrowseList />
  </Layout>
)

export default withReduxSaga(_Browse_Page)
