"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, BookOpen, MessageSquare, Share2, TrendingUp, Award, Target, Zap } from "lucide-react"
import Link from "next/link"
import { NetworkVisualization } from "@/components/network-visualization"
import { Navigation } from "@/components/navigation"
import { VoterRegistrationPopup } from "@/components/voter-registration-popup"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [inviteCount, setInviteCount] = useState(0)
  const [learningProgress, setLearningProgress] = useState(25)
  const [showVoterPopup, setShowVoterPopup] = useState(false)

  const stats = [
    {
      title: "Civic Score",
      value: "78",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Invites Sent",
      value: inviteCount,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Learning Progress",
      value: `${learningProgress}%`,
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Community Posts",
      value: "12",
      icon: MessageSquare,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const handleInvite = () => {
    setInviteCount(inviteCount + 1);
    // Here you would typically trigger a share dialog
    alert("Share with your friends on WhatsApp!");
  };


  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      setTimeout(() => {
        try {
          const storedUser = localStorage.getItem('votizenke_user')
          if (storedUser) {
            const userData = JSON.parse(storedUser)
            setUser(userData)
            console.log('Dashboard - User authenticated:', userData)
          } else {
            console.log('Dashboard - No user found, redirecting to signin...')
            window.location.href = "/auth/signin"
            return
          }
        } catch (error) {
          console.error('Dashboard - Error checking auth:', error)
          window.location.href = "/auth/signin"
          return
        } finally {
          setIsLoading(false)
        }
      }, 500)
    }

    checkAuth()
  }, [])

  // Show voter registration popup after 8 seconds
  useEffect(() => {
    if (!isLoading && user) {
      const timer = setTimeout(() => {
        if (Math.random() > 0.6) { // 40% chance to show popup
          setShowVoterPopup(true)
        }
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, user])

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
          <p className="text-gray-300 text-lg font-medium">Initializing Revolutionary Dashboard...</p>
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
        {/* Welcome Header */}
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
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">{user?.name || 'Revolutionary'}</span>! 🇰🇪
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Your revolutionary command center - Track your journey to reclaim Kenya
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/community">
                <Button variant="outline" className="flex items-center gap-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all duration-300">
                  <MessageSquare className="h-5 w-5" />
                  COMMUNITY
                </Button>
              </Link>
              <Link href="/leadership">
                <Button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
                  <Award className="h-5 w-5" />
                  LEADERSHIP ACADEMY
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold">REVOLUTIONARY ACTIVE</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-white font-medium">LEVEL {Math.floor(learningProgress/25) + 1} LEADER</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Invite Friends */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-green-600" />
                  Invite Friends
                </CardTitle>
                <CardDescription>
                  Grow your network of engaged citizens and multiply your impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 mb-2">
                    <strong>Why invite friends?</strong>
                  </p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Build a stronger civic community</li>
                    <li>• Increase voter registration</li>
                    <li>• Earn civic impact points</li>
                  </ul>
                </div>
                <Button onClick={handleInvite} className="w-full bg-green-600 hover:bg-green-700">
                  <Users className="mr-2 h-4 w-4" />
                  Invite via WhatsApp
                </Button>
                <div className="text-center text-sm text-gray-600">
                  {inviteCount > 0 && (
                    <p className="text-green-600 font-medium">
                      🎉 You've invited {inviteCount} friends!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Progress */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Continue Learning
                </CardTitle>
                <CardDescription>
                  Expand your civic knowledge and constitutional rights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{learningProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${learningProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">Voter Registration Process</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">Constitutional Rights</span>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">Civic Engagement</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Locked</span>
                  </div>
                </div>

                <Link href="/learn">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Continue Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <NetworkVisualization />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Civic Activity</CardTitle>
              <CardDescription>Your latest contributions to the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Commented on "Youth and Governance"</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed "Voter Rights" lesson</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Invited 3 friends to join</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Voter Registration Popup */}
      <VoterRegistrationPopup
        isOpen={showVoterPopup}
        onClose={() => setShowVoterPopup(false)}
      />
    </div>
  )
}