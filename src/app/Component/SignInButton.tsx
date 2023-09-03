'use client'
import { signIn } from "next-auth/react"

export default function SignInButton() {
      return (
        <div className="flex items-center gap-8">
          <button onClick={() => signIn()}>Me connecter</button>
          <button className="bg-slate-950 text-white py-2 px-8 rounded shadow-lg" onClick={() => signIn()}>Créer un compte</button>
        </div>
      )
}
