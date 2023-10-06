import CursorBlob from '@/app/components/CursorBlob'
import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={`${inter.className} before:backdrop-blur-[200px] 
        before:-z-10 before:left-0 before:top-0 before:fixed before:w-screen before:h-screen
      `}>
        <CursorBlob />
        {children}
      </body>
    </html>
  )
}
