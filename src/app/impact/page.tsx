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
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Voter Registrations",
      value: "23",
      change: "+5 this week",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Civic Score",
      value: "892",
      change: "+45 points",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Engagement Rate",
      value: "78%",
      change: "+3% this week",
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Navigation */}
      <Navigation />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Civic Impact
          </h1>
          <p className="text-xl text-gray-600">
            Track your influence and see how you're shaping Kenya's democratic future
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
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
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Your Milestones
                </CardTitle>
                <CardDescription>
                  Celebrate your achievements on the civic journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-lg ${
                      milestone.achieved ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      milestone.achieved ? 'bg-green-600' : 'bg-gray-300'
                    }`}>
                      <milestone.icon className={`h-4 w-4 ${
                        milestone.achieved ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        milestone.achieved ? 'text-green-800' : 'text-gray-600'
                      }`}>
                        {milestone.title}
                      </h4>
                      <p className={`text-sm ${
                        milestone.achieved ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {milestone.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{milestone.date}</span>
                        {milestone.achieved && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Achieved
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
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Keep Growing Your Impact!</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Every friend you invite and every lesson you complete contributes to a stronger democracy in Kenya. 
                Your voice matters, and together we can create lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  <Share2 className="mr-2 h-4 w-4" />
                  Invite More Friends
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Award className="mr-2 h-4 w-4" />
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