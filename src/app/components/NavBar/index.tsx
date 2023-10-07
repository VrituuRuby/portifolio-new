'use client'
import { NavigationLink } from './components/NavigationLink'
import { DropDownButton } from './components/DropDownButton'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  activeLink?: string
}

const NavBar: React.FC<NavBarProps> = ({ activeLink }) => {
  const { t } = useTranslation()
  return (
    <div className="hidden sm:flex pt-2 justify-center gap-4 top-0 left-1/2 -translate-x-1/2 fixed">
      <nav
        className="
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
          <DropDownButton />
      </nav>
    </div>
  )
}

export default NavBar
