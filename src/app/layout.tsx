import CursorBlob from '@/app/components/CursorBlob'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <title>Victor Velozo - Fullstack WebDev</title>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.className} before:backdrop-blur-[150px] 
        before:-z-10 before:left-0 before:top-0 before:fixed before:w-screen before:h-screen
      `}
      >
        <CursorBlob />
        {children}
        <NavBar />
      </body>
    </html>
  )
}
