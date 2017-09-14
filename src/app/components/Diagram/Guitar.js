import React from 'react'
import glamorous from 'glamorous'
import Theme from '../../constants/Theme'
import { GetChordName, GetGuitarChordShape } from './chordMeta'

const Container = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '1rem'
})

const SVGText = ({ x, y, fontSize = 12, fill = Theme.color.primary(), children }) => (
  <text x={x} y={y} stroke={'none'} fill={fill} fontSize={`${fontSize}px`}>
    {children}
  </text>
)

const Barre = ({ stroke, fret = 1 }) =>
  fret > 0 ? <ellipse cx="100" cy={50 * fret} fill={stroke} strokeWidth="1.5" ry="3" rx="80" /> : null

const FretBoard = ({ children, fill, stroke, height = '15rem', r, q, x, style, ...rest }) => {
  let ChordShape = GetGuitarChordShape(r, q, x)
  let start = ChordShape.s ? ChordShape.s : 1
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 250"
      style={{
        position: 'relative',
        height: height,
        width: 'auto',
        ...style
      }}
      {...rest}>
      <path fill={fill} d="M-1-1h202v252H-1z" />
      <g stroke={stroke}>
        <path fill={fill} strokeWidth="1.5" d="M25 25h150v200H25z" />
        <path
          fill="none"
          strokeOpacity="null"
          strokeWidth="1.5"
          d="M26 75h150M26 125h150M26 175h150M56 26v199M86 26v199m30-199v199m30-199v199"
          strokeLinecap="null"
          strokeLinejoin="null"
        />
        <SVGText x="95" y="20" fontSize="16">
          {GetChordName(r, q, x)}
        </SVGText>
        <SVGText x="9.5" y="50">
          {start}
        </SVGText>
        <SVGText x="9.5" y="100">
          {start + 1}
        </SVGText>
        <SVGText x="9.5" y="150">
          {start + 2}
        </SVGText>
        <SVGText x="9.5" y="200">
          {start + 3}
        </SVGText>
        <Barre fret={ChordShape.b} stroke={stroke} />
        {ChordShape.p.map(
          (f, i) =>
            f > 0 && f <= 4 ? (
              <ellipse
                key={i}
                cx={26 + 30 * i}
                cy={50 * f}
                fill={stroke}
                strokeOpacity="null"
                strokeWidth="1.5"
                ry="5"
                rx="5"
              />
            ) : null
        )}
      </g>
    </svg>
  )
}

export default ({ chordsToDraw, x = 0 }) =>
  chordsToDraw ? (
    <Container>
      {chordsToDraw.map(({ r, q }, i) => (
        <FretBoard key={i} r={r} q={q} x={x} fill={Theme.color.bg(0)} stroke={Theme.color.primary()} />
      ))}
    </Container>
  ) : null
