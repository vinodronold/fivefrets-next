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

const _Login_Page = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '3rem' }}>LOGIN: PAGE NOT BUILD</div>
  </Layout>
)
// const _Login_Page = () => [<div key="1">TEST 1</div>, <div key="2">TEST 2</div>, <div key="3">TEST 3</div>]

export default withReduxSaga(_Login_Page)
