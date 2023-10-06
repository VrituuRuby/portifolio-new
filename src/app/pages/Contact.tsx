'use client'
import { JetBrains_Mono } from 'next/font/google'
import { useTranslation } from 'react-i18next'
import { IoMdSend } from 'react-icons/io'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const Contact: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div
      id="contact"
      className={`${jetbrains.className} flex-col flex justify-center items-center lg:min-h-screen max-w-5xl w-full`}
    >
      <div
        className="
          flex w-full bg-neon-red
          backdrop-blur-lg
          clip-path-right
          before:content-[''] 
          before:h-full
          before:border-r-[16px]
          before:border-r-transparent 
          before:border-t-[16px] 
          before:border-t-neon-red
        "
      >
        <h3 className="text-white text-left uppercase text-4xl">
          {t('contact.title')}
        </h3>
      </div>
      <form
        className="flex w-full flex-col gap-4 border-2 border-neon-red p-4 bg-dark-bg/50"
        action="https://formsubmit.co/victor.velozo@outlook.com"
        method="POST"
      >
        <label
          htmlFor="email"
          className="w-full flex text-neon-red font-bold text-lg border-2 border-neon-red px-2"
        >
          EMAIL:
          <input
            name="email"
            type="email"
            required
            id="email"
            placeholder="email@example.com"
            className="text-white resize-none w-full bg-transparent border-none px-2 outline-none"
          />
        </label>
        <label
          htmlFor="message"
          className="w-full flex flex-col text-neon-red font-bold text-lg border-2 border-neon-red px-2"
        >
          MESSAGE:
          <textarea
            name="message"
            id="message"
            placeholder={t('contact.message.placeholder')}
            className="text-white h-32 bg-transparent border-none resize-none outline-none"
          />
        </label>
        <button
          type="submit"
          className={
            'text-white gap-1 items-center font-bold p-2 text-lg bg-neon-red uppercase '
          }
        >
          &gt; {t('contact.send')}
        </button>
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for reaching out! I will respond to you as soon as possible :) | Obrigado por me contatar! Vou te responder assim que possível :)"
        ></input>
        <input
          type="hidden"
          name="_subject"
          value="Nova menságem em Portifólio"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/#contact"
        ></input>
        <input type="hidden" name="_template" value="box" />
      </form>
    </div>
  )
}
