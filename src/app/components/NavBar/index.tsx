'use client'
import { ChangeEvent } from 'react'
import i18n from '@/app/utils/i18n'
import { NavigationLink } from './NavigationLink'
import { LangToggle } from '../LangToggle'
import { t } from 'i18next'

interface NavBarProps {
  activeLink?: string
}

const NavBar: React.FC<NavBarProps> = ({ activeLink }) => {
  return (
    <div className="p-2 flex z-20 w-full justify-center gap-4 fixed">
      <nav
        className="flex 
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
          
          after:border-l-[16px]
          after:h-full
          after:border-l-transparent 
          after:border-b-[16px] 
          after:border-b-neon-red
          after:relative
          after:right-0
          after:bottom-0
          "
      >
        <NavigationLink href="#home" text="home" />
        <NavigationLink href="#about" text={t('about.title')} />
        <NavigationLink href="#projects" text={t('projects.title')} />
        <NavigationLink href="#contact" text={t('contact.title')} />
      </nav>
    </div>
  )
}

export default NavBar
