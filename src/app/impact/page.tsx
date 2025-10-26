"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { NetworkVisualization } from "@/components/network-visualization"
import { TrendingUp, Users, Target, Award, Share2, BarChart3, Calendar, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ImpactPage() {
  const impactStats = [
    {
      title: "Total Reach",
      value: "47",
      change: "+12 this week",
      icon: Users,
      color: "text-green-400",
      bgColor: "bg-green-900/30"
    },
    {
      title: "Voter Registrations",
      value: "23",
      change: "+5 this week",
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-900/30"
    },
    {
      title: "Civic Score",
      value: "892",
      change: "+45 points",
      icon: Award,
      color: "text-purple-400",
      bgColor: "bg-purple-900/30"
    },
    {
      title: "Engagement Rate",
      value: "78%",
      change: "+3% this week",
      icon: BarChart3,
      color: "text-orange-400",
      bgColor: "bg-orange-900/30"
    }
  ]

  const milestones = [
    {
      title: "First Friend Invited",
      description: "You invited your first friend to join VotizenKE",
      date: "2 weeks ago",
      achieved: true,
      icon: Users
    },
    {
      title: "Network Builder",
      description: "Invited 10+ friends to the platform",
      date: "1 week ago",
      achieved: true,
      icon: Share2
    },
    {
      title: "Civic Champion",
      description: "Helped 5 friends register to vote",
      date: "3 days ago",
      achieved: true,
      icon: Target
    },
    {
      title: "Community Leader",
      description: "Reach 50+ total network reach",
      date: "In progress",
      achieved: false,
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-green-900/20 to-red-900/20 rounded-2xl p-8 shadow-2xl border border-green-500/30"
        >
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Your Civic Impact
          </h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl">
            Track your influence and see how you're shaping Kenya's democratic future through your network and civic engagement
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor} shadow-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm font-semibold bg-emerald-900/40 px-2 py-1 rounded-full">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow">{stat.value}</h3>
                <p className="text-sm text-gray-100 font-medium">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NetworkVisualization />
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-gray-800/80 border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-purple-600 rounded-lg shadow-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  Your Milestones
                </CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  Celebrate your achievements on the civic journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                     className={`flex items-start gap-4 p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                      milestone.achieved 
                        ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-400/30' 
                        : 'bg-gray-700/30 border border-gray-600'
                    }`}
                  >
                     <div className={`p-3 rounded-full shadow-lg ${
                      milestone.achieved 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/40' 
                        : 'bg-gray-600 shadow-gray-600/40'
                    }`}>
                      <milestone.icon className={`h-5 w-5 ${
                        milestone.achieved ? 'text-white' : 'text-gray-200'
                      }`} />
                    </div>
                    <div className="flex-1">
                       <h4 className={`font-bold text-lg mb-2 ${
                         milestone.achieved ? 'text-emerald-300' : 'text-white'
                       }`}>
                         {milestone.title}
                       </h4>
                        <p className={`text-sm leading-relaxed mb-3 ${
                          milestone.achieved ? 'text-emerald-100' : 'text-gray-100'
                        }`}>
                          {milestone.description}
                        </p>
                         <div className="flex items-center gap-3">
                           <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                             <Calendar className="h-3 w-3 text-blue-300" />
                             <span className="text-xs text-blue-200 font-medium">{milestone.date}</span>
                           </div>
                         {milestone.achieved && (
                           <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                             ✓ Achieved
                           </span>
                         )}
                       </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 shadow-2xl border-0">
            <CardContent className="p-10 text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Keep Growing Your Impact!</h2>
              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Every friend you invite and every lesson you complete contributes to a stronger democracy in Kenya. 
                Your voice matters, and together we can create lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Share2 className="mr-2 h-5 w-5" />
                  Invite More Friends
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Award className="mr-2 h-5 w-5" />
                  View All Achievements
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}