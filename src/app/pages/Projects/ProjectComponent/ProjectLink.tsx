import { JetBrains_Mono } from 'next/font/google'
import { AnchorHTMLAttributes, ElementType } from 'react'

interface ProjectLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType
  text: string
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  icon: Icon,
  text,
  ...rest
}) => {
  return (
    <a
      {...rest}
      target="_blank"
      className={`p-1 rounded-md flex gap-0.5 font-bold text-base items-center transition-colors border-2 border-neon-red text-neon-red bg-dark-bg/40 uppercase shadow-neon-red`}
    >
      <Icon size={16} />
      {text}
    </a>
  )
}
