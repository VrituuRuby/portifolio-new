'use client'
import { Variants, motion } from 'framer-motion'
import { JetBrains_Mono } from 'next/font/google'
import { useTranslation } from 'react-i18next'
import { OutsideLink } from './OutsideLink'
import { FaDiscord, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { EmailInput } from './EmailInput'
import { ContactHeading } from './ContactHeading'
import { FormSubmitConfig } from './FormSubmitConfig'
import { MessageInput } from './MessageInput'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const formVariants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
}

export const Contact: React.FC = () => {
  const { t } = useTranslation()
  return (
    <motion.div
      id="contact"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      className={`${jetbrains.className} flex-col flex justify-center items-center lg:min-h-screen pb-8 max-w-5xl w-full`}
    >
      <ContactHeading>{t('contact.title')}</ContactHeading>
      <form
        className="flex w-full flex-col items-center gap-2 border-2 border-neon-red p-2 bg-dark-bg/50"
        action="https://formsubmit.co/victor.velozo@outlook.com"
        method="POST"
      >
        <FormSubmitConfig />
        <EmailInput />
        <MessageInput />
        <div className="flex text-white underline justify-center uppercase w-full flex-wrap">
          <OutsideLink
            Icon={FaGithub}
            display="Github"
            href="https://github.com/VrituuRuby"
          />
          <OutsideLink
            Icon={FaDiscord}
            display="discord"
            href="https://discord.com/users/300426254056947713"
          />
          <OutsideLink
            Icon={FaLinkedin}
            display="Linkedn"
            href="https://www.linkedin.com/in/victorlv/"
          />
          <OutsideLink
            Icon={FaDownload}
            display={t('home.resume')}
            href={t('home.resume.url')}
          />
        </div>
      </form>
    </motion.div>
  )
}
