'use client'
import React from 'react'
import DecodeEffect from '../../DecodeEffect'
import { JetBrains_Mono } from 'next/font/google'

interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  ...rest
}) => {
  return (
    <a
      className="flex items-center relative hover:bg-neon-red transition-colors"
      {...rest}
    >
      <DecodeEffect
        textContent={text}
        className={`text-white text-lg whitespace-nowrap uppercase p-2 md:px-4 lg:px-8 z-10' ${jetbrains.className}
        `}
      />
    </a>
  )
}
