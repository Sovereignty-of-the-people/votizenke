"use client"

import { Navigation } from "@/components/navigation"
import { LeadershipAcademyNew } from "@/components/leadership-academy-new"
import { motion } from "framer-motion"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LeadershipAcademyNew />
        </motion.div>
      </div>
    </div>
  )
}