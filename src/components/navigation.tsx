"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useSession } from "@/components/providers/session-provider"
import Link from "next/link"
import { Menu, X, Users, Bell, Settings } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut, isLoading } = useSession()

  const handleSignOut = () => {
    signOut()
    // Force a page reload to ensure all state is cleared
    window.location.href = "/"
  }

  // Close mobile menu when user changes auth state
  useEffect(() => {
    setIsMenuOpen(false)
  }, [user])

  // Smart logo redirection logic
  const getLogoHref = () => {
    return user ? "/dashboard" : "/"
  }

  // Don't show loading state - render navigation immediately to avoid menu disappearing

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={getLogoHref()} className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-full sm:w-8 sm:h-8"></div>
            <div className="w-6 h-6 bg-red-600 rounded-full sm:w-8 sm:h-8"></div>
            <div className="w-6 h-6 bg-green-600 rounded-full sm:w-8 sm:h-8"></div>
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">VotizenKE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              // Authenticated user navigation
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Dashboard</Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Community</Button>
                </Link>
                <Link href="/leadership">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Leadership</Button>
                </Link>
                <Link href="/analytics">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Analytics</Button>
                </Link>
                <Link href="/predictive">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Predictive</Button>
                </Link>
                <Link href="/campaign">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Campaign</Button>
                </Link>
                <Link href="/chapters">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Chapters</Button>
                </Link>
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-600">Hi, {user.name}!</span>
                  <Button variant="outline" className="border-green-600 text-green-600" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              // Non-authenticated user navigation
              <>
                <Link href="/learn">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Learn</Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Community</Button>
                </Link>
                <Link href="/leadership">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Leadership</Button>
                </Link>
                <Link href="/analytics">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">See Impact</Button>
                </Link>
                <Link href="/partners">
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600">Partners</Button>
                </Link>
                <Link href="/auth/signin">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Sign In</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                // Authenticated user mobile navigation
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/community" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Community
                    </Button>
                  </Link>
                  <Link href="/leadership" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Leadership
                    </Button>
                  </Link>
                  <Link href="/analytics" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Analytics
                    </Button>
                  </Link>
                  <Link href="/predictive" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Predictive
                    </Button>
                  </Link>
                  <Link href="/campaign" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Campaign
                    </Button>
                  </Link>
                  <Link href="/chapters" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Chapters
                    </Button>
                  </Link>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Hi, {user.name}!
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600" 
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </div>
                </>
              ) : (
                // Non-authenticated user mobile navigation
                <>
                  <Link href="/learn" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Learn
                    </Button>
                  </Link>
                  <Link href="/community" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Community
                    </Button>
                  </Link>
                  <Link href="/leadership" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Leadership
                    </Button>
                  </Link>
                  <Link href="/analytics" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      See Impact
                    </Button>
                  </Link>
                  <Link href="/partners" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                      Partners
                    </Button>
                  </Link>
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}