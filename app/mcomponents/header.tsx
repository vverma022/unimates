import Link from 'next/link'
import Logo from '@/public/logou.png'
import Image from 'next/image'

export default function HeaderWithoutNav() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center" href="/">
         <Image src={Logo} alt="Unimates Logo" width={40} height={40} />
        <span className="font-bold">Unimates</span>
      </Link>
    </header>
  )
}