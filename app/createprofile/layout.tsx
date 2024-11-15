import Head from 'next/head'
import { ReactNode } from 'react'
import HeaderWithoutNav from '../mcomponents/header'

interface CreateProfileProps {
  children: ReactNode
}

export default function CreateProfile({ children }: CreateProfileProps) {
  return (
      <div>
        <HeaderWithoutNav />
        {children}
      </div>
  )
}
