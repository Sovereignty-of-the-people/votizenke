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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to Your Community 🇰🇪
          </h1>
          <p className="text-xl text-gray-600">
            Connect with thousands of Kenyan youth making a difference
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {communityStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Live Chat
            </TabsTrigger>
            <TabsTrigger value="polls" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Polls
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="actions" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Actions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  Community Chat Rooms
                </CardTitle>
                <CardDescription>
                  Join real-time discussions with fellow Kenyan youth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommunityChat />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="polls" className="space-y-6">
            <CivicPolls />
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Upcoming Civic Events
                </CardTitle>
                <CardDescription>
                  Join events and meet other engaged citizens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>{event.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            {event.attendees} attending
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Register Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Register to Vote
                  </Button>
                  <Button variant="outline" className="w-full">
                    Invite Friends
                  </Button>
                  <Button variant="outline" className="w-full">
                    Share Civic Resources
                  </Button>
                  <Button variant="outline" className="w-full">
                    Join Local Chapter
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-purple-600" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900">New Policy Alert</h4>
                      <p className="text-sm text-purple-700">Youth Employment Bill introduced in Parliament</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Registration Deadline</h4>
                      <p className="text-sm text-blue-700">Voter registration closes in 45 days</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Enable Notifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
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