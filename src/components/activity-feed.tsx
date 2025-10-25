"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Award,
  Heart,
  Share2,
  Eye,
  FileText,
  Vote,
  HandHeart,
  GraduationCap,
  CreditCard
} from "lucide-react"

interface Activity {
  id: string
  type: "user_join" | "message" | "invite" | "chapter_formed" | "event_created" | "achievement" | "discussion_started" | "resource_shared" | "petition_started" | "petition_signed" | "voter_registered" | "civic_action" | "donation_made" | "course_completed"
  user: {
    name: string
    avatar?: string
    location?: string
  }
  content: string
  metadata?: {
    discussionTitle?: string
    resourceName?: string
    chapterName?: string
    eventName?: string
    achievementType?: string
    inviteCount?: number
    petitionTitle?: string
    petitionSignatures?: number
    voterRegistrationCenter?: string
    civicActionType?: string
    donationAmount?: number
    courseName?: string
  }
  timestamp: Date
  stats?: {
    views?: number
    likes?: number
    shares?: number
    comments?: number
    signatures?: number
  }
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      type: "petition_started",
      user: { name: "Amina K.", location: "Nairobi" },
      content: "Started a petition for youth representation",
      metadata: { petitionTitle: "30% Youth Representation in Parliament", petitionSignatures: 1247 },
      timestamp: new Date(Date.now() - 120000),
      stats: { views: 523, likes: 89, signatures: 1247 }
    },
    {
      id: "2",
      type: "voter_registered",
      user: { name: "David M.", location: "Mombasa" },
      content: "Registered as a voter for the first time",
      metadata: { voterRegistrationCenter: "Mombasa IEBC Office" },
      timestamp: new Date(Date.now() - 300000),
      stats: { views: 156, likes: 78 }
    },
    {
      id: "3",
      type: "civic_action",
      user: { name: "Grace W.", location: "Kisumu" },
      content: "Organized a community cleanup drive",
      metadata: { civicActionType: "Environmental Action" },
      timestamp: new Date(Date.now() - 480000),
      stats: { views: 234, likes: 92, shares: 15 }
    },
    {
      id: "4",
      type: "course_completed",
      user: { name: "James O.", location: "Eldoret" },
      content: "Completed leadership training course",
      metadata: { courseName: "Civic Leadership 101" },
      timestamp: new Date(Date.now() - 720000),
      stats: { likes: 67 }
    },
    {
      id: "5",
      type: "donation_made",
      user: { name: "Sarah L.", location: "Nakuru" },
      content: "Donated to support youth programs",
      metadata: { donationAmount: 2500 },
      timestamp: new Date(Date.now() - 900000),
      stats: { likes: 45 }
    },
    {
      id: "6",
      type: "petition_signed",
      user: { name: "Peter N.", location: "Nairobi" },
      content: "Signed the digital rights petition",
      metadata: { petitionTitle: "Protect Digital Privacy in Kenya", petitionSignatures: 8934 },
      timestamp: new Date(Date.now() - 1080000),
      stats: { signatures: 8934 }
    }
  ])

  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new activities
      if (Math.random() > 0.6) {
        const activityTypes = [
          {
            type: "petition_started" as const,
            content: "Started a petition for change",
            metadata: { 
              petitionTitle: ["End Police Brutality", "Free Education for All", "Climate Action Now", "Digital Rights Protection"][Math.floor(Math.random() * 4)],
              petitionSignatures: Math.floor(Math.random() * 5000) + 100
            },
            stats: { views: Math.floor(Math.random() * 800), likes: Math.floor(Math.random() * 200), signatures: Math.floor(Math.random() * 5000) + 100 }
          },
          {
            type: "voter_registered" as const,
            content: "Registered to vote",
            metadata: { 
              voterRegistrationCenter: ["Nairobi IEBC Office", "Mombasa County Hall", "Kisumu Town Hall", "Eldoret Stadium"][Math.floor(Math.random() * 4)]
            },
            stats: { views: Math.floor(Math.random() * 200), likes: Math.floor(Math.random() * 100) }
          },
          {
            type: "civic_action" as const,
            content: "Took civic action",
            metadata: { 
              civicActionType: ["Community Service", "Peace March", "Town Hall Meeting", "Environmental Cleanup"][Math.floor(Math.random() * 4)]
            },
            stats: { views: Math.floor(Math.random() * 300), likes: Math.floor(Math.random() * 150), shares: Math.floor(Math.random() * 30) }
          },
          {
            type: "course_completed" as const,
            content: "Completed a leadership course",
            metadata: { 
              courseName: ["Civic Leadership 101", "Community Organizing", "Policy Advocacy", "Digital Campaigning"][Math.floor(Math.random() * 4)]
            },
            stats: { likes: Math.floor(Math.random() * 80) }
          },
          {
            type: "donation_made" as const,
            content: "Donated to support the movement",
            metadata: { donationAmount: [500, 1000, 2500, 5000][Math.floor(Math.random() * 4)] },
            stats: { likes: Math.floor(Math.random() * 60) }
          },
          {
            type: "petition_signed" as const,
            content: "Signed a petition",
            metadata: { 
              petitionTitle: ["Justice for Victims", "Healthcare Reform", "Education Funding", "Infrastructure Development"][Math.floor(Math.random() * 4)],
              petitionSignatures: Math.floor(Math.random() * 10000) + 500
            },
            stats: { signatures: Math.floor(Math.random() * 10000) + 500 }
          }
        ]

        const randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
        const names = ["John K.", "Mary W.", "Peter O.", "Susan M.", "Alex N.", "Faith K.", "Brian M.", "Lucy W."]
        const locations = ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Thika"]

        const newActivity: Activity = {
          id: Date.now().toString(),
          type: randomActivity.type,
          user: { 
            name: names[Math.floor(Math.random() * names.length)],
            location: locations[Math.floor(Math.random() * locations.length)]
          },
          content: randomActivity.content,
          metadata: randomActivity.metadata,
          timestamp: new Date(),
          stats: randomActivity.stats
        }

        setActivities(prev => [newActivity, ...prev.slice(0, 9)])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_join": return <Users className="h-5 w-5 text-green-600" />
      case "discussion_started": 
      case "message": return <MessageSquare className="h-5 w-5 text-blue-600" />
      case "invite": return <TrendingUp className="h-5 w-5 text-purple-600" />
      case "chapter_formed": return <MapPin className="h-5 w-5 text-red-600" />
      case "event_created": return <Calendar className="h-5 w-5 text-orange-600" />
      case "achievement": return <Award className="h-5 w-5 text-yellow-600" />
      case "resource_shared": return <Share2 className="h-5 w-5 text-indigo-600" />
      case "petition_started":
      case "petition_signed": return <FileText className="h-5 w-5 text-pink-600" />
      case "voter_registered": return <Vote className="h-5 w-5 text-teal-600" />
      case "civic_action": return <HandHeart className="h-5 w-5 text-rose-600" />
      case "course_completed": return <GraduationCap className="h-5 w-5 text-emerald-600" />
      case "donation_made": return <CreditCard className="h-5 w-5 text-amber-600" />
      default: return <Users className="h-5 w-5 text-gray-600" />
    }
  }

  const getActivityTypeLabel = (type: string) => {
    switch (type) {
      case "user_join": return "New Member"
      case "discussion_started": return "Discussion"
      case "message": return "Message"
      case "invite": return "Invitation"
      case "chapter_formed": return "Chapter"
      case "event_created": return "Event"
      case "achievement": return "Achievement"
      case "resource_shared": return "Resource"
      case "petition_started": return "Petition"
      case "petition_signed": return "Signed"
      case "voter_registered": return "Voter"
      case "civic_action": return "Action"
      case "course_completed": return "Course"
      case "donation_made": return "Donation"
      default: return "Activity"
    }
  }

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    
    if (seconds < 60) return "just now"
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    return `${Math.floor(seconds / 86400)}d ago`
  }

  const filteredActivities = filter === "all" 
    ? activities 
    : activities.filter(activity => activity.type === filter)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Activity Feed</h3>
        <div className="flex gap-2 flex-wrap">
          {["all", "petition_started", "voter_registered", "civic_action", "course_completed", "donation_made"].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter(filterType)}
              className={filter === filterType ? "bg-green-600" : "text-gray-600"}
            >
              {filterType === "all" ? "All" : getActivityTypeLabel(filterType)}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            {/* User Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                {activity.user.name.charAt(0)}
              </div>
            </div>

            {/* Activity Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getActivityIcon(activity.type)}
                    <span className="font-semibold text-gray-900">{activity.user.name}</span>
                    {activity.user.location && (
                      <span className="text-sm text-gray-500">• {activity.user.location}</span>
                    )}
                    <Badge variant="secondary" className="text-xs">
                      {getActivityTypeLabel(activity.type)}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-800 mb-2">{activity.content}</p>
                  
                  {activity.metadata?.discussionTitle && (
                    <div className="bg-blue-50 p-2 rounded text-sm text-blue-800 mb-2">
                      📝 {activity.metadata.discussionTitle}
                    </div>
                  )}
                  
                  {activity.metadata?.chapterName && (
                    <div className="bg-red-50 p-2 rounded text-sm text-red-800 mb-2">
                      🏛️ {activity.metadata.chapterName}
                    </div>
                  )}
                  
                  {activity.metadata?.eventName && (
                    <div className="bg-orange-50 p-2 rounded text-sm text-orange-800 mb-2">
                      📅 {activity.metadata.eventName}
                    </div>
                  )}
                  
                  {activity.metadata?.achievementType && (
                    <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-800 mb-2">
                      🏆 {activity.metadata.achievementType}
                    </div>
                  )}
                  
                  {activity.metadata?.resourceName && (
                    <div className="bg-indigo-50 p-2 rounded text-sm text-indigo-800 mb-2">
                      📚 {activity.metadata.resourceName}
                    </div>
                  )}
                  
                  {activity.metadata?.inviteCount && (
                    <div className="bg-purple-50 p-2 rounded text-sm text-purple-800 mb-2">
                      📤 Invited {activity.metadata.inviteCount} friends
                    </div>
                  )}
                  
                  {activity.metadata?.petitionTitle && (
                    <div className="bg-pink-50 p-2 rounded text-sm text-pink-800 mb-2">
                      📋 {activity.metadata.petitionTitle}
                      {activity.metadata.petitionSignatures && (
                        <span className="ml-2 font-semibold">({activity.metadata.petitionSignatures.toLocaleString()} signatures)</span>
                      )}
                    </div>
                  )}
                  
                  {activity.metadata?.voterRegistrationCenter && (
                    <div className="bg-teal-50 p-2 rounded text-sm text-teal-800 mb-2">
                      🗳️ {activity.metadata.voterRegistrationCenter}
                    </div>
                  )}
                  
                  {activity.metadata?.civicActionType && (
                    <div className="bg-rose-50 p-2 rounded text-sm text-rose-800 mb-2">
                      🤝 {activity.metadata.civicActionType}
                    </div>
                  )}
                  
                  {activity.metadata?.courseName && (
                    <div className="bg-emerald-50 p-2 rounded text-sm text-emerald-800 mb-2">
                      🎓 {activity.metadata.courseName}
                    </div>
                  )}
                  
                  {activity.metadata?.donationAmount && (
                    <div className="bg-amber-50 p-2 rounded text-sm text-amber-800 mb-2">
                      💰 KES {activity.metadata.donationAmount.toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="text-xs text-gray-500">
                  {formatTimeAgo(activity.timestamp)}
                </div>
              </div>

              {/* Activity Stats */}
              {activity.stats && (
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  {activity.stats.views !== undefined && (
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {activity.stats.views}
                    </div>
                  )}
                  {activity.stats.likes !== undefined && (
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {activity.stats.likes}
                    </div>
                  )}
                  {activity.stats.shares !== undefined && (
                    <div className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      {activity.stats.shares}
                    </div>
                  )}
                  {activity.stats.comments !== undefined && (
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {activity.stats.comments}
                    </div>
                  )}
                  {activity.stats.signatures !== undefined && (
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {activity.stats.signatures.toLocaleString()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No activities found for this filter
        </div>
      )}
    </div>
  )
}