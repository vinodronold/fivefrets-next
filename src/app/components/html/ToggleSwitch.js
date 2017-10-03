import React from 'react'
import glamorous from 'glamorous'

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Switch = glamorous.label(
  {
    position: 'relative',
    display: 'inline-block',
    margin: '1rem',
    border: '1px solid #fff'
  },
  ({ width, height }) => ({
    width: `${width}rem`,
    height: `${height}rem`
  })
)

const SwitchInput = glamorous.input({
  display: 'none'
})

const Slider = glamorous.span(({ checked, width, height, theme }) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: checked ? theme.color.bg() : theme.color.bg(0.5),
  transition: '.4s',
  ':before': {
    position: 'absolute',
    content: checked ? 'ON' : 'OFF',
    fontSize: '.6rem',
    textAlign: 'center',
    color: theme.color.bg(),
    height: `${height * 0.8}rem`,
    width: `${width * 0.5}rem`,
    left: `${height * 0.1}rem`,
    bottom: `${height * 0.1}rem`,
    backgroundColor: checked ? theme.color.secondary() : theme.color.primary(),
    transition: '.4s',
    transform: `translateX(${checked ? 0 : width * 0.4}rem)`
  }
}))

export default ({ label, checked = true, width = 4, height = 1, ToggleYTSearch }) => (
  <Container>
    <span>{label}</span>
    <Switch width={width} height={height}>
      <Slider checked={checked} width={width} height={height} />
      <SwitchInput type="checkbox" checked={checked} onChange={ToggleYTSearch} />
    </Switch>
  </Container>
)
