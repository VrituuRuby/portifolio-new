import { useTranslation } from 'react-i18next'

export const MessageInput: React.FC = () => {
  const { t } = useTranslation()
  return (
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
  )
}
