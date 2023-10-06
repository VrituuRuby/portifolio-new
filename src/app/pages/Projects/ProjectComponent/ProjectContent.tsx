import { JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

interface ProjectProps {
  name: string
  description: string
  stack: string[]
  children: ReactNode
}

export const ProjectContent: React.FC<ProjectProps> = ({
  name,
  description,
  stack,
  children,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-1 items-center lg:items-start ${jetbrains.className}`}
    >
      <h3
        className={` text-neon-blue drop-shadow-neon-blue select-none text-2xl font-bold flex items-center gap-2 before:w-2 before:h-2 before:bg-neon-blue`}
      >
        {name}
      </h3>
      <p className="flex-1">{description}</p>
      <ul className="list-none flex flex-wrap justify-center md:justify-start gap-2 text-sm">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="flex gap-2">{children}</div>
    </div>
  )
}
