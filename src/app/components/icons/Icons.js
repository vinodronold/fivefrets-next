import React from 'react'
export default ({ children, fill = 'currentcolor', height = '24px', shapeRendering = 'auto', style, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill={fill}
    style={{
      position: 'relative',
      height: height,
      width: height,
      shapeRendering: shapeRendering,
      ...style
    }}
    {...rest}>
    {children}
  </svg>
)
