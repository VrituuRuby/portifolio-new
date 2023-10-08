import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const EmailInput: React.FC = () => {
  const [value, setValue] = useState('')
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
          value={value}
          placeholder="email@example.com"
          onChange={(event) => setValue(event.target.value)}
          className="text-white resize-none w-full bg-transparent border-none px-2 outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={!value}
        className={
          'text-white w-fit gap-1 items-center font-bold px-4 py-1 clip-path-right text-lg bg-neon-red uppercase disabled:opacity-40 disabled:cursor-not-allowed transition-opacity'
        }
      >
        &gt; {t('contact.send')}
      </button>
    </div>
  )
}
