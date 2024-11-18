import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Globe, ArrowRight } from 'lucide-react'
import HeaderWithoutNav from './mcomponents/header'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWithoutNav />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br animate-gradient"
            style={{
              backgroundImage: `linear-gradient(45deg, 
                rgba(15, 23, 42, 1),
                rgba(56, 189, 248, 0.8),
                rgba(59, 130, 246, 0.9),
                rgba(29, 78, 216, 0.8),
                rgba(15, 23, 42, 1)
              )`,
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite'
            }}
          />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%),
                linear-gradient(rgba(15, 23, 42, 0.2) 2px, transparent 2px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.2) 2px, transparent 2px)
              `,
              backgroundSize: '100% 100%, 40px 40px, 40px 40px',
              animation: 'wave 10s linear infinite'
            }}
          />
          <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Connect with Freshers Nationwide
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Meet, network, and make lifelong friends with freshers from colleges across the country.
                </p>
              </div>
              <Link href="/signup">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full min-h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Diverse Network</h2>
                <p className="text-gray-500 dark:text-gray-400">Connect with students from various backgrounds and disciplines.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageCircle className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Instant Messaging</h2>
                <p className="text-gray-500 dark:text-gray-400">Chat with new friends in real-time through our messaging platform.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Nationwide Reach</h2>
                <p className="text-gray-500 dark:text-gray-400">Expand your network beyond your campus to the entire country.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center">
          <div className="container px-2 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center space-x-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl p-6">Hear from Our Users</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how FresherConnect has transformed the college experience for students across the country.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 bg-gray-300 border-2 p-4 rounded-2xl">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  "FresherConnect helped me find my best friends and study partners from day one. It's an essential app for every college freshman!"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science, Class of 2025</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 bg-gray-300 border-2 p-4 rounded-lg">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  "FresherConnect helped me find my best friends and study partners from day one. It's an essential app for every college freshman!"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science, Class of 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-96 flex items-center justify-center bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Connect?</h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Join thousands of freshers already networking, learning, and growing together.
                </p>
              </div>
              <Link href="/signup">
                <Button className="bg-background text-primary hover:bg-background/90">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FresherConnect. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}