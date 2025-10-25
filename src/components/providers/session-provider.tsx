"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name?: string
  email: string
  image?: string
}

interface SessionContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check localStorage on mount
  useEffect(() => {
    if (isInitialized) return
    
    console.log('SessionProvider - Initializing...')
    setIsInitialized(true)
    
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('votizenke_user')
        console.log('SessionProvider - Stored user:', storedUser)
        
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser)
            console.log('SessionProvider - Parsed user:', parsedUser)
            setUser(parsedUser)
          } catch (error) {
            console.error('Error parsing stored user:', error)
            localStorage.removeItem('votizenke_user')
          }
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error)
      } finally {
        setIsLoading(false)
        console.log('SessionProvider - Loading complete')
      }
    }

    // Immediate check with minimal delay
    const timeout = setTimeout(checkAuth, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [isInitialized])

  const signIn = async (email: string, password: string) => {
    // Mock authentication - replace with real API call
    console.log('SignIn - Starting auth for:', email)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockUser: User = {
      id: "1",
      name: email.split('@')[0],
      email
    }
    console.log('SignIn - Setting user:', mockUser)
    setUser(mockUser)
    localStorage.setItem('votizenke_user', JSON.stringify(mockUser))
    console.log('SignIn - User stored to localStorage')
  }

  const signUp = async (email: string, password: string, name: string) => {
    // Mock registration - replace with real API call
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email
    }
    setUser(mockUser)
    localStorage.setItem('votizenke_user', JSON.stringify(mockUser))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('votizenke_user')
  }

  return (
    <SessionContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}