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
      <body className={`${inter.className}`}>
        <CursorBlob />
        <div className="backdrop-blur-[200px] hidden sm:block -z-10 fixed left-0 top-0 w-screen h-screen" />
        {children}
      </body>
    </html>
  )
}
