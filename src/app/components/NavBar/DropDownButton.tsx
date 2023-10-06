import i18n from "@/app/utils/i18n";
import { JetBrains_Mono } from "next/font/google";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const jetbrains = JetBrains_Mono({subsets: ["latin"], weight: ['400']})

type lang = 'pt-BR' | 'en-US'

export const DropDownButton : React.FC = () => {
    const [displayLang, setLangDisplayLang] = useState(i18n.language.toUpperCase())

    function changeLanguage(lang: lang){
        setLangDisplayLang(lang.toUpperCase())
        i18n.changeLanguage(lang)
    }
    return (
        <div className={"relative w-full group text-lg h-full " + jetbrains.className}>
            <button className="text-white bg-neon-red flex items-center justify-center px-6 h-full relative">
                {displayLang} <FaCaretDown />
            </button>
                <ul className='hidden group-hover:flex flex-col gap-1 min-w-max top-full right-4 absolute bg-dark-bg/60 text-white border border-neon-red z-20'>
                    <li className="p-2 px-4 hover:text-neon-red text-left relative">
                        <div className="w-2 h-[1px] bg-neon-red absolute left-0 top-[50%] -translate-y-1/2"></div>
                        <button onClick={() => changeLanguage('pt-BR')}>
                            PORTUGUÊS (BR)
                        </button>
                    </li> 
                    <li className="p-2 px-4 hover:text-neon-red text-left relative">
                        <div className="w-2 h-[1px] bg-neon-red absolute left-0 top-[50%] -translate-y-1/2"></div>
                        <button onClick={() => changeLanguage('en-US')}>
                            ENGLISH
                        </button>
                    </li>
                </ul>
        </div>
    )
}