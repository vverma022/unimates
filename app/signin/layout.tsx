import { ReactNode } from 'react'
import { NextAuthProvider } from '../mcomponents/providers';


interface SigninLayoutProps {
  children: ReactNode
}

export default function SigninLayout({  children,
}: {
  children: React.ReactNode;}) {
  return (
      <div>
        {children}
      </div>
  )
}
