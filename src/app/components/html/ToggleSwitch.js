import React from 'react'
import glamorous from 'glamorous'

const Switch = glamorous.label(
  {
    position: 'relative',
    display: 'inline-block',
    margin: '1rem'
  },
  ({ width, height }) => ({
    width: `${width}rem`,
    height: `${height}rem`
  })
)

// const SwitchInput = glamorous.input({
//   display: 'none'
// })

const Slider = glamorous.span(({ checked, width, height, theme }) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: checked ? theme.color.bg() : theme.color.bg(.5),
  transition: '.4s',
  ':before': {
    position: 'absolute',
    content: ' ',
    height: `${height * 0.8}rem`,
    width: `${width * 0.5}rem`,
    left: `${height * 0.1}rem`,
    bottom: `${height * 0.1}rem`,
    backgroundColor: theme.color.secondary(),
    transition: '.4s',
    transform: `translateX(${checked ? 0 : width * 0.4}rem)`
  }
}))

export default ({ checked = true, width = 4, height = 2, ToggleYTSearch }) => (
  <Switch
    width={width}
    height={height}
    onClick={ToggleYTSearch}>
    <Slider checked={checked} width={width} height={height} />
  </Switch>
)
