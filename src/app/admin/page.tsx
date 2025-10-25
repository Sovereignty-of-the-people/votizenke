"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, BookOpen, MessageSquare, TrendingUp, Calendar, Download, Eye, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const adminStats = [
  {
    title: "Total Users",
    value: "1,247",
    change: "+18% this month",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Active Discussions",
    value: "89",
    change: "+12% this week",
    icon: MessageSquare,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Lessons Completed",
    value: "3,456",
    change: "+25% this month",
    icon: BookOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Referral Rate",
    value: "67%",
    change: "+5% this week",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
]

const recentActivity = [
  {
    id: 1,
    user: "Sarah M.",
    action: "Completed 'Constitutional Rights' lesson",
    time: "5 minutes ago",
    type: "learning"
  },
  {
    id: 2,
    user: "John K.",
    action: "Started new discussion 'Youth Leadership'",
    time: "15 minutes ago",
    type: "discussion"
  },
  {
    id: 3,
    user: "Grace W.",
    action: "Invited 5 friends to join",
    time: "1 hour ago",
    type: "referral"
  },
  {
    id: 4,
    user: "David O.",
    action: "Completed voter registration quiz",
    time: "2 hours ago",
    type: "learning"
  },
  {
    id: 5,
    user: "Alice N.",
    action: "Commented on 'Digital Activism' post",
    time: "3 hours ago",
    type: "discussion"
  }
]

const topContributors = [
  { name: "Sarah M.", score: 892, contributions: 45 },
  { name: "John K.", score: 756, contributions: 38 },
  { name: "Grace W.", score: 634, contributions: 32 },
  { name: "David O.", score: 523, contributions: 28 },
  { name: "Alice N.", score: 445, contributions: 24 }
]

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-gray-600">
                Monitor platform performance and user engagement
              </p>
            </div>
            <div className="flex gap-2">
              {["24h", "7d", "30d", "90d"].map(period => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Admin Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {adminStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest user actions across the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'learning' ? 'bg-blue-100' :
                        activity.type === 'discussion' ? 'bg-purple-100' :
                        'bg-green-100'
                      }`}>
                        {activity.type === 'learning' && <BookOpen className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'discussion' && <MessageSquare className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'referral' && <Users className="h-4 w-4 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Contributors */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  Top Contributors
                </CardTitle>
                <CardDescription>
                  Most engaged users this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full text-purple-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                          <p className="text-xs text-gray-500">{contributor.contributions} contributions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-purple-600">{contributor.score}</p>
                        <p className="text-xs text-gray-500">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common administrative tasks and tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-sm">Manage Users</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                  <span className="text-sm">Moderate Content</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <span className="text-sm">Edit Lessons</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                  <span className="text-sm">View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}