'use client'
import { NavigationLink } from './components/NavigationLink'
import { DropDownButton } from './components/DropDownButton'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface NavBarProps {
  activeLink?: string
}

const NavBar: React.FC<NavBarProps> = ({ activeLink }) => {
  const { t } = useTranslation()
  return (
    <div className="hidden sm:flex pt-2 w-full justify-center z-10 gap-2 px-2 top-0 left-1/2 -translate-x-1/2 fixed">
      <nav
        className="
          max-w-5xl
          flex 
          relative
        bg-dark-bg/60
          backdrop-blur-lg
          items-center
          clip-path
        border-neon-red
          border-[1px]
          before:content-[''] 
          before:h-full
          before:border-r-[16px]
          before:border-r-transparent 
          before:border-t-[16px] 
          before:border-t-neon-red
          "
      >
        <NavigationLink href="#home" text="home" />
        <NavigationLink href="#about" text={t('about.title')} />
        <NavigationLink href="#projects" text={t('projects.title')} />
        <NavigationLink href="#contact" text={t('contact.title')} />
        <NavigationLink href={t('home.resume.url')} text={t('home.resume')} />
        <DropDownButton />
      </nav>
      <a
        href="https://github.com/VrituuRuby"
        target="_blank"
        className="flex items-center text-white hover:text-neon-red hover:drop-shadow-neon-red transition-colors"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/victorlv/"
        target="_blank"
        className="flex items-center text-white hover:text-neon-red hover:drop-shadow-neon-red transition-colors"
      >
        <FaLinkedin size={32} />
      </a>
    </div>
  )
}

export default NavBar
