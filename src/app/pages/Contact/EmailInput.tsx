import React from 'react'
import { useTranslation } from 'react-i18next'

export const EmailInput: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="flex gap-2 w-full">
      <label
        htmlFor="email"
        className="flex-1 relative flex items-center text-neon-red font-bold text-lg px-2 border-b-2 border-neon-red group"
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

      <button
        type="submit"
        className={
          'text-white w-fit gap-1 items-center font-bold px-4 py-1 clip-path-right text-lg bg-neon-red uppercase '
        }
      >
        &gt; {t('contact.send')}
      </button>
    </div>
  )
}
