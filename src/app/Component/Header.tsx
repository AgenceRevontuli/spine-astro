// @ts-nocheck
'use client';
import Link from 'next/link';
import Image from 'next/image';
import SignInButton from './SignInButton';
import UserNav from './UserNav';
import { useSession } from "next-auth/react"


export default function NavbarWithDropdown() {
  const { data: session, status } = useSession()
  return (
    <nav className="py-8 px-32 flex justify-between items-center">
        <div>
            <p className="text-xl font-bold">SuperPost</p>
        </div>
        <div>
            <div>
                {session ? <UserNav /> : <SignInButton session={session} />}
            </div>
        </div>
    </nav>
  )
}


