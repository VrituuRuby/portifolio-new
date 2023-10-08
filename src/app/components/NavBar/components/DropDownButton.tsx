import i18n from '@/app/utils/i18n'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

type lang = 'pt-BR' | 'en-US'

export const DropDownButton: React.FC = () => {
  const [displayLang, setLangDisplayLang] = useState(
    i18n.language.toUpperCase(),
  )

  function changeLanguage(lang: lang) {
    setLangDisplayLang(lang.toUpperCase())
    i18n.changeLanguage(lang)
  }
  return (
    <div className={'relative w-full group h-full ' + jetbrains.className}>
      <button className="text-white bg-neon-red flex gap-1 items-center h-full justify-center text-sm px-4 relative ml-auto">
        {displayLang} <FaCaretDown className="text-sm" />
      </button>
      <ul className="hidden group-hover:flex flex-col gap-1 min-w-max top-full right-4 absolute bg-dark-bg/60 text-white border border-neon-red z-20">
        <li className="hover:text-neon-red text-left relative">
          <div className="w-2 h-[1px] bg-neon-red absolute left-0 top-[50%] -translate-y-1/2"></div>
          <button
            className="p-2 px-4 w-full text-left flex gap-2 items-center"
            onClick={() => changeLanguage('pt-BR')}
          >
            <img
              alt="brazil flag"
              src="/br.png"
              className="w-6 aspect-[10/7]"
            />
            PORTUGUÊS
          </button>
        </li>
        <li className="hover:text-neon-red text-left relative">
          <div className="w-2 h-[1px] bg-neon-red absolute left-0 top-[50%] -translate-y-1/2"></div>
          <button
            className="p-2 px-4 w-full text-left flex gap-2 items-center"
            onClick={() => changeLanguage('en-US')}
          >
            <img
              alt="united states flag"
              src="/us.png"
              className="w-6 aspect-[10/7]"
            />
            ENGLISH
          </button>
        </li>
      </ul>
    </div>
  )
}
