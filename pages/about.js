import React from 'react'
import { rehydrate } from 'glamor'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const _Browse_Page = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '3rem' }}>ABOUT: PAGE NOT BUILD</div>
  </Layout>
)

export default withReduxSaga(_Browse_Page)
