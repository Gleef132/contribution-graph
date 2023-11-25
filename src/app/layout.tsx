import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { fontsVariables } from './fonts'
import { StoreProvider } from '@/store/StoreProvider'

export const metadata: Metadata = {
  title: 'Contribution | Graph',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontsVariables}><StoreProvider>{children}</StoreProvider></body>
    </html>
  )
}