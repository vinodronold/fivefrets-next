import React from 'react'
import glamorous from 'glamorous'
import YTImg from './utils/YTImg'
import { Title, SubHeading1 } from './html/Typography'
const Card = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    minHeight: '3rem',
    margin: '1rem auto',
    backgroundColor: 'rgba(0,0,0,0.65)',
    cursor: 'pointer',
    transition: 'all .5s'
  },
  ({ theme }) => ({
    width: '80%',
    '&:hover': {
      color: theme.color.secondary(1)
    }
  })
)
const Left = glamorous.div({
  display: 'flex',
  marginRight: '1rem',
  alignItems: 'center',
  height: 'auto',
  width: 'auto'
})
const Content = glamorous.div({
  margin: '0 1rem',
  display: 'block'
})

export default ({ id, title, subtitle, onClick, height = 'auto' }) => (
  <Card onClick={onClick}>
    <Left>
      <img src={YTImg(id)} alt={'YT'} height={height} width={'auto'} />
    </Left>
    <Content>
      <Title>{title}</Title>
      <SubHeading1>{subtitle}</SubHeading1>
    </Content>
  </Card>
)
