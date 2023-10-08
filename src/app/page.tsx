'use client'
import './utils/i18n'
import Hero from '@/app/pages/Hero'
import About from './pages/About'
import Projects from '@/app/pages/Projects'
import { Contact } from '@/app/pages/Contact'
import NavBar from './components/NavBar'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col gap-10 justify-between max-w-5xl overflow-x-hidden px-4 mx-auto items-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main
