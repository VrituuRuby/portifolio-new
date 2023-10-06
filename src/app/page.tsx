'use client'
import './utils/i18n'
import Hero from '@/app/pages/Hero'
import About from './pages/About'
import Projects from '@/app/pages/Projects'
import { Contact } from '@/app/pages/Contact'
import NavBar from './components/NavBar'

const Main: React.FC = () => {
  return (
    <div className="flex flex-col px-4">
      <NavBar />
      <main className="flex-1 flex flex-col gap-4 justify-between items-center overflow-y-scroll h-screen scroll-smooth px-4 overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Main
