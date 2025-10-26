"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Target, 
  Award,
  BarChart3,
  PieChart,
  Activity,
  ArrowUp,
  ArrowDown,
  Filter,
  Download
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function Analytics() {
  const [selectedCounty, setSelectedCounty] = useState("all")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all")
  const [timeRange, setTimeRange] = useState("6months")
  const [isLoading, setIsLoading] = useState(false)

  // Mock data - in real app this would come from API
  const counties = [
    "all", "nairobi", "mombasa", "kisumu", "nakuru", "kiambu", "kakamega", "bungoma",
    "meru", "kajiado", "machakos", "kitui", "garissa", "wajir", "mandera", "marsabit",
    "isiolo", "samburu", "trans-nzoia", "uasin-gishu", "elgeyo-marakwet", "nandi",
    "kericho", "bomet", "narok", "baringo", "west-pokot", "turkana", "siaya", "homabay",
    "migori", "nyamira", "nyandarua", "laikipia", "nyeri", "kirinyaga", "muranga", "tharaka-nithi",
    "embu", "kitui", "makueni", "kwale", "kilifi", "tana-river", "lamu", "taita-taveta"
  ]

  const ageGroups = [
    { value: "all", label: "All Ages" },
    { value: "18-24", label: "18-24 Years" },
    { value: "25-30", label: "25-30 Years" },
    { value: "31-35", label: "31-35 Years" }
  ]

  const timeRanges = [
    { value: "1month", label: "Last Month" },
    { value: "3months", label: "Last 3 Months" },
    { value: "6months", label: "Last 6 Months" },
    { value: "1year", label: "Last Year" }
  ]

  // Mock statistics
  const stats = [
    {
      title: "Total Voters Registered",
      value: "47,892",
      change: "+23.5%",
      trend: "up",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Through VotizenKE platform"
    },
    {
      title: "Active Counties",
      value: "42/47",
      change: "+6 counties",
      trend: "up",
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Nationwide coverage"
    },
    {
      title: "Youth Participation Rate",
      value: "68%",
      change: "+15.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Ages 18-35"
    },
    {
      title: "Monthly Growth Rate",
      value: "12.4%",
      change: "+3.1%",
      trend: "up",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      description: "Average monthly increase"
    }
  ]

  // County performance data
  const countyPerformance = [
    { name: "Nairobi", registered: 8234, target: 10000, percentage: 82.3, growth: "+28%" },
    { name: "Kiambu", registered: 5621, target: 7000, percentage: 80.3, growth: "+22%" },
    { name: "Nakuru", registered: 4892, target: 6000, percentage: 81.5, growth: "+19%" },
    { name: "Mombasa", registered: 4123, target: 5500, percentage: 75.0, growth: "+25%" },
    { name: "Kisumu", registered: 3847, target: 5000, percentage: 76.9, growth: "+31%" },
    { name: "Uasin Gishu", registered: 3456, target: 4500, percentage: 76.8, growth: "+18%" },
    { name: "Kakamega", registered: 3234, target: 4200, percentage: 77.0, growth: "+24%" },
    { name: "Kericho", registered: 2891, target: 3500, percentage: 82.6, growth: "+21%" }
  ]

  // Age demographics
  const ageDemographics = [
    { group: "18-24", count: 18432, percentage: 38.5, color: "bg-green-500" },
    { group: "25-30", count: 16789, percentage: 35.1, color: "bg-blue-500" },
    { group: "31-35", count: 12671, percentage: 26.4, color: "bg-purple-500" }
  ]

  // Monthly registration trend
  const monthlyTrend = [
    { month: "Jan", registrations: 3245, target: 3000 },
    { month: "Feb", registrations: 4123, target: 3500 },
    { month: "Mar", registrations: 5892, target: 4000 },
    { month: "Apr", registrations: 7234, target: 5000 },
    { month: "May", registrations: 8921, target: 6000 },
    { month: "Jun", registrations: 10477, target: 7000 }
  ]

  const handleExportData = () => {
    // Mock export functionality
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Data exported successfully!")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-8 p-6 max-w-7xl mx-auto">
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
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Analytics</span>
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Track your revolutionary influence and contribution to Kenyan democracy
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all duration-300">
                <Filter className="h-5 w-5" />
                FILTERS
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
                <Download className="h-5 w-5" />
                EXPORT REPORT
              </Button>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold">LIVE DATA</span>
            </div>
            <span className="text-white">•</span>
            <span className="text-white font-medium">REAL-TIME ANALYTICS</span>
          </div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor} shadow-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center text-sm font-bold px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-emerald-900/40 text-emerald-400' : 'bg-red-900/40 text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow">{stat.value}</div>
                <h3 className="text-sm font-bold text-gray-100 mb-2">{stat.title}</h3>
                <p className="text-xs text-gray-200">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* County Performance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
              <CardHeader className="bg-white/5 rounded-t-xl">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  Top Performing Counties
                </CardTitle>
                <CardDescription className="text-gray-100 text-base">
                  Voter registration progress by county
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {countyPerformance.map((county, index) => (
                    <div key={index} className="space-y-3 p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-white w-24">
                            {county.name}
                          </span>
                          <Badge className="text-xs bg-emerald-600/30 text-emerald-300 border-emerald-400/30">
                            {county.growth}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-100 font-medium">
                          {county.registered.toLocaleString()} / {county.target.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/40"
                          style={{ width: `${county.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Age Demographics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
              <CardHeader className="bg-white/5 rounded-t-xl">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-purple-600 rounded-lg shadow-lg">
                    <PieChart className="h-5 w-5 text-white" />
                  </div>
                  Age Demographics
                </CardTitle>
                <CardDescription className="text-gray-100 text-base">
                  Youth voter registration by age group
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {ageDemographics.map((age, index) => (
                    <div key={index} className="space-y-3 p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">
                          {age.group} Years
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-100 font-medium">
                            {age.count.toLocaleString()} voters
                          </span>
                          <Badge className="text-xs bg-purple-600/30 text-purple-300 border-purple-400/30">
                            {age.percentage}%
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className={`${age.color} h-3 rounded-full transition-all duration-300 shadow-lg`}
                          style={{ width: `${age.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Monthly Trend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
            <CardHeader className="bg-white/5 rounded-t-xl">
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="p-2 bg-emerald-600 rounded-lg shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                Monthly Registration Trend
              </CardTitle>
              <CardDescription className="text-gray-100 text-base">
                Voter registration growth over time
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {monthlyTrend.map((month, index) => (
                  <div key={index} className="space-y-3 p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-white w-12">
                        {month.month}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-100 font-medium">
                          Target: {month.target.toLocaleString()}
                        </span>
                        <span className="text-sm font-bold text-emerald-300">
                          {month.registrations.toLocaleString()}
                        </span>
                        <Badge className={
                          month.registrations >= month.target 
                            ? "bg-emerald-600/30 text-emerald-300 border-emerald-400/30" 
                            : "bg-yellow-600/30 text-yellow-300 border-yellow-400/30"
                        }>
                          {Math.round((month.registrations / month.target) * 100)}%
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div className="w-full bg-white/10 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/40"
                          style={{ width: `${Math.min((month.registrations / month.target) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                  The People's Revolution is Working
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                  We are no longer letting partisan media and political elites drive the narrative. 
                  Through VotizenKE, Kenyan youth are taking control of their democratic destiny. 
                  Every registration is a step toward corrupt-free leadership and accountable governance.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-5xl font-bold mb-3 text-white drop-shadow">47,892</div>
                    <div className="text-white/90 font-medium">New Youth Voters</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-5xl font-bold mb-3 text-white drop-shadow">42/47</div>
                    <div className="text-white/90 font-medium">Counties Active</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-5xl font-bold mb-3 text-white drop-shadow">68%</div>
                    <div className="text-white/90 font-medium">Youth Participation</div>
                  </div>
                </div>
                <Link href="/auth/signin">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Be Part of This Revolution
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}