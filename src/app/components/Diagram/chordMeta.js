import guitarChordShape from './guitarChordShape'
const chord = {
  1: `A`,
  2: `B\u266D`,
  3: `B`,
  4: `C`,
  5: `C\u266F`,
  6: `D`,
  7: `D\u266F`,
  8: `E`,
  9: `F`,
  10: `F\u266F`,
  11: `G`,
  12: `G\u266F`,
  13: `N`
}
const quality = {
  1: '' /* Major */,
  2: 'm' /* Minor */
}
const Transpose = (c, xpose) => {
  let _c = Number(c) + Number(xpose) % 12
  _c = _c <= 0 ? _c + 12 : _c
  _c = _c > 12 ? _c % 12 : _c
  return _c
}

export const GetChordName = (c, q = 1, xpose = 0) => {
  if (!c) {
    return ''
  }
  if (c === 13) {
    return chord[c]
  }
  return `${chord[Transpose(c, xpose)]}${quality[q]}`
}
export const GetGuitarChordShape = (c, q = 1, xpose = 0) => guitarChordShape[Transpose(c, xpose)][q]