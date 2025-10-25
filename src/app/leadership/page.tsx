"use client"

import { useEffect } from "react"
import { useSession } from "@/components/providers/session-provider"
import { Navigation } from "@/components/navigation"
import { LeadershipAcademy } from "@/components/leadership-academy"
import { motion } from "framer-motion"

export default function LeadershipPage() {
  const { user, isLoading } = useSession()

  useEffect(() => {
    if (!isLoading && !user) {
      window.location.href = "/auth/signin"
    }
  }, [user, isLoading])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500/20 border-t-green-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg font-medium">Initializing Leadership Academy...</p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LeadershipAcademy />
        </motion.div>
      </div>
    </div>
  )
}