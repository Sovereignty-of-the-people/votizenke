"use client"

import { useSession } from "@/components/providers/session-provider"

export default function TestPage() {
  const { data: session, status } = useSession()
  const user = session?.user
  const isLoading = status === 'loading'

  console.log('TestPage - isLoading:', isLoading)
  console.log('TestPage - user:', user)

  return (
    <div className="min-h-screen p-8">
      <h1>Test Page</h1>
      <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
      <p>User: {user ? user.email : 'None'}</p>
    </div>
  )
}