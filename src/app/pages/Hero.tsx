'use client'
import { motion } from 'framer-motion'
import { Rubik, JetBrains_Mono } from 'next/font/google'
import { PiCaretDown } from 'react-icons/pi'

const rubik = Rubik({ weight: '800', subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ weight: ['400', '700'], subsets: ['latin'] })

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className={`${rubik.className} w-full min-h-screen snap-start flex flex-col items-center justify-center`}
    >
      <div className="text-left">
        <h1
          className={`${jetbrains.className} uppercase text-white text-8xl text-left font-bold tracking-[.16em]`}
        >
          VICTOR VELOZO
        </h1>
        <h2
          className={`${jetbrains.className} uppercase text-white text-[64px] text-left tracking-[.56em]`}
        >
          WEB DEVELOPER
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
