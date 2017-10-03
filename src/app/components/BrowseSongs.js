import React, { Component } from 'react'
import glamorous from 'glamorous'
import Link from 'next/link'
import WrapperDiv from './utils/WrapperDiv'
import Button from './html/Button'
import Loader from './Loader'
const Container = glamorous.div({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
})
const SongList = glamorous.div({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
})
const Items = glamorous.a(
  {
    padding: '.5rem 1rem',
    cursor: 'pointer'
  },
  ({ theme }) => ({
    '&:hover': {
      color: theme.color.secondary()
    }
  })
)

const DisplayList = ({ list, curr_page, total_page }) => (
  <SongList>
    {list.map(s => (
      <Link prefetch key={s} href={`/play?id=${s}`} as={`/p/${s}`}>
        <Items>{s}</Items>
      </Link>
    ))}
  </SongList>
)
export default class BrowseSongs extends Component {
  componentDidMount() {
    console.log(this.props.url.start)
    this.props.Browse(this.props.url.start)
  }
  render() {
    const { list, curr_page, total_page, GotoPage } = this.props
    return (
      <WrapperDiv>
        {this.props.url.start}
        <Container>
          {['0 - 1', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map(a => (
            <Link prefetch key={a} href={`/browse?start=${a.substr(0, 1)}`} as={`/b/${a.substr(0, 1)}`}>
              <Button style={{ padding: '.5rem' }}>{a}</Button>
            </Link>
          ))}
        </Container>
        {list[1] ? <DisplayList list={list[1]} curr_page={curr_page} total_page={total_page} /> : <Loader />}
        <Container>
          <Button
            disabled={curr_page === 1}
            onClick={() => {
              GotoPage(curr_page - 1)
            }}>
            &#8606; Prev
          </Button>
          <Button
            onClick={() => {
              GotoPage(1)
            }}>
            {`${curr_page} of ${total_page}`}
          </Button>
          <Button
            disabled={curr_page === total_page}
            onClick={() => {
              GotoPage(curr_page + 1)
            }}>
            Next &#8608;
          </Button>
        </Container>
      </WrapperDiv>
    )
  }
}
