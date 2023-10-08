'use client'
import './utils/i18n'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from '@/app/pages/Projects'
import { Contact } from './pages/Contact'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col gap-10 justify-between max-w-5xl overflow-x-hidden overflow-y-hidden px-4 mx-auto items-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main
