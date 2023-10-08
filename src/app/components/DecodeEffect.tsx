'use client'
import React, { HTMLAttributes, ReactNode, useEffect } from 'react'

interface DecodeEffectProps extends HTMLAttributes<HTMLSpanElement> {
  children: string
}
const DecodeEffect: React.FC<DecodeEffectProps> = ({ children, ...rest }) => {
  const [displayText, setDisplayText] = React.useState(children)

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'

  useEffect(() => {
    setDisplayText(children)
  }, [children])

  function randomize() {
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split('')
          .map((_, index) => {
            if (index < iterations) return children.split('')[index]
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join(''),
      )

      if (iterations > children.length) clearInterval(interval)
      iterations += 1 / 3
    }, 30)
  }
  return (
    <div onMouseOver={() => randomize()} {...rest}>
      {displayText}
    </div>
  )
}

export default DecodeEffect
