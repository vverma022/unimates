'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import HeaderWithoutNav from '../mcomponents/header'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import axios from 'axios'

export default function SignUpPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        email,
        name,
        password,
      });
      console.log("Sign-up successful:", response.data);
      router.push("/createprofile");
    } catch (error) {
      alert("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWithoutNav />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-lg mx-4">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold">Create your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join FresherConnect and start networking with students nationwide
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  autoComplete="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="new-password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}