'use client'
import { JetBrains_Mono } from 'next/font/google'
import { TechIcon } from './TechIcon'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const stackIcons = [
  { name: 'HTML 5', iconPath: '/icons/html.svg' },
  { name: 'CSS 3', iconPath: '/icons/css.svg' },
  { name: 'JavaScript', iconPath: '/icons/javascript.svg' },
  { name: 'TypeScript', iconPath: '/icons/typescript.svg' },
  { name: 'React', iconPath: '/icons/react.svg' },
  { name: 'Svelte', iconPath: '/icons/svelte.svg' },
  { name: 'Next Js', iconPath: '/icons/next.svg' },
  { name: 'Nest', iconPath: '/icons/nest.svg' },
  { name: 'Node JS', iconPath: '/icons/node.svg' },
  { name: 'Linux', iconPath: '/icons/linux.svg' },
  { name: 'Git', iconPath: '/icons/git.svg' },
  { name: 'Github', iconPath: '/icons/github.svg' },
  { name: 'Docker', iconPath: '/icons/docker.svg' },
  { name: 'PosgreSQL', iconPath: '/icons/postgres.svg' },
  { name: 'Prisma.io', iconPath: '/icons/prisma.svg' },
  { name: 'Tailwind CSS', iconPath: '/icons/tailwind.svg' },
]

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

const About: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div
      id="about"
      className={`min-h-screen max-w-5xl flex flex-col justify-center items-center gap-8 ${jetbrains.className}`}
    >
      <div className="flex gap-8">
        <img
          src="/avatar.png"
          alt="pixel art avatar"
          className="h-[235px] rounded-full border-[6px] border-neon-red shadow-neon-red"
        />
        <div className="uppercase flex flex-col justify-between gap-2 text-white">
          <h3 className="drop-shadow-neon-blue text-neon-blue text-4xl">
            {t('about.title')}
          </h3>
          <div className="flex flex-col justify-between h-full text-lg">
            <p>HELLO WORLD 🚀</p>
            <p>{t('about.description.1')}</p>
            <p>{t('about.description.2')}</p>
            <p>{t('about.description.3')}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="drop-shadow-neon-blue text-neon-blue text-2xl">STACK</h3>
        <motion.ul whileInView="visible" initial="hidden" className="flex w-full justify-between">
          {stackIcons.map((icon, index) => (
            <TechIcon
              icon={icon.iconPath}
              name={icon.name}
              key={index}
              index={index}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default About
