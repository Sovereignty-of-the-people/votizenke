"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RealtimeCounter } from "@/components/realtime-counter"
import { ActivityFeed } from "@/components/activity-feed"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { Activity, TrendingUp, Users, MessageSquare, Zap, Globe } from "lucide-react"

export default function LivePage() {
  const [globalStats, setGlobalStats] = useState({
    totalActions: 45678,
    peopleReached: 123456,
    communitiesFormed: 234,
    policiesInfluenced: 12
  })

  const [trendingTopics, setTrendingTopics] = useState([
    { topic: "Youth Employment", mentions: 1234, sentiment: "positive" },
    { topic: "Constitutional Reform", mentions: 987, sentiment: "neutral" },
    { topic: "Voter Registration", mentions: 856, sentiment: "positive" },
    { topic: "Climate Action", mentions: 743, sentiment: "positive" },
    { topic: "Education Reform", mentions: 612, sentiment: "mixed" }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalStats(prev => ({
        totalActions: prev.totalActions + Math.floor(Math.random() * 10),
        peopleReached: prev.peopleReached + Math.floor(Math.random() * 50),
        communitiesFormed: prev.communitiesFormed + (Math.random() > 0.9 ? 1 : 0),
        policiesInfluenced: prev.policiesInfluenced + (Math.random() > 0.95 ? 1 : 0)
      }))

      setTrendingTopics(prev => prev.map(topic => ({
        ...topic,
        mentions: topic.mentions + Math.floor(Math.random() * 5)
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "text-green-600 bg-green-100"
      case "negative": return "text-red-600 bg-red-100"
      case "mixed": return "text-yellow-600 bg-yellow-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            Live Activity Center
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </h1>
          <p className="text-xl text-gray-600">
            Real-time updates from the VotizenKE movement across Kenya
          </p>
        </motion.div>

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {globalStats.totalActions.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">Total Actions</p>
              <Badge variant="secondary" className="mt-2 text-green-600">
                +{Math.floor(Math.random() * 100)} this hour
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {globalStats.peopleReached.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">People Reached</p>
              <Badge variant="secondary" className="mt-2 text-blue-600">
                +{Math.floor(Math.random() * 500)} today
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {globalStats.communitiesFormed}
              </div>
              <p className="text-sm text-gray-600">Communities Formed</p>
              <Badge variant="secondary" className="mt-2 text-purple-600">
                +{Math.random() > 0.7 ? 1 : 0} this week
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {globalStats.policiesInfluenced}
              </div>
              <p className="text-sm text-gray-600">Policies Influenced</p>
              <Badge variant="secondary" className="mt-2 text-orange-600">
                +{Math.random() > 0.8 ? 1 : 0} this month
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activity">Activity Feed</TabsTrigger>
            <TabsTrigger value="stats">Live Stats</TabsTrigger>
            <TabsTrigger value="trending">Trending Topics</TabsTrigger>
            <TabsTrigger value="map">Live Map</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-6">
            <ActivityFeed />
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <RealtimeCounter />
          </TabsContent>

          <TabsContent value="trending" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Trending Topics
                </CardTitle>
                <CardDescription>
                  Most discussed topics across the VotizenKE platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{topic.topic}</h4>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">
                            {topic.mentions.toLocaleString()} mentions
                          </span>
                          <Badge className={getSentimentColor(topic.sentiment)}>
                            {topic.sentiment}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          #{index + 1}
                        </div>
                        <div className="text-xs text-gray-500">trending</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Live Activity Map
                </CardTitle>
                <CardDescription>
                  Real-time civic activities happening across Kenya
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 text-center">
                  <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Interactive Map Coming Soon
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Real-time visualization of activities across all Kenyan counties
                      </p>
                      <div className="flex justify-center gap-2">
                        {["Nairobi", "Mombasa", "Kisumu", "Eldoret"].map((city, index) => (
                          <div key={index} className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                            {city}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}