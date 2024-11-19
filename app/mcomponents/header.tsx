'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "@/public/logou.png"

export default function HeaderWithConditionalProfile() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isMainRoute = pathname === '/main'

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-background">
      <Link className="flex items-center justify-center" href="/">
        <Image src={Logo} alt="Unimates Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-xl text-primary">Unimates</span>
      </Link>
      {isMainRoute && (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem>
  <Link href="/createprofile" passHref className='flex items-center'>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
  </Link>
</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  )
}