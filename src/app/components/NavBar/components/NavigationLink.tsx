'use client'
import React from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { useDecryptTextEffectReturn } from '@/app/hook/useDecryptTextEffect'

interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  ...rest
}) => {
  const { decryptEffect, displayText } = useDecryptTextEffectReturn(text)

  return (
    <a
      onMouseEnter={() => decryptEffect()}
      className={`flex items-center relative hover:bg-neon-red transition-colors text-white text-lg whitespace-nowrap uppercase p-2 md:px-4 lg:px-8 z-10 ${jetbrains.className}`}
      {...rest}
    >
      {displayText}
    </a>
  )
}
