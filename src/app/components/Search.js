import React from 'react'
import Router from 'next/router'
import glamorous from 'glamorous'
import Loader from './Loader'
import ToggleSwitch from './html/ToggleSwitch'
import Card from './Card'
import { Caption } from './html/Typography'

const Container = glamorous.div(
  {
    padding: '4rem'
  },
  ({ isSearchOpen, theme }) =>
    isSearchOpen && {
      padding: '2rem',
      position: 'fixed',
      backgroundColor: theme.color.bg(1),
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 12,
      marginTop: '3rem'
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

const DisplayResult = ({ result, ToggleSearch }) =>
  result.length > 0 ? (
    <Results>
      {result.map((s, idx) => (
        <Card
          key={s.id}
          id={s.id}
          title={s.title}
          height="45rem"
          onClick={() => {
            Router.push(`/play?id=${s.id}&title=${s.title}`, `/play/${s.id}`)
            Router.onRouteChangeComplete = () => {
              ToggleSearch(idx)
              Router.onRouteChangeComplete = null
            }
          }}
        />
      ))}
    </Results>
  ) : (
    <Loader />
  )

export default ({ isSearchOpen, isError, enableYT, searchVal, result, ToggleSearch, ToggleYTSearch, SearchText }) => (
  <Container isSearchOpen={isSearchOpen}>
    <div style={{ textAlign: 'center' }}>
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
    </div>
    <div style={{ textAlign: 'center' }}>
      <ToggleSwitch
        label={`${enableYT ? 'Disable' : 'Enable'} Youtube Search`}
        checked={enableYT}
        ToggleYTSearch={ToggleYTSearch}
      />
    </div>
    {isSearchOpen &&
      searchVal.length > 0 &&
      (isError ? (
        <Caption style={{ textAlign: 'center' }}>Oops.. Error.. Search did not complete.. Sorry.. </Caption>
      ) : (
        <DisplayResult result={result} ToggleSearch={ToggleSearch} />
      ))}
  </Container>
)
