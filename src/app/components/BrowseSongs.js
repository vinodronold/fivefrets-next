import React, { Component } from 'react'
import glamorous from 'glamorous'
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
  <SongList>{list.map(s => <Items key={s}>{s}</Items>)}</SongList>
)
export default class BrowseSongs extends Component {
  componentDidMount() {
    this.props.Browse()
  }
  render() {
    const { list, curr_page, total_page, GotoPage } = this.props
    return (
      <WrapperDiv>
        <Container>
          {['0 - 1', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map(a => (
            <Button key={a} style={{ padding: '.5rem' }}>
              {a}
            </Button>
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
