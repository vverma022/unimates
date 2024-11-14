import Link from 'next/link'
import { Users } from 'lucide-react'

export default function HeaderWithoutNav() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center" href="/">
        <Users className="h-6 w-6 mr-2" />
        <span className="font-bold">Unimates</span>
      </Link>
    </header>
  )
}