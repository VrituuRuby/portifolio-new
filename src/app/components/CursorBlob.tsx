'use client'
import React, { useRef } from 'react'

const CursorBlob: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event

      if (cursorRef.current)
        cursorRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 5000, fill: 'forwards' },
        )
    })
  }, [])
  return (
    <div
      className="-z-50 h-[800px] aspect-square fixed justify-center left-1/2 top-1/2 items-center rounded-full -translate-x-1/2 -translate-y-1/2"
      ref={cursorRef}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-blob-spin"
      >
        <defs>
          <linearGradient id="0" x1="0.15" y1="0.85" x2="0.85" y2="0.15">
            <stop offset="0%" stopColor="#FF1D53" />
            <stop offset="50%" stopColor="#ec1bda" />
            <stop offset="100%" stopColor="#58E1FF" />
          </linearGradient>
        </defs>
        <path fill="url(#0)" transform="translate(100 100)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M34.6,-62.8C41.3,-56.1,40.9,-39.7,44.5,-27.6C48.2,-15.6,55.9,-7.8,62.7,3.9C69.4,15.6,75.2,31.2,68.9,38.5C62.5,45.9,44,44.9,30.4,47.8C16.9,50.7,8.5,57.4,-3.8,64C-16.1,70.6,-32.2,77.1,-36.2,68.7C-40.1,60.3,-31.9,37,-36.5,23.1C-41.2,9.1,-58.7,4.6,-63.1,-2.6C-67.6,-9.7,-59,-19.4,-52.3,-29.8C-45.6,-40.2,-40.8,-51.2,-32.4,-57C-23.9,-62.8,-12,-63.4,1,-65.1C13.9,-66.8,27.9,-69.6,34.6,-62.8Z;

          M40.8,-72C48.9,-66.1,48.5,-47,48.1,-32.7C47.7,-18.5,47.3,-9.3,48.4,0.6C49.5,10.5,52.2,21.1,52.3,34.8C52.4,48.5,49.9,65.3,40.8,68.7C31.6,72.1,15.8,62,5.3,52.9C-5.2,43.7,-10.4,35.4,-15.5,29.7C-20.7,24,-25.7,20.9,-36.2,16.3C-46.7,11.8,-62.8,5.9,-71.8,-5.2C-80.9,-16.4,-83,-32.8,-74.3,-40.5C-65.7,-48.2,-46.2,-47.3,-32,-49.7C-17.9,-52,-8.9,-57.7,3.7,-64.1C16.4,-70.6,32.8,-77.9,40.8,-72Z;

          M33.4,-47.3C46.3,-50.5,61.8,-47.6,65.9,-38.7C70,-29.8,62.6,-14.9,58,-2.7C53.4,9.6,51.6,19.2,44.8,23.3C38,27.4,26.2,26.2,17.9,27.6C9.6,29.1,4.8,33.3,-5.4,42.6C-15.6,52,-31.2,66.5,-37.8,64.1C-44.4,61.6,-42.1,42.3,-45.6,28.8C-49.2,15.3,-58.6,7.7,-55.7,1.7C-52.9,-4.3,-37.7,-8.7,-33,-20.1C-28.2,-31.5,-33.9,-50.1,-30.2,-52.1C-26.4,-54.2,-13.2,-39.7,-1.5,-37.2C10.3,-34.7,20.6,-44,33.4,-47.3Z;

          M34.6,-62.8C41.3,-56.1,40.9,-39.7,44.5,-27.6C48.2,-15.6,55.9,-7.8,62.7,3.9C69.4,15.6,75.2,31.2,68.9,38.5C62.5,45.9,44,44.9,30.4,47.8C16.9,50.7,8.5,57.4,-3.8,64C-16.1,70.6,-32.2,77.1,-36.2,68.7C-40.1,60.3,-31.9,37,-36.5,23.1C-41.2,9.1,-58.7,4.6,-63.1,-2.6C-67.6,-9.7,-59,-19.4,-52.3,-29.8C-45.6,-40.2,-40.8,-51.2,-32.4,-57C-23.9,-62.8,-12,-63.4,1,-65.1C13.9,-66.8,27.9,-69.6,34.6,-62.8Z"
          ></animate>
        </path>
      </svg>
    </div>
  )
}

export default CursorBlob
