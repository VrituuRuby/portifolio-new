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
        <meta
          name="description"
          content="Victor Velozo - Fullstack Web developer | ReactJS | NodeJS | TypeScript"
        />
      </head>
      <body className={`${inter.className}`}>
        <div className="w-screen h-screen backdrop-blur-[100px] -z-[10] fixed top-0 left-0" />
        <CursorBlob />
        {children}
        <NavBar />
      </body>
    </html>
  )
}
