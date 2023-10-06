'use client'
import { LabelHTMLAttributes, useState } from 'react'
import i18n from '../utils/i18n'
import { Variants, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const sliderVariant: Variants = {
  left: {
    y: 2,
    x: 2,
  },
  right: {
    y: 2,
    x: 38,
  },
  flagVisible: {
    opacity: 1,
  },
  flagHidden: {
    opacity: 0,
  },
}

type LangToggleProps = LabelHTMLAttributes<HTMLLabelElement>

type lang = 'pt-BR' | 'en-US' | null

export const LangToggle: React.FC<LangToggleProps> = ({ ...rest }) => {
  const [langDisplay, setLangDisplay] = useState<lang>(i18n.language as lang)

  function toggleLanguage() {
    setLangDisplay((lang) => (lang === 'en-US' ? 'pt-BR' : 'en-US'))
    i18n.changeLanguage(langDisplay === 'en-US' ? 'pt-BR' : 'en-US')
  }
  return (
    <label
      className={twMerge(
        'flex gap-4 border border-neon-red focus:neon-red-400  w-[72px] h-9  transition-colors rounded-full relative text-white cursor-pointer select-none',
        rest.className,
      )}
    >
      <input
        className="hidden"
        type="checkbox"
        checked={langDisplay === 'en-US'}
        onChange={toggleLanguage}
      />
      <span className="font-bold absolute text-lg left-2 top-1/2 -translate-y-1/2">
        EN
      </span>
      <span className="font-bold absolute text-lg right-2 top-1/2 -translate-y-1/2">
        PT
      </span>

      <motion.span
        variants={sliderVariant}
        animate={langDisplay === 'en-US' ? 'right' : 'left'}
        initial="left"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="w-8 h-8 translate-x-1 left-0 bg-cover bg-center border-2 border-white rounded-full overflow-hidden relative"
      >
        <motion.span
          className="bg-br-flag absolute top-0 left-0 w-full h-full bg-center bg-cover"
          initial="flagHidden"
          animate={langDisplay === 'en-US' ? 'flagHidden' : 'flagVisible'}
          variants={sliderVariant}
        />
        <motion.span
          className="bg-us-flag absolute top-0 left-0 w-full h-full bg-center bg-cover"
          initial="flagHidden"
          animate={langDisplay === 'en-US' ? 'flagVisible' : 'flagHidden'}
          variants={sliderVariant}
        />
      </motion.span>
    </label>
  )
}
