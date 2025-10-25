"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, MessageSquare, MapPin, Calendar, Activity } from "lucide-react"

interface RealtimeStats {
  totalUsers: number
  activeNow: number
  newToday: number
  petitionsStarted: number
  petitionsSigned: number
  votersRegistered: number
  civicActions: number
  coursesCompleted: number
  donationsMade: number
  growthRate: number
}

export function RealtimeCounter() {
  const [stats, setStats] = useState<RealtimeStats>({
    totalUsers: 12453,
    activeNow: 892,
    newToday: 234,
    petitionsStarted: 89,
    petitionsSigned: 3421,
    votersRegistered: 567,
    civicActions: 234,
    coursesCompleted: 189,
    donationsMade: 78,
    growthRate: 12.5
  })

  const [recentActivity, setRecentActivity] = useState([
    { type: "user_join", message: "New user from Nairobi", time: "2 min ago" },
    { type: "message", message: "Discussion started in Mombasa", time: "5 min ago" },
    { type: "chapter", message: "Kisumu chapter formed", time: "12 min ago" },
    { type: "event", message: "Voter drive in Eldoret", time: "18 min ago" }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats with realistic variations
      setStats(prev => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        activeNow: Math.max(850, prev.activeNow + Math.floor(Math.random() * 10) - 5),
        newToday: prev.newToday + Math.floor(Math.random() * 2),
        petitionsStarted: prev.petitionsStarted + (Math.random() > 0.8 ? 1 : 0),
        petitionsSigned: prev.petitionsSigned + Math.floor(Math.random() * 8),
        votersRegistered: prev.votersRegistered + (Math.random() > 0.85 ? 1 : 0),
        civicActions: prev.civicActions + (Math.random() > 0.9 ? 1 : 0),
        coursesCompleted: prev.coursesCompleted + (Math.random() > 0.95 ? 1 : 0),
        donationsMade: prev.donationsMade + (Math.random() > 0.92 ? 1 : 0),
        growthRate: Math.max(8, Math.min(25, prev.growthRate + (Math.random() - 0.5) * 2))
      }))

      // Add new activity occasionally
      if (Math.random() > 0.7) {
        const activities = [
          { type: "petition_started", message: `New petition: ${["End Police Brutality", "Free Education", "Climate Action"][Math.floor(Math.random() * 3)]}`, time: "just now" },
          { type: "voter_registered", message: `New voter registered in ${["Nairobi", "Mombasa", "Kisumu"][Math.floor(Math.random() * 3)]}`, time: "just now" },
          { type: "civic_action", message: `Civic action in ${["Environmental", "Community", "Peace"][Math.floor(Math.random() * 3)]} campaign`, time: "just now" },
          { type: "course_completed", message: `Leadership course completed`, time: "just now" },
          { type: "donation_made", message: `Donation received for youth programs`, time: "just now" }
        ]
        
        const newActivity = activities[Math.floor(Math.random() * activities.length)]
        setRecentActivity(prev => [newActivity, ...prev.slice(0, 3)])
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_join": return <Users className="h-4 w-4 text-green-600" />
      case "petition_started": return <MessageSquare className="h-4 w-4 text-pink-600" />
      case "voter_registered": return <MapPin className="h-4 w-4 text-teal-600" />
      case "civic_action": return <Calendar className="h-4 w-4 text-rose-600" />
      case "course_completed": return <Users className="h-4 w-4 text-emerald-600" />
      case "donation_made": return <TrendingUp className="h-4 w-4 text-amber-600" />
      default: return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          Live Platform Activity
        </h3>
        <Badge variant="secondary" className="text-green-600">
          Real-time
        </Badge>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
          <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Users</div>
          <div className="text-xs text-green-600 mt-1">+{stats.newToday} today</div>
        </div>

        <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.activeNow.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Active Now</div>
          <div className="text-xs text-blue-600 mt-1">Live</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
          <MessageSquare className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.petitionsSigned.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Petitions Signed</div>
          <div className="text-xs text-purple-600 mt-1">+{stats.petitionsStarted} today</div>
        </div>

        <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.votersRegistered.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Voters Registered</div>
          <div className="text-xs text-orange-600 mt-1">This month</div>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <MapPin className="h-6 w-6 text-purple-600" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{stats.civicActions}</div>
            <div className="text-sm text-gray-600">Civic Actions</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="h-6 w-6 text-orange-600" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{stats.coursesCompleted}</div>
            <div className="text-sm text-gray-600">Courses Done</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Users className="h-6 w-6 text-green-600" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{stats.newToday}</div>
            <div className="text-sm text-gray-600">New Today</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{stats.growthRate.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Growth Rate</div>
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h4>
        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              {getActivityIcon(activity.type)}
              <div className="flex-1">
                <div className="text-sm text-gray-800">{activity.message}</div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}