import Head from 'next/head'
import { ReactNode } from 'react'
import HeaderWithoutNav from '../mcomponents/header'

interface EditProfileProps {
  children: ReactNode
}

export default function EditProfile({ children }: EditProfileProps) {
  return (
      <div>
        <HeaderWithoutNav />
        {children}
      </div>
  )
}
