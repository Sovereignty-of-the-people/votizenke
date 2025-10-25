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
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leadership academy...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
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