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

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoading = status === 'loading';

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

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = "/auth/signin";
    }
  }, [status]);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Navigation />
      
      <div className="p-6 max-w-7xl mx-auto relative z-10">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-red-500 rounded-lg opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-green-500/30 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400 animate-pulse">{user?.name || 'Revolutionary'}</span>! 🇰🇪
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Your civic command center - Track your impact on Kenya's democracy
              </p>
              
              {/* Status Badge */}
              <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-red-500/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-green-400 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-green-300 font-black text-sm uppercase tracking-wider">ACTIVE</span>
                </div>
                <span className="text-white">•</span>
                <span className="text-white font-bold">LEVEL {Math.floor(learningProgress/25) + 1}</span>
              </div>
            </div>
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
            <Card key={index} className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border-2 border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor} shadow-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-3xl font-black text-white">{stat.value}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide">{stat.title}</h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-green-400 to-red-400 rounded-full"></span>
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-4 text-sm">Connect with fellow civic activists.</p>
                <Link href="/community">
                  <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-all">Join Discussion</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                  </div>
                  Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-4 text-sm">Expand your civic knowledge.</p>
                <Link href="/learn">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg hover:shadow-blue-500/50 transition-all">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors">
                    <Award className="h-6 w-6 text-orange-400" />
                  </div>
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-4 text-sm">Develop leadership skills.</p>
                <Link href="/leadership-academy">
                  <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-all">Go to Academy</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                    <TrendingUp className="h-6 w-6 text-emerald-400" />
                  </div>
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-4 text-sm">See your network growth.</p>
                <Link href="/impact">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg hover:shadow-emerald-500/50 transition-all">View Impact</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Invite Friends */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-green-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Share2 className="h-5 w-5 text-green-400" />
                  </div>
                  Invite Friends
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Grow your network of engaged citizens and multiply your impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/30 backdrop-blur-sm">
                  <p className="text-sm text-green-300 font-bold mb-2">
                    Why invite friends?
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Build a stronger civic community</li>
                    <li>• Increase voter registration</li>
                    <li>• Earn civic impact points</li>
                  </ul>
                </div>
                <Button onClick={handleInvite} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-all">
                  <Users className="mr-2 h-5 w-5" />
                  Invite via WhatsApp
                </Button>
                <div className="text-center text-sm">
                  {inviteCount > 0 && (
                    <p className="text-green-400 font-bold">
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
            <Card className="h-full relative group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700 hover:border-blue-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  Continue Learning
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Expand your civic knowledge and constitutional rights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white font-bold">
                    <span>Progress</span>
                    <span>{learningProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50"
                      style={{ width: `${learningProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-xl border border-green-500/30 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-white font-semibold">Voter Registration</span>
                    </div>
                    <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-bold shadow-lg">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-white font-semibold">Constitutional Rights</span>
                    </div>
                    <span className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full font-bold shadow-lg">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-xl border border-gray-600">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300 font-semibold">Civic Engagement</span>
                    </div>
                    <span className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full font-bold">Locked</span>
                  </div>
                </div>

                <Link href="/learn">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg hover:shadow-blue-500/50 transition-all">
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
          <Card className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border-2 border-gray-700">
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-red-400 rounded-full"></span>
                Recent Civic Activity
              </CardTitle>
              <CardDescription className="text-gray-300">Your latest contributions to the community</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Commented on "Youth and Governance"</p>
                    <p className="text-xs text-gray-400 font-medium">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Completed "Voter Rights" lesson</p>
                    <p className="text-xs text-gray-400 font-medium">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 transition-colors">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Users className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Invited 3 friends to join</p>
                    <p className="text-xs text-gray-400 font-medium">3 days ago</p>
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