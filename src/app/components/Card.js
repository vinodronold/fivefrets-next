import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import YTImg from './utils/YTImg'
import { Title, SubHeading1 } from './html/Typography'
const Card = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  minHeight: '3rem',
  margin: '1rem',
  padding: '1rem',
  backgroundColor: 'rgba(0,0,0,0.65)',
  cursor: 'pointer',
  transition: 'all .5s',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.75)',
    transform: 'scale(1.01)'
  }
})
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

export default ({ id }) => (
  <Link href={`/play?id=${id}`}>
    <Card>
      <Left>
        <img src={YTImg('add')} alt={'YT'} />
      </Left>
      <Content>
        <Title>Title</Title>
        <SubHeading1>SubHeading1</SubHeading1>
      </Content>
    </Card>
  </Link>
)
