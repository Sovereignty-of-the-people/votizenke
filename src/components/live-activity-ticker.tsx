"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, TrendingUp, Calendar, Award, MapPin } from "lucide-react"

interface LiveActivity {
  id: string
  type: "user_join" | "comment" | "invite" | "network_growth" | "chapter_formed" | "event_created"
  message: string
  user?: string
  location?: string
  timestamp: Date
  icon: React.ReactNode
}

export function LiveActivityTicker() {
  const [activities, setActivities] = useState<LiveActivity[]>([
    {
      id: "1",
      type: "user_join",
      message: "Just joined the movement!",
      user: "Amina K.",
      location: "Nairobi",
      timestamp: new Date(Date.now() - 30000),
      icon: <Users className="h-4 w-4 text-green-600" />
    },
    {
      id: "2",
      type: "comment",
      message: "Started a discussion about youth employment",
      user: "David M.",
      timestamp: new Date(Date.now() - 120000),
      icon: <MessageSquare className="h-4 w-4 text-blue-600" />
    },
    {
      id: "3",
      type: "invite",
      message: "Invited 5 friends to join",
      user: "Grace W.",
      timestamp: new Date(Date.now() - 180000),
      icon: <TrendingUp className="h-4 w-4 text-purple-600" />
    },
    {
      id: "4",
      type: "chapter_formed",
      message: "Formed Mombasa Youth Chapter",
      user: "James O.",
      location: "Mombasa",
      timestamp: new Date(Date.now() - 300000),
      icon: <MapPin className="h-4 w-4 text-red-600" />
    },
    {
      id: "5",
      type: "event_created",
      message: "Organized voter registration drive",
      user: "Sarah L.",
      location: "Kisumu",
      timestamp: new Date(Date.now() - 420000),
      icon: <Calendar className="h-4 w-4 text-orange-600" />
    }
  ])

  const [liveStats, setLiveStats] = useState({
    totalUsers: 12453,
    activeNow: 892,
    newToday: 234,
    chaptersFormed: 47
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats
      setLiveStats(prev => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        activeNow: Math.max(850, prev.activeNow + Math.floor(Math.random() * 10) - 5),
        newToday: prev.newToday + Math.floor(Math.random() * 2),
        chaptersFormed: prev.chaptersFormed + (Math.random() > 0.9 ? 1 : 0)
      }))

      // Add new activity occasionally
      if (Math.random() > 0.7) {
        const activityTypes = [
          {
            type: "user_join" as const,
            messages: ["Just joined the movement!", "Ready to make a difference!", "Here to vote!"],
            icon: <Users className="h-4 w-4 text-green-600" />
          },
          {
            type: "comment" as const,
            messages: ["Started a new discussion", "Shared an important resource", "Asked a great question"],
            icon: <MessageSquare className="h-4 w-4 text-blue-600" />
          },
          {
            type: "invite" as const,
            messages: ["Invited friends to join", "Growing their network", "Mobilizing their community"],
            icon: <TrendingUp className="h-4 w-4 text-purple-600" />
          }
        ]

        const randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
        const names = ["John K.", "Mary W.", "Peter O.", "Susan M.", "Alex N.", "Faith K.", "Brian M."]
        const locations = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kakamega"]

        const newActivity: LiveActivity = {
          id: Date.now().toString(),
          type: randomActivity.type,
          message: randomActivity.messages[Math.floor(Math.random() * randomActivity.messages.length)],
          user: names[Math.floor(Math.random() * names.length)],
          location: Math.random() > 0.5 ? locations[Math.floor(Math.random() * locations.length)] : undefined,
          timestamp: new Date(),
          icon: randomActivity.icon
        }

        setActivities(prev => [newActivity, ...prev.slice(0, 4)])
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    
    if (seconds < 60) return "just now"
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    return `${Math.floor(seconds / 86400)}d ago`
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-y border-green-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{liveStats.totalUsers.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600">Total Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold text-gray-900">{liveStats.activeNow.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600">Active Now</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">+{liveStats.newToday}</span>
            </div>
            <p className="text-sm text-gray-600">New Today</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">{liveStats.chaptersFormed}</span>
            </div>
            <p className="text-sm text-gray-600">Chapters</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Live Activity</span>
            <Badge variant="secondary" className="text-xs">Real-time</Badge>
          </div>
          
          <div className="space-y-2">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                {activity.icon}
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">{activity.user}</span> {activity.message}
                    {activity.location && (
                      <span className="text-gray-500"> • {activity.location}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500">{formatTimeAgo(activity.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}