import React from 'react'
import Router from 'next/router'
import glamorous from 'glamorous'
import Loader from './Loader'
import Card from './Card'
import { Caption } from './html/Typography'

const Container = glamorous.div(
  {
    padding: '2rem'
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
    backgroundColor: 'rgba(0,0,0,0)',
    borderStyle: 'none',
    width: '80%',
    borderBottom: '2px solid #FFF',
    '&:focus': {
      outline: 'none'
    }
  },
  ({ theme, isSearchOpen }) => ({
    color: theme.color.primary(),
    textAlign: isSearchOpen ? 'left' : 'center',
    fontSize: isSearchOpen ? '4rem' : '2rem'
  })
)
const Results = glamorous.div({
  padding: '1rem',
  display: 'block'
})

const DisplayResult = ({ result, ToggleSearch, SearchResultClick }) =>
  result.length > 0 ? (
    <Results>
      {result.map(s => (
        <Card
          key={s.id}
          id={s.id}
          title={s.title}
          height="45rem"
          onClick={() => {
            Router.push(`/play?id=${s.id}`, `/play/${s.id}`)
            Router.onRouteChangeComplete = () => {
              ToggleSearch()
              SearchResultClick(s)
              Router.onRouteChangeComplete = null
            }
          }}
        />
      ))}
    </Results>
  ) : (
    <Loader />
  )

export default ({ isSearchOpen, isError, searchVal, result, ToggleSearch, SearchText, SearchResultClick }) => (
  <Container isSearchOpen={isSearchOpen}>
  <div style={{textAlign: 'center'}}>
    <Search
      type="text"
      value={searchVal}
      placeholder="Search"
      isSearchOpen={isSearchOpen}
      onChange={e => {
        !isSearchOpen && ToggleSearch()
        SearchText(e.target.value)
      }}
    /></div>
    {isSearchOpen &&
      searchVal.length > 0 &&
      (isError ? (
        <Caption>Oops.. Error.. Search did not complete.. Sorry.. </Caption>
      ) : (
        <DisplayResult result={result} ToggleSearch={ToggleSearch} SearchResultClick={SearchResultClick} />
      ))}
  </Container>
)
