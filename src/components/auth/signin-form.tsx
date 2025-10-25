"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Chrome } from "lucide-react"
import { useSession } from "@/components/providers/session-provider"
import Link from "next/link"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState("")
  
  const { signIn, signUp } = useSession()

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      if (isSignUp) {
        await signUp(email, password, name)
      } else {
        await signIn(email, password)
      }
      
      // Wait a bit longer to ensure localStorage is updated and state is synchronized
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Verify user is actually stored before redirecting
      const storedUser = localStorage.getItem('votizenke_user')
      if (storedUser) {
        console.log('User successfully stored, redirecting to dashboard')
        window.location.href = "/dashboard"
      } else {
        console.error('User not found in localStorage after sign in')
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Auth error:", error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {isSignUp ? "Join VotizenKE" : "Welcome to VotizenKE"}
        </CardTitle>
        <CardDescription>
          {isSignUp ? "Create your account to start your civic journey" : "Sign in to start your civic journey"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (isSignUp ? "Creating account..." : "Signing in...") : (isSignUp ? "Sign Up" : "Sign In")}
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
          </span>
          <Button 
            variant="link" 
            className="p-0 h-auto text-green-600"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}