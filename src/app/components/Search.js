import React from 'react'
import Router from 'next/router'
import glamorous from 'glamorous'
import Loader from './Loader'
import { Caption } from './html/Typography'

const Container = glamorous.div(
  {
    padding: '4rem 1rem',
    textAlign: 'center'
  },
  ({ isSearchOpen, theme }) =>
    isSearchOpen && {
      position: 'fixed',
      backgroundColor: theme.color.bg(1),
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 12,
      margin: 0
    }
)
const Search = glamorous.input(
  {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0)',
    borderStyle: 'none',
    fontSize: '2rem',
    borderBottom: '2px solid #FFF',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    }
  },
  ({ theme }) => ({
    color: theme.color.primary()
  })
)
const Results = glamorous.div({
  padding: '2rem',
  display: 'block'
})
const Item = glamorous.div({
  padding: '1rem',
  textAlign: 'center',
  cursor: 'pointer'
})

const DisplayResult = ({ result, ToggleSearch }) =>
  result.length > 0 ? (
    <Results>
      {result.map((s, i) => (
        <Item
          key={s.id.videoId}
          onClick={() => {
            Router.push({
              pathname: '/play',
              query: { id: s.id.videoId }
            })
            Router.onRouteChangeComplete = () => {
              ToggleSearch()
            }
          }}>
          {s.snippet.title}
        </Item>
      ))}
    </Results>
  ) : (
    <Loader />
  )

export default ({ isSearchOpen, isError, searchVal, result, ToggleSearch, SearchText }) => (
  <Container isSearchOpen={isSearchOpen}>
    <Search
      type="text"
      value={searchVal}
      placeholder="Search"
      isSearchOpen={isSearchOpen}
      onChange={e => {
        !isSearchOpen && ToggleSearch()
        SearchText(e.target.value)
      }}
    />
    {isSearchOpen &&
      searchVal.length > 0 &&
      (isError ? (
        <Caption>Oops.. Error.. Search did not complete.. Sorry.. </Caption>
      ) : (
        <DisplayResult result={result} ToggleSearch={ToggleSearch} />
      ))}
  </Container>
)
