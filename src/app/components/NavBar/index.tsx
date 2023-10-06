'use client'
import { NavigationLink } from './NavigationLink'
import { DropDownButton } from './DropDownButton'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  activeLink?: string
}

const NavBar: React.FC<NavBarProps> = ({ activeLink }) => {
  const {t} = useTranslation()
  return (
    <div className="p-2 flex z-20 w-full justify-center gap-4 fixed">
      <nav
        className="
          flex 
          relative
          max-w-5xl
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
        <DropDownButton />
      </nav>
    </div>
  )
}

export default NavBar
