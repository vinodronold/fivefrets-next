import React from 'react'
import { rehydrate } from 'glamor'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'
import Player from '../src/app/containers/Player'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Play = ({ url }) => (
  <Layout>
    <Player id={url.query.id} title={url.query.title} />
  </Layout>
)

export default withReduxSaga(Play)
