'use client'
import DecodeEffect from '../DecodeEffect'
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
      className="flex items-center px-8 py-2 relative hover:bg-neon-red transition-colors"
      {...rest}
    >
      <DecodeEffect
        textContent={text}
        className={
          'text-white text-4xl leading-[80%] uppercase z-10 ' +
          jetbrains.className
        }
      ></DecodeEffect>
    </a>
  )
}
