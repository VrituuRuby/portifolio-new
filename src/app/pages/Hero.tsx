'use client'
import { motion } from 'framer-motion'
import { Rubik, JetBrains_Mono } from 'next/font/google'
import { PiCaretDown } from 'react-icons/pi'

const rubik = Rubik({ weight: '800', subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ weight: ['400', '700'], subsets: ['latin'] })

const Hero: React.FC = () => { 
  function breakWordIntoLetters(text: string){
    const letters = text.split("")
    return letters.map((letter, index) => <p 
    className="text-center"
    key={index}>{letter}</p>)
  }

  return (
    <div
      id="home"
      className={`${rubik.className} w-full min-h-screen snap-start flex flex-col items-center justify-center`}
    >
      <div className={`${jetbrains.className} text-white flex flex-col w-full max-w-5xl gap-4 uppercase text-whte`}>
        <h1
        className='text-[36px] sm:text-[60px] md:text-[72px] lg:text-[96px] w-full leading-none flex justify-around'
        >
          {breakWordIntoLetters('Victor Velozo')}
        </h1>
        <h2
        className='text-[24px] sm:text-[36px] md:text-[60px] lg:text-[72px] w-full leading-none flex justify-around'
        >
          {breakWordIntoLetters("Web Developer")}
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
