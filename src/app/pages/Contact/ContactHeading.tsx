import React from 'react'

interface ContactHeadingProps {
  children: string
}

export const ContactHeading: React.FC<ContactHeadingProps> = ({ children }) => {
  return (
    <div
      className="
          flex w-full bg-neon-red
          backdrop-blur-lg
          clip-path-right
          before:content-[''] 
          before:h-full
          before:border-r-[16px]
          before:border-r-transparent 
          before:border-t-[16px] 
          before:border-t-neon-red
        "
    >
      <h3 className="text-white text-left uppercase text-4xl">{children}</h3>
    </div>
  )
}
