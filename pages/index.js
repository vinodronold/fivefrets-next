import React from 'react'
import { rehydrate } from 'glamor'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'
import Card from '../src/app/components/Card'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Home = () => (
  <Layout>
    <Card />
    {Array(10)
      .fill(1)
      .map((_, i) => <Card />)}
  </Layout>
)

export default withReduxSaga(Home)
