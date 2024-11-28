import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getCsrfToken } from "next-auth/react";
import { CredentialsForm } from "../mcomponents/credentialsform";
import { GoogleSignInButton } from "../mcomponents/authbutton";
import HeaderWithoutNav from "../mcomponents/header";
import Image from "next/image";
import background from "@/public/Uni.png";
import Link from "next/link";



export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/timeline");
  
 
  return (
    <>
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
    <CredentialsForm />
    <p className="text-center">Or</p>
    <GoogleSignInButton/>
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
    </>
  );
}  