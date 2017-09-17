import React from 'react'
import glamorous from 'glamorous'
import WrapperDiv from './utils/WrapperDiv'
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
const BrowseItems = glamorous.a(
  {
    margin: '.5rem',
    cursor: 'pointer'
  },
  ({ theme }) => ({
    '&:hover': {
      color: theme.color.secondary()
    }
  })
)
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

const PageNum = glamorous.a(
  {
    display: 'flex',
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    padding: 'auto',
    lineHeight: '1rem',
    borderRadius: '50%',
    fontSize: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 .25rem'
  },
  ({ theme }) => ({
    backgroundColor: theme.color.secondary(),
    '&:hover': {
      backgroundColor: theme.color.secondary(0.75)
    }
  })
)

export default ({ pages, list, songs }) => (
    <WrapperDiv>
      <Container>
        {['0 - 1', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map(a => <BrowseItems key={a}>{a}</BrowseItems>)}
      </Container>
      <SongList>{list[1].map(s => <Items key={s}>{s}</Items>)}</SongList>
      <Container>
        {Array(pages - 1)
          .fill(1)
          .map((_, x) => <PageNum key={x}>{x + 1}</PageNum>)}
      </Container>
    </WrapperDiv>
  )