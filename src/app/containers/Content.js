import { connect } from 'react-redux'
import glamorous from 'glamorous'

const Content = glamorous.div({ position: 'relative', minHeight: '100vh' }, ({ isMenuOpen, theme }) => ({
  opacity: isMenuOpen ? 0 : 1,
  zIndex: isMenuOpen ? 0 : 10,
  color: theme.color.primary()
}))

const mapStateToProps = state => ({
  ...state.ui
})
export default connect(mapStateToProps)(Content)
