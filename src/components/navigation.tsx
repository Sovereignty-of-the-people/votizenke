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
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-green-500/30 sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={getLogoHref()} className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Futuristic Logo Container */}
              <div className="flex items-center space-x-1 p-2 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-green-500/50 transition-all duration-300">
                <div className="w-8 h-8 bg-black rounded-full shadow-lg shadow-black/50 group-hover:shadow-green-500/20 transition-all duration-300"></div>
                <div className="w-8 h-8 bg-red-600 rounded-full shadow-lg shadow-red-500/50 group-hover:shadow-red-500/20 transition-all duration-300"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full shadow-lg shadow-green-500/50 group-hover:shadow-green-500/20 transition-all duration-300"></div>
              </div>
              {/* Tech Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="ml-3 text-2xl sm:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
              VOTIZEN<span className="text-green-400">KE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              // Authenticated user navigation
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Dashboard</Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Community</Button>
                </Link>
                <Link href="/leadership-academy">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Leadership</Button>
                </Link>
                <Link href="/analytics">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Analytics</Button>
                </Link>
                <Link href="/predictive">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Predictive</Button>
                </Link>
                <Link href="/campaign">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Campaign</Button>
                </Link>
                <Link href="/chapters">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Chapters</Button>
                </Link>
                <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-700">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400 hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400 hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-300 font-medium ml-2">Hi, {user.name}!</span>
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-4 py-2 rounded-lg transition-all duration-300 font-bold" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              // Non-authenticated user navigation
              <>
                <Link href="/learn">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Learn</Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Community</Button>
                </Link>
                <Link href="/leadership-academy">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Leadership</Button>
                </Link>
                <Link href="/analytics">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">See Impact</Button>
                </Link>
                <Link href="/partners">
                  <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium">Partners</Button>
                </Link>
                <Link href="/auth/signin">
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all duration-300 font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50">Sign In</Button>
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
              className="p-3 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gradient-to-b from-gray-900 to-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                // Authenticated user mobile navigation
                <>
                  <Link href="/leadership-academy" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Leadership
                    </Button>
                  </Link>
                  <Link href="/analytics" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Analytics
                    </Button>
                  </Link>
                  <Link href="/predictive" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Predictive
                    </Button>
                  </Link>
                  <Link href="/campaign" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Campaign
                    </Button>
                  </Link>
                  <Link href="/chapters" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Chapters
                    </Button>
                  </Link>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="px-3 py-2 text-sm text-gray-300 font-medium">
                      Hi, {user.name}!
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-black rounded-lg transition-all duration-300 font-bold" 
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
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Learn
                    </Button>
                  </Link>
                  <Link href="/community" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Community
                    </Button>
                  </Link>
                  <Link href="/leadership-academy" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Leadership
                    </Button>
                  </Link>
                  <Link href="/analytics" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      See Impact
                    </Button>
                  </Link>
                  <Link href="/partners" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium">
                      Partners
                    </Button>
                  </Link>
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-300 font-bold shadow-lg shadow-green-500/30">
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