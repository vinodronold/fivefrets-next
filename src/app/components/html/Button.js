import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    fontSize: '0.938rem',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    margin: '0rem .25rem',
    letterSpacing: '.2rem',
    lineHeight: '0.938rem',
    height: '2.5rem',
    background: 'transparent',
    transition: 'all .5s'
  },
  ({ theme, disabled, onDark }) => ({
    color: !disabled && theme.color.primary(),
    // color: !disabled && (onDark ? theme.color.primary : theme.color.primary),
    border: onDark ? 'none' : `solid .1rem ${theme.color.primary()}`,
    ':hover': {
      color: !disabled && theme.color.secondary(),
      border: !disabled && (onDark ? 'none' : `solid .1rem ${theme.color.secondary()}`),
      cursor: disabled && 'not-allowed'
    }
  })
)

export default Button
