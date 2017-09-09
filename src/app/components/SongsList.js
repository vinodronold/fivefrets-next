import React, { PureComponent } from 'react'
import Link from 'next/link'
import Card from './Card'
import Loader from './Loader'

export default class SongsList extends PureComponent {
  componentDidMount() {
    if (Object.keys(this.props.songs.data).length === 0) {
      this.props.Songs()
    }
  }
  render() {
    const { songs } = this.props
    return Object.keys(songs.data).length > 0 ? (
      <div>
        {Object.keys(songs.data).map(key => (
          <Link prefetch key={key} href={`/play?id=${key}`} as={`/play/${key}`}>
            <Card id={key} title={songs.data[key].title} />
          </Link>
        ))}
      </div>
    ) : (
      <Loader />
    )
  }
}
