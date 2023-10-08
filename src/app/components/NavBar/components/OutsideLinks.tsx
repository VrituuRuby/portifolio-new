import { AnchorHTMLAttributes, ElementType } from 'react'

interface OutsideLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType
}

export const OutsideLink: React.FC<OutsideLinkProps> = ({
  icon: Icon,
  ...rest
}) => {
  return (
    <a className="flex gap-2 items-center" {...rest}>
      <Icon size="24" />
    </a>
  )
}
