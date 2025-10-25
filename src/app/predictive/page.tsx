"use client"

import { useEffect } from "react"
import { useSession } from "@/components/providers/session-provider"
import { Navigation } from "@/components/navigation"
import { PredictiveTools } from "@/components/predictive-tools"
import { motion } from "framer-motion"

export default function PredictivePage() {
  const { user, isLoading } = useSession()

  useEffect(() => {
    if (!isLoading && !user) {
      window.location.href = "/auth/signin"
    }
  }, [user, isLoading])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading predictive analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PredictiveTools />
        </motion.div>
      </div>
    </div>
  )
}