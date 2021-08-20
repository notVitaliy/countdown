import React, { useState } from 'react'
import { Line } from '../Line/Line'

export const Lines = () => {
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const [lines, setLines] = useState(Math.floor(height / 10))

  return (
    <>
      {Array(lines)
        .fill(null)
        .map((_, idx) => (
          <Line key={idx} top={idx * 10} time={Math.random() * 5} />
        ))}
    </>
  )
}
