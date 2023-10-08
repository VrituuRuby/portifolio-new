'use client'
import React, { useRef } from 'react'

const CursorBlob: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    document.addEventListener('pointermove', (event) => {
      const { clientX, clientY } = event

      if (cursorRef.current)
        cursorRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: 'forwards' },
        )
    })
  }, [])

  return (
    <div
      className="
        rounded-full 
        opacity-70
        bg-gradient-to-t from-[#F31818] to-[#987DE4]
        -z-50  
        h-[500px]
        aspect-square
        fixed
        animate-blob-spin
        left-1/2 
        top-1/2 
        centralize
        "
      ref={cursorRef}
    ></div>
  )
}

export default CursorBlob
