import { SignInForm } from "@/components/auth/signin-form"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 bg-red-600 rounded-full"></div>
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            <span className="ml-2 text-xl font-bold text-gray-900">VotizenKE</span>
          </Link>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}