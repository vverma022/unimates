'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import HeaderWithoutNav from '../mcomponents/header';
import { useState } from 'react';
import background from '@/public/Uni.png';
import { useRouter } from 'next/navigation';
import { GoogleSignInButton } from '../mcomponents/authbutton';
import { signIn } from 'next-auth/react';

interface SiginProps {
  csrfToken?: string;
}

export default function SignInPage(props: SiginProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      //Redirect to homepage (/timeline)
      router.push("/main");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Email or Password is wrong!");
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWithoutNav />
      <main className="flex-1 flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src={background}
            layout="fill"
            objectFit="cover"
            alt="Students connecting"
            priority
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold">Welcome back</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to connect with freshers nationwide
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
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
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-muted-foreground"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-primary hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground">OR</p>
            <GoogleSignInButton />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Not a member?{' '}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}