import { connect } from 'react-redux'
import glamorous from 'glamorous'

const Content = glamorous.div({ position: 'relative' }, ({ isMenuOpen, theme }) => ({
  opacity: isMenuOpen ? 0 : 1,
  zIndex: isMenuOpen ? 0 : 10,
  color: theme.color.primary()
}))

const mapStateToProps = state => ({
  ...state.menubar
})
export default connect(mapStateToProps)(Content)
