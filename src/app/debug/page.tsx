"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSession } from "@/components/providers/session-provider"
import Link from "next/link"

export default function DebugPage() {
  const { user, isLoading, signIn, signOut } = useSession()
  const [localStorageData, setLocalStorageData] = useState<any>(null)

  useEffect(() => {
    // Check localStorage
    const storedUser = localStorage.getItem('user')
    setLocalStorageData(storedUser)
  }, [])

  const handleClearStorage = () => {
    localStorage.removeItem('user')
    console.log('LocalStorage cleared')
    window.location.reload()
  }

  const handleTestSignIn = async () => {
    await signIn('test@example.com', 'password123')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Debug Page</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Authentication State</CardTitle>
            <CardDescription>Current session and localStorage status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>User:</strong> {user ? JSON.stringify(user, null, 2) : 'None'}
            </div>
            <div>
              <strong>LocalStorage:</strong> {localStorageData || 'Empty'}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Actions</CardTitle>
            <CardDescription>Test authentication flows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleClearStorage} variant="destructive">
              Clear LocalStorage
            </Button>
            <Button onClick={handleTestSignIn} variant="default">
              Test Sign In
            </Button>
            <Button onClick={() => signOut()} variant="outline">
              Sign Out
            </Button>
            <Link href="/">
              <Button variant="ghost">Go to Homepage</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">Go to Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}