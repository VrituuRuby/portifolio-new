import React, { useEffect } from 'react'

type UseDecryptTextEffect = (
  originalText: string,

  options?: {
    duration: number
    iterationsPerSecond: number
  },
) => {
  displayText: string
  decryptEffect: () => void
}
/**
 * Custom React Hook to create a decrypt text effect. Better done if using a mono spaced font.
 *
 * @param {string} originalText - The original text to decrypt.
 *
 * @returns {Object} An object containing displayText and decryptText function
 *
 * @property {string} displayText - Text which the effect will be applied.
 *
 * @property {function} decryptEffect - A function to trigger and initiate the effect.
 *
 * @example
 *  const {displayText, decryptEffect} = useDecryptTextEffect("HACKER EFFECT")
 *  return <p onMouseEnter={() => decryptEffect()}>
 *  {displayText}
 *  </p>
 */
export const useDecryptTextEffectReturn: UseDecryptTextEffect = (
  originalText,
  options = {
    duration: 30,
    iterationsPerSecond: 3,
  },
) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'

  const [displayText, setDisplayText] = React.useState(originalText)

  useEffect(() => {
    setDisplayText(originalText)
  }, [originalText])

  function decryptEffect() {
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((_, index) => {
            if (index < iterations) return originalText.split('')[index]
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join(''),
      )

      if (iterations > originalText.length) clearInterval(interval)
      iterations += 1 / options.iterationsPerSecond
    }, options.duration)
  }

  return {
    displayText,
    decryptEffect,
  }
}
