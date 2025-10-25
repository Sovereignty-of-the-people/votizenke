"use client"

import { useState } from "react"
import { useSession } from "@/components/providers/session-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommunityChat } from "@/components/community-chat"
import { CivicPolls } from "@/components/civic-polls"
import { Navigation } from "@/components/navigation"
import { VoterRegistrationPopup } from "@/components/voter-registration-popup"
import { motion } from "framer-motion"
import { MessageSquare, BarChart3, Users, TrendingUp, Calendar, Bell } from "lucide-react"

export default function CommunityPage() {
  const { user } = useSession()
  const [showVoterPopup, setShowVoterPopup] = useState(false)

  // Show voter registration popup after 5 seconds
  useState(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.5) { // 50% chance to show popup
        setShowVoterPopup(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  })

  const communityStats = [
    { label: "Active Users", value: "12,453", icon: Users, color: "text-green-600" },
    { label: "Live Discussions", value: "89", icon: MessageSquare, color: "text-blue-600" },
    { label: "Active Polls", value: "23", icon: BarChart3, color: "text-purple-600" },
    { label: "Civic Actions", value: "1,234", icon: TrendingUp, color: "text-red-600" }
  ]

  const upcomingEvents = [
    {
      title: "Youth Voter Registration Drive",
      date: "Dec 15, 2024",
      location: "Nairobi, KICC",
      attendees: 234
    },
    {
      title: "Constitutional Rights Workshop",
      date: "Dec 18, 2024", 
      location: "Virtual Event",
      attendees: 567
    },
    {
      title: "Community Leaders Forum",
      date: "Dec 22, 2024",
      location: "Mombasa",
      attendees: 189
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative"
        >
          {/* Futuristic Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Welcome to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Community</span> 🇰🇪
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Connect with thousands of revolutionary Kenyan youth making a difference and taking back our country
          </p>
          
          {/* Status Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold">COMMUNITY ACTIVE</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-white font-medium">12,453 YOUTH ONLINE</span>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {communityStats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color.replace('text-', 'text-').replace('600', '400')}`} />
                  <span className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">{stat.value}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">{stat.label}</h3>
                
                {/* Corner Tech Brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="chat" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700 p-2">
            <TabsTrigger value="chat" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/30 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-bold">
              <MessageSquare className="h-5 w-5" />
              LIVE CHAT
            </TabsTrigger>
            <TabsTrigger value="polls" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/30 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-bold">
              <BarChart3 className="h-5 w-5" />
              POLLS
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/30 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-bold">
              <Calendar className="h-5 w-5" />
              EVENTS
            </TabsTrigger>
            <TabsTrigger value="actions" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/30 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-bold">
              <TrendingUp className="h-5 w-5" />
              ACTIONS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30">
                  <MessageSquare className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Community Chat Rooms</h3>
                  <p className="text-gray-400">Join real-time discussions with revolutionary Kenyan youth</p>
                </div>
              </div>
              <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                <CommunityChat />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="polls" className="space-y-6">
            <CivicPolls />
          </TabsContent>

          <TabsContent value="events" className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30">
                  <Calendar className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Upcoming Civic Events</h3>
                  <p className="text-gray-400">Join revolutionary events and meet other engaged citizens</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Corner Tech Brackets */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      
                      <h4 className="text-lg font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300">
                        {event.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">{event.location}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="h-4 w-4 text-green-400" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                          REGISTER NOW
                        </Button>
                      </div>
                      
                      {/* Scanning Line Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30">
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Quick Actions</h3>
                    <p className="text-gray-400">Accelerate the revolution</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
                    REGISTER TO VOTE
                  </Button>
                  <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all duration-300">
                    INVITE FRIENDS
                  </Button>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black font-bold transition-all duration-300">
                    SHARE CIVIC RESOURCES
                  </Button>
                  <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black font-bold transition-all duration-300">
                    JOIN LOCAL CHAPTER
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30">
                    <Bell className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Stay Updated</h3>
                    <p className="text-gray-400">Revolution intelligence</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl border border-purple-500/30">
                    <h4 className="font-bold text-purple-300 mb-2">🚨 New Policy Alert</h4>
                    <p className="text-sm text-purple-200">Youth Employment Bill introduced in Parliament - Your voice needed!</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl border border-blue-500/30">
                    <h4 className="font-bold text-blue-300 mb-2">⏰ Registration Deadline</h4>
                    <p className="text-sm text-blue-200">Voter registration closes in 45 days - Don't miss out!</p>
                  </div>
                  <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black font-bold transition-all duration-300">
                    ENABLE NOTIFICATIONS
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Voter Registration Popup */}
      <VoterRegistrationPopup
        isOpen={showVoterPopup}
        onClose={() => setShowVoterPopup(false)}
      />
    </div>
  )
}