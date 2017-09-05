import React from 'react'
import glamorous from 'glamorous'

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

// export default class SearchComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.value = null
//   }

//   render = () => {
//     const { isSearchOpen, ToggleSearch } = this.props
//     return (
//       <Container isSearchOpen={isSearchOpen}>
//         <Search
//           type="text"
//           value={this.value}
//           placeholder="Search"
//           isSearchOpen={isSearchOpen}
//           onFocus={ToggleSearch}
//         />
//       </Container>
//     )
//   }
// }

export default ({ isSearchOpen, searchVal, ToggleSearch, SearchText }) => (
  <Container isSearchOpen={isSearchOpen}>
    <Search
      type="text"
      value={searchVal}
      placeholder="Search"
      isSearchOpen={isSearchOpen}
      onFocus={ToggleSearch}
      onChange={e => SearchText(e.target.value)}
    />
  </Container>
)
