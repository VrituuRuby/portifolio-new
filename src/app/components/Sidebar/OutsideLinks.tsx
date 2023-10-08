import { AnchorHTMLAttributes, ElementType } from 'react'
import DecodeEffect from '../DecodeEffect'

interface OutsideLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  icon: ElementType
}

export const OutsideLink: React.FC<OutsideLinkProps> = ({
  icon: Icon,
  text,
  ...rest
}) => {
  return (
    <a className="flex gap-2 items-center" {...rest}>
      <Icon size="24" />
      <DecodeEffect textContent={text} />
    </a>
  )
}
