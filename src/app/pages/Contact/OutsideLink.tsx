import DecodeEffect from '@/app/components/DecodeEffect'
import React from 'react'
import { IconType } from 'react-icons'

interface OutsideLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  display: string
  Icon: IconType
}

export const OutsideLink: React.FC<OutsideLinkProps> = ({
  display,
  Icon,
  ...rest
}) => {
  return (
    <a
      target="_blank"
      className="flex gap-2 items-center justify-center px-2 hover:drop-shadow-neon-red hover:text-neon-red"
      {...rest}
    >
      <Icon size={24} />
      <DecodeEffect textContent={display} />
    </a>
  )
}
