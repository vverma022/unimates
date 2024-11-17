import { ReactNode } from 'react'
import Image from 'next/image'
import HeaderWithoutNav from '../mcomponents/header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
     <HeaderWithoutNav />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          © 2024 Unimates. All rights reserved.
        </div>
      </footer>
    </div>
  )
}