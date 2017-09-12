import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    fontSize: '0.938rem',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    letterSpacing: '.2rem',
    lineHeight: '0.938rem',
    height: '2.5rem',
    background: 'transparent',
    border: 'none',
    transition: 'all .5s',
    '&:focus': {
      outline: 'none'
    }
  },
  ({ theme, disabled }) => ({
    color: !disabled && theme.color.primary(),
    ':hover': {
      color: !disabled && theme.color.secondary(),
      cursor: disabled && 'not-allowed'
    }
  })
)

export default Button
