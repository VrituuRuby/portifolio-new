'use client'
import { motion } from 'framer-motion'
import { Rubik, JetBrains_Mono } from 'next/font/google'
import { PiCaretDown } from 'react-icons/pi'

const rubik = Rubik({ weight: '800', subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ weight: ['400', '700'], subsets: ['latin'] })

const Hero: React.FC = () => { 
  function breakWordIntoLetters(text: string){
    const letters = text.split("")
    return letters.map((letter, index) => <span 
    className="text-center"
    key={index}>{letter}</span>)
  }

  return (
    <div
      id="home"
      className={`${rubik.className} w-full min-h-screen snap-start flex flex-col items-center justify-center`}
    >
      <div className={`${jetbrains.className} text-white flex flex-col w-full max-w-5xl uppercase text-whte`}>
        <h1
      className='text-8xl font-bold w-full flex flex-row flex-nowrap justify-between text-center'
        >
          {breakWordIntoLetters('VICTOR  VELOZO')}
        </h1>
        <h2
      className='text-[64px] font-bold w-full flex flex-row flex-nowrap justify-between text-cente'
        >
          {breakWordIntoLetters('WEB  DEVELOPER')}
        </h2>
      </div>

      <motion.a
        className="cursor-pointer p-1 hover:bg-white/[.3] rounded-full absolute top-[80%] text-white"
        href="#about"
        whileHover={{ scale: 1.2, y: -20 }}
      >
        <PiCaretDown size={64} />
      </motion.a>
    </div>
  )
}

export default Hero
