import { ReactNode } from 'react'

interface SigninLayoutProps {
  children: ReactNode
}

export default function SigninLayout({ children }: SigninLayoutProps) {
  return (
      <div>
        {children}
      </div>
  )
}
